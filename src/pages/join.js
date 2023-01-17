import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import '../styles/joinPage.css'
import { Seo } from '../components/seo'

function JoinPage ({ data }) {
  return (
    <Layout>

      <div className='pageHeading'>
        <img className='pageHeadingImg' src={data.contentfulJoinPage.joinImages[0].file.url} alt=''></img>
        <h1 className='pageTitle'>JOIN</h1>
      </div>

      <div className='pageContainer'>
        <div className='pageDiv'>
          <img src={data.contentfulJoinPage.joinImages[1].file.url} alt=''></img>
          <p className='para'>{data.contentfulJoinPage.paragraph1.paragraph1}</p>
        </div>
      </div>

      <div className='pageContainer blueBackground'>
        <div className='pageDiv'>
          <div className='pagePara single'>
            <h2 className='pageSubtitle'>ALPHA CHAPTER MEMBERSHIP ELIGIBILITY</h2>
            <pre className='para'>All interests must meet these general eligibilities:<br />{data.contentfulJoinPage.membershipEligibility.membershipEligibility}</pre>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title={'Join APsiRho | Alpha Chapter'}
  />
)

export const query = graphql`
query {
  contentfulJoinPage {
    joinImages {
      file {
        url
      }
    }
    membershipEligibility {
      membershipEligibility
    }
    paragraph1 {
      paragraph1
    }
  }
}
`

export default JoinPage