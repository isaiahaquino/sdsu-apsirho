import * as React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import NewsletterPrev from '../../components/NewsletterPrev'
import '../../styles/brhothersPage.css'

function BrhothersPage({ data }) {
  return (
    <Layout>

      <div className='brhothers-main pageMain'>
        <h1 className='pageTitle'>BRHOTHERS OF ALPHA CHAPTER</h1>
        <p className='para'>{data.contentfulBrhothersPage.paragraph1.paragraph1}</p>
        <div className='brhothers-classes'>
          {
            data.allContentfulBrhothersClasses.nodes.map(node => (            
              <Link key={node.class} to={`/brhothers/${node.class}`}>
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

export const query = graphql`
query {
  contentfulBrhothersPage {
    paragraph1 {
      paragraph1
    }
  }
  allContentfulBrhothersClasses {
    nodes {
      class
      id
    }
  }
}`


export default BrhothersPage