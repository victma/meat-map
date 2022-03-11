import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"
import Calendar from "../components/calendar/calendar"

const FruitsCalendarPage = ({ data }) => (
  <Layout fullHeight>
    <SEO title="Fruits" />
    <Calendar parts={data.mapsJson.parts} images={data.allFile.nodes}/>
  </Layout>
)

export default FruitsCalendarPage

export const query = graphql`
  {
    mapsJson(map: {eq: "fruits"}, country: {eq: "fr"}) {
      parts {
        name
        period
      }
    }
    allFile(filter: {relativePath: {regex: "/^images/fruits/[a-z]+.jpg$/"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
        name
      }
    }
  }
`
