import * as React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import NewsletterPrev from '../../components/NewsletterPrev'
import '../../styles/brhothersPage.css'
import { Seo } from '../../components/seo'

function BrhothersPage({ data }) {
  return (
    <Layout>

      <div className='brhothers-main pageMain'>
        <h1 className='pageTitle'>BRHOTHERS OF ALPHA CHAPTER</h1>
        <p className='para'>{data.contentfulBrhothersPage.paragraph.paragraph}</p>
        <div className='brhothers-classes'>
          {
            data.allContentfulBrhothersClasses.nodes.map(node => (
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
  allContentfulBrhothersClasses {
    nodes {
      class
      slug
      id
    }
  }
}`


export default BrhothersPage