import * as React from "react"
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import '../styles/homePage.css'

function HomePage({ data }) {
  return (
    <Layout>
      <div className="home-video">
        <video width='1280px' height='720px' autoplay='true' muted loop='true'>
          <source src={data.contentfulAsset.file.url} type='video/mp4'></source>
        </video>
      </div>
      
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  contentfulAsset(filename: {eq: "rush.mp4"}) {
    file {
      url
    }
  }
}
`

export default HomePage