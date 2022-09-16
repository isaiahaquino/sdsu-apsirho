import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import '../../styles/classesPage.css'
import { Seo } from '../../components/seo'

function ClassPage({ data }) {

  const info = data.contentfulClasses;

  return (
    <Layout>

      <div className='pageHeading'>
        <img className={info.classImage === null ? '' : 'pageHeadingImg'} src={info.classImage === null ? 'data:,' : info.classImage.file.url} alt=''></img>
        <h1 className='pageTitle classTitle'>{info.className}</h1>
        <h2 className='para classSemester'>{info.semester}</h2>
      </div>

      <div className='class-list'>
        {
          info.brhos.map(brho => (
            <p className='para'>{brho}</p>
          ))
        }
      </div>

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