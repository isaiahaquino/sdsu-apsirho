import * as React from "react"
import Layout from '../components/Layout'
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
    
      <div className="pageContainer">
        <div className="pageDiv">
          <img src={images[0].url} alt=''></img>
          <div className="pagePara">
            <h2 className="pageSubtitle">Alpha Psi Rho</h2>
            <p className="para">{data.contentfulHomePage.paragraph1.paragraph1}</p>
          </div>
        </div>
      </div>
      
      <div className="pageContainer blueBackground">
        <div className="pageDiv">
          <img src={images[1].url} alt=''></img>
          <div className="pagePara">
            <h2 className="pageSubtitle">We the Gentlemen . . .</h2>
            <p className="para">{data.contentfulHomePage.paragraph2.paragraph2}</p>
          </div>
        </div>
      </div>

      <div className="home-insta">
        <h1 className="pageTitle">WHAT ARE THE BRHOTHERS UP TO?</h1>
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