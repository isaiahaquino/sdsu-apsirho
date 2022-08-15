import * as React from 'react'
import Layout from '../components/Layout'
import '../styles/chaptersPage.css'
import { graphql } from 'gatsby'

function ChaptersPage({ data }) {
  return (
    <Layout>
      <div className='chapters-main pageMain'>
        <h1 className='pageTitle'>CHAPTERS</h1>
        <p className='para'>{data.contentfulChaptersPage.paragraph.paragraph}</p>
        <div className='chapters-container'>
          {
            data.allContentfulChapters.nodes.map(node => (
                <div className='chapter' key={node.chapter}>
                  <a href={node.url}><h1 className='pageSubtitle'>{node.chapter} ({node.status})</h1></a>
                  <p>{node.location}</p>
                  <p>{node.dateEstablished}</p>
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
  contentfulChaptersPage {
    paragraph {
      paragraph
    }
  }
  allContentfulChapters {
    nodes {
      chapter
      url
      location
      dateEstablished
      status
    }
  }
}`



export default ChaptersPage