import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import '../styles/aboutPage.css'
import NewsletterPrev from '../components/NewsletterPrev'
import { Seo } from '../components/Seo'

function AboutPage({ data }) {
  return (
    <Layout>

      <div className='about-main pageMain'>
        <h1 className='pageTitle'>ABOUT</h1>
        <div className='mission-statement about-container'>
          <img src={data.contentfulAboutPage.aboutImages[0].file.url} alt=''></img>
          <h2 className='pageSubtitle'>Mission Statement</h2>
          <p className='para'>{data.contentfulAboutPage.missionStatement.missionStatement}</p>
        </div>
        <div className='exec-board about-container'>
          <div className='board'>
            <h2 className='pageSubtitle'>Executive Board</h2>
            <h3>President:</h3>
            <p>{data.contentfulAboutPage.president}</p>
            <h3>Vice President Internal:</h3>
            <p>{data.contentfulAboutPage.vicePresidentInternal}</p>
            <h3>Vice President External:</h3>
            <p>{data.contentfulAboutPage.vicePresidentExternal}</p>
            <h3>Secretary:</h3>
            <p>{data.contentfulAboutPage.secretary}</p>
            <h3>Treasurer:</h3>
            <p>{data.contentfulAboutPage.treasurer}</p>
            <h3>Sergeant At Arms:</h3>
            <p>{data.contentfulAboutPage.sergeantAtArms}</p>
          </div>
          <img src={data.contentfulAboutPage.aboutImages[1].file.url} alt=''></img>
        </div>
      </div>


      <NewsletterPrev />

    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title={'Alpha Chapter | About Us'}
  />
)

export const query = graphql`
query {
  contentfulAboutPage {
    president
    vicePresidentInternal
    vicePresidentExternal
    secretary
    treasurer
    sergeantAtArms
    missionStatement {
      missionStatement
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