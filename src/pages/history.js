import * as React from 'react'
import Layout from '../components/Layout'
import '../styles/historyPage.css'
import NewsletterPrev from '../components/NewsletterPrev'
import { graphql } from 'gatsby'
import { Seo } from '../components/Seo.jsx'


function HistoryPage({ data }) {
  return (
    <Layout>

      <div className='history-main pageMain'>
        <h1 className='pageTitle'>HISTORY</h1>
        <div className='hist-para1 history-container'>
          <img src={data.contentfulHistoryPage.historyImages[0].file.url} alt=''></img>
          <p className='para'>{data.contentfulHistoryPage.paragraph1.paragraph1}</p>
        </div>
        <div className='history-container'>
          <p className='para'>{data.contentfulHistoryPage.paragraph2.paragraph2}</p>
          <img src={data.contentfulHistoryPage.historyImages[1].file.url} alt=''></img>
        </div>
      </div>

      <NewsletterPrev />

    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title={'History | Alpha Chapter'}
  />
)

export const query = graphql`
query {
  contentfulHistoryPage {
    historyImages {
      file {
        url
      }
    }
    paragraph1 {
      paragraph1
    }
    paragraph2 {
      paragraph2
    }
  }
}
`

export default HistoryPage