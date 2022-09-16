import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import '../styles/aboutPage.css'
import { Seo } from '../components/seo'

function AboutPage({ data }) {
  return (
    <Layout>

      <div className='pageHeading'>
        <img className='pageHeadingImg' src={data.contentfulAboutPage.aboutImages[0].file.url} alt=''></img>
        <h1 className='pageTitle'>ABOUT</h1>
      </div>

      <div className='pageContainer'>
        <div className='pageDiv'>
          <img src={data.contentfulAboutPage.aboutImages[1].file.url} alt=''></img>
          <div className='pagePara'>
            <h2 className='pageSubtitle'>History</h2>
            <p className='para'>{data.contentfulAboutPage.paragraph1.paragraph1}</p>
          </div>
        </div>
      </div>
      
      <div className='pageContainer blueBackground'>
        <div className='pageDiv'>
          <div className='pagePara single'>
            <h2 className='pageSubtitle'>Mission Statement</h2>
            <p className='para'>{data.contentfulAboutPage.missionStatement.missionStatement}</p>
          </div>
        </div>
      </div>
      
      <div className='aboutInfo'>
        <img className='infoImg' src={data.contentfulAboutPage.aboutImages[2].file.url} alt=''></img>
        <h1 className='infoTitle pageTitle'>ALPHA PSI RHO</h1>
        <h2 className='infoSubtitle pageSubtitle'>BROTHERHOOD | ACADEMICS | PROSPERITY | STRENGTH</h2>
      </div>



    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title={'About Us | Alpha Chapter'}
  />
)

export const query = graphql`
query {
  contentfulAboutPage {
    missionStatement {
      missionStatement
    }
    paragraph1 {
      paragraph1
    }
    paragraph2 {
      paragraph2
    }
    aboutImages {
      file {
        url
      }
    }
  }
}
`




export default AboutPage