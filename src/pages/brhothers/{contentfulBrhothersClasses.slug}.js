import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import NewsletterPrev from '../../components/NewsletterPrev'
import '../../styles/classesPage.css'
import Brho from '../../components/Brho'

function ClassPage({ data }) {

  const info = data.contentfulBrhothersClasses;

  return (
    <Layout>

      <div className='class-main pageMain'>
        <h1 className='pageTitle'>{info.class}</h1>
        <img src={info.classImage.file.url} alt=''></img>
        <div className='class-sub'>
          <h2 className='pageSubtitle'>{info.className}</h2>
          <h3>{info.semester}</h3>
        </div>


        <div className='class-list'>
          {
            info.brho.map(brho => (
              <p>{brho.title}</p>
            ))
          }
        </div>

        <div className='class-photos'>
          {
            info.brho.map(brho => (
              <Brho
                name={brho.title}
                image={brho.file.url}
              />
            ))
          }
        </div>
        
      </div>

      <NewsletterPrev />
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  contentfulBrhothersClasses(id: {eq: $id}) {
    class
    classImage {
      file {
        url
      }
    }
    className
    semester
    brho {
      title
      file {
        url
      }
    }
  }
}
` 

export default ClassPage