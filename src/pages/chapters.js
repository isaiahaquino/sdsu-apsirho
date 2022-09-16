import * as React from 'react'
import Layout from '../components/Layout'
import '../styles/chaptersPage.css'
import { graphql } from 'gatsby'
import { Seo } from '../components/seo'

function ChaptersPage({ data }) {
  return (
    <Layout>

      <div className='pageHeading'>
        <img className='pageHeadingImg' src={data.contentfulChaptersPage.chaptersImage.url} alt=''></img>
        <h1 className='pageTitle'>CHAPTERS</h1>
      </div>

      <div className='pageContainer'>
        <div className='pageDiv chapterDiv'>
          <p className='para'>{data.contentfulChaptersPage.paragraph.paragraph}</p>
          <div className='chapters-container'>
            {
              data.allContentfulChapters.nodes.map(node => (
                  <div className='chapter' key={node.chapter}>
                    <a href={node.url}><h1 className='pageSubtitle'>{node.chapter} ({node.status})</h1></a>
                    <p className='para'>{node.location}</p>
                    <p className='para'>{node.dateEstablished}</p>
                  </div>
              ))
            }
          </div>
        </div>
      </div>

    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title={'Chapters | Alpha Psi Rho'}
  />
)

export const query = graphql`
query {
  contentfulChaptersPage {
    paragraph {
      paragraph
    }
    chaptersImage {
      url
    }
  }
  allContentfulChapters(sort: {fields: dateEstablished, order: ASC}) {
    nodes {
      chapter
      url
      location
      dateEstablished(formatString: "MMMM Do, YYYY")
      status
    }
  }
}`



export default ChaptersPage