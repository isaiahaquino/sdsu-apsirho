import * as React from 'react'
import { graphql } from 'gatsby'
import { Seo } from '../../components/seo'
import Layout from '../../components/Layout'

function ArticlePage({ data }) {
  return (
    <Layout>

    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  contentfulNewsletter(id: {eq: $id}) {
    title
    entryDate
    articleText {
      articleText
    } 
    photos {
      url
    }
  } 
}
`

export const Head = () => (
  <Seo 
    title={'Newsletter | Alpha Chapter'}
  />
)
export default ArticlePage