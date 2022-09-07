import * as React from 'react'
import Layout from '../../components/Layout'
import { Seo } from '../../components/seo.jsx'
import { graphql, Link } from 'gatsby'
import '../../styles/newslettersPage.css'

function NewsletterPage({ data }) {
  return (
    <Layout>

      <div className='newsletters-main'>
        <h1 className='pageTitle'>NEWSLETTERS</h1>
        <div className='newsletters-titles'>
        {
          data.allContentfulNewsletters.nodes.map(node => (
            <div className='newsletter-prev-container' key={node.id}>
              <Link to={`/newsletter/${node.slug}`}><h2 className='subTitle'>{node.title}</h2></Link>
              <p>{node.entryDate}</p>
            </div>
          ))
        }
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulNewsletters {
    nodes {
      slug
      title
      entryDate
      id
      photos {
        url
      }
    }
  }
}
`

export const Head = () => (
  <Seo 
    title={'Newsletters | Alpha Chapter'}
  />
)

export default NewsletterPage