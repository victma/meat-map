import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"

import MapContainer from "../components/maps/mapContainer"

const BeefMapPage = ({ data }) => (
  <Layout fullHeight>
    <SEO title="Boeuf" />
    <MapContainer
      parts={data.mapsJson.parts}
      outline={data.mapsJson.d}
    />
  </Layout>
)

export default BeefMapPage

export const query = graphql`
  {
    mapsJson(country: {eq: "fr"}, map: {eq: "beef"}) {
      d
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
        cooking {
          text
          grilled
          roasted
          stewed
        }
        attributes {
          gelatin
          marble
          lean
        }
      }
    }
  }
`
