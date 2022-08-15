import * as React from "react"
import Layout from '../components/Layout'
import NewsletterPrev from "../components/NewsletterPrev"
import { graphql } from 'gatsby'
import '../styles/homePage.css'

function HomePage({ data }) {

  const images = data.contentfulEntry.homepagePhotos;

  return (
    <Layout>
      <div className="home-video">
        <video autoPlay={true} muted loop={true}>
          <source src={data.contentfulEntry.homepageVideo.file.url} type='video/mp4'></source>
        </video>
      </div>
      
      <div className="home-intro">
        <img src={images[0].file.url} alt='' className="intro-image-1"></img>
        <p className="para para1">{data.contentfulEntry.paragraph1.paragraph1}</p>
        <img src={images[1].file.url} alt='' className="intro-image-2"></img>
        <p className="para para2">{data.contentfulEntry.paragraph2.paragraph2}</p>
        <img src={images[2].file.url} alt='' className="intro-image-3"></img>
      </div>

      <NewsletterPrev />

      <div className="home-instagram">

      </div>

    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  contentfulEntry {
    ... on ContentfulHomePage {
      homepageVideo {
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
      homepagePhotos {
        file {
          url
          fileName
        }
      }
    }
  }
}

`

export default HomePage