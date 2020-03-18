import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"

import MapContainer from "../components/maps/mapContainer"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <MapContainer
      parts={data.mapsJson.parts}
    />
  </Layout>
)

export default IndexPage

export const query = graphql`
query MyQuery {
  mapsJson(country: {eq: "fr"}, map: {eq: "beef"}) {
    parts {
      d
      description
      id
      name
      transform
      nutrition {
        lipids {
          text
          value
        }
      }
    }
  }
}
`   