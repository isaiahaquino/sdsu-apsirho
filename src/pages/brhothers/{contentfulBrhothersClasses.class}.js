import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import NewsletterPrev from '../../components/NewsletterPrev'

function ClassPage({ data }) {
  return (
    <Layout>

      <div className='class-main pageMain'>
        
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