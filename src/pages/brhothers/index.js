import * as React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import NewsletterPrev from '../../components/NewsletterPrev'
import '../../styles/brhothersPage.css'
import { Seo } from '../../components/seo'

function BrhothersPage({ data }) {

  const nodes = data.allContentfulClasses.nodes;

  return (
    <Layout>

      <div className='brhothers-main pageMain'>
        <h1 className='pageTitle'>BRHOTHERS OF ALPHA CHAPTER</h1>
        <p className='para'>{data.contentfulBrhothersPage.paragraph.paragraph}</p>
        <Link key={data.contentfulClasses.id} to={`/brhothers/${data.contentfulClasses.slug}`} id="founding-fathers">
          <h2>{data.contentfulClasses.class}</h2>
        </Link>
        <div className='brhothers-classes'>
          {
             nodes.map(node => (
              <Link key={node.id} to={`/brhothers/${node.slug}`}>
                <h2>{node.class}</h2>
              </Link>
            ))
          }

        </div>
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
query {
  contentfulBrhothersPage {
    paragraph {
      paragraph
    }
  }
  allContentfulClasses(sort: {fields: order, order: ASC}, skip: 1) {
    nodes {
      class
      slug
      id
    }
  }
  contentfulClasses(order: {eq: 1}) {
    class
    slug
    id
  }
}`


export default BrhothersPage