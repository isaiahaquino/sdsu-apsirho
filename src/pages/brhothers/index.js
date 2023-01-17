import * as React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import '../../styles/brhothersPage.css'
import { Seo } from '../../components/seo'

function BrhothersPage({ data }) {

  return (
    <Layout>

      <div className='pageHeading'>
        <img className='pageHeadingImg' src={data.contentfulBrhothersPage.brhothersPageImage.url} alt=''></img>
        <h1 className='pageTitle'>BRHOTHERS OF ALPHA CHAPTER</h1>
      </div>

      <div className='pageContainer'>
        <div className='pageDiv'>
          <div className='pagePara single'>
            <p className='para'>{data.contentfulBrhothersPage.paragraph.paragraph}</p>
          </div>
        </div>
      </div>

      <Link key={data.contentfulClasses.id} to={`/brhothers/${data.contentfulClasses.slug}`} id="founding-fathers">
        <h2>{data.contentfulClasses.class}</h2>
      </Link>

      <div className='brhothers-classes'>
        {
            data.allContentfulClasses.nodes.map(node => (
            <Link className='para' key={node.id} to={`/brhothers/${node.slug}`}>
              <h2>{node.class}</h2>
            </Link>
          ))
        }
      </div>      

    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title={'Brhothers | Alpha Chapter'}
  />
)

export const query = graphql`
query {
  contentfulBrhothersPage {
    paragraph {
      paragraph
    }
    brhothersPageImage {
      url
    }
  }
  allContentfulClasses(sort: {fields: order, order: ASC}, skip: 1) {
    nodes {
      class
      slug
      id
    }
  }
  contentfulClasses(order: {eq: 1}) {
    class
    slug
    id
  }
}`


export default BrhothersPage