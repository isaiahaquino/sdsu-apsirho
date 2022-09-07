import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import NewsletterPrev from '../../components/NewsletterPrev'
import '../../styles/classesPage.css'
// import Brho from '../../components/Brho'
import { Seo } from '../../components/seo'

function ClassPage({ data }) {

  const info = data.contentfulClasses;

  return (
    <Layout>

      <div className='class-main pageMain'>
        <h1 className='pageTitle'>{info.class.toUpperCase()}</h1>
        <img src={info.classImage === null ? 'data:,' : info.classImage.file.url} alt=''></img>
        <div className='class-sub'>
          <h2 className='pageSubtitle'>{info.className}</h2>
          <h3>{info.semester}</h3>
        </div>


        <div className='class-list'>
          {
            info.brhos.map(brho => (
              <p>{brho}</p>
            ))
          }
        </div>

        {/* <div className='class-photos'>
          {
            info.brho.map(brho => (
              <Brho
                name={brho.title}
                image={brho.file.url}
              />
            ))
          }
        </div> */}
        
      </div>

      <NewsletterPrev />
    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title={'Brhothers | Alpha Chapter'}
  />
)

export const query = graphql`
query ($id: String) {
  contentfulClasses(id: {eq: $id}) {
    class
    classImage {
      file {
        url
      }
    }
    className
    semester
    brhos
  }
}
` 

export default ClassPage