import React from "react"
import { graphql } from "gatsby"

import CenteredColumnLayout from "../components/layouts/centeredColumnLayout"
import SEO from "../components/layouts/seo"
import ButtonLink from "../components/generic/buttonLink"
import ThumbnailButton from "../components/generic/thumbnailButton"

const IndexPage = ({ data }) => (
  <CenteredColumnLayout>
    <SEO title="Acceuil" />
    
    <h1>La viande</h1>
    <div>
      <ThumbnailButton
        viewBox={data.mapsJson.viewBox}
        path={data.mapsJson.d}
        to="beef"
        text='Découpe du boeuf'
      />
    </div>
  </CenteredColumnLayout>
)

export default IndexPage;

export const query = graphql`
query {
  mapsJson(country: {eq: "fr"}, map: {eq: "beef"}) {
    d
    viewBox
  }
}
` 
