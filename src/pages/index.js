import * as React from "react"
import Layout from '../components/Layout'
import NewsletterPrev from "../components/NewsletterPrev"
import { graphql } from 'gatsby'
import '../styles/homePage.css'
import { Seo } from "../components/seo"

function HomePage({ data }) {

  const images = data.contentfulHomePage.homepagePhotos;

  return (
    <Layout>
      <div className="home-video">
        <video autoPlay={true} muted loop={true}>
          <source src={data.contentfulHomePage.homepageVideo.url} type='video/mp4'></source>
        </video>
      </div>
      
      <div className="home-intro">
        <img src={images[0].url} alt='' className="intro-image-1"></img>
        <p className="para para1">{data.contentfulHomePage.paragraph1.paragraph1}</p>
        <img src={images[1].url} alt='' className="intro-image-2"></img>
        <p className="para para2">{data.contentfulHomePage.paragraph2.paragraph2}</p>
        <img src={images[2].url} alt='' className="intro-image-3"></img>
      </div>

      <NewsletterPrev />

      <div className="home-instagram">

      </div>

    </Layout>
  )
}

export const Head = () => (
  <Seo />
)

export const query = graphql`
query {
  contentfulHomePage {
    homepageVideo {
      url
    }
    paragraph1 {
      paragraph1
    }
    paragraph2 {
      paragraph2
    }
    homepagePhotos {
      url
    }
  }
}
`

export default HomePage