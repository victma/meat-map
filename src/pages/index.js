import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layouts/layout"
import CenteredColumn from "../components/layouts/centeredColumn"
import SEO from "../components/layouts/seo"
import ThumbnailButton from "../components/generic/thumbnailButton"
import EarthMap from "../components/index/map"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Acceuil" />
    
    <EarthMap />
    <CenteredColumn>
      <h1>La nouriture vivante</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida mauris eget tellus ullamcorper fringilla. Aliquam erat volutpat. Cras sollicitudin turpis dolor, a ornare odio dignissim sit amet. Mauris suscipit massa at tortor mollis pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tempor vulputate nunc at semper. Curabitur aliquam maximus orci, sed varius ipsum porta vulputate. Sed at euismod libero. In hac habitasse platea dictumst. Praesent gravida elit vitae scelerisque feugiat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida mauris eget tellus ullamcorper fringilla. Aliquam erat volutpat. Cras sollicitudin turpis dolor, a ornare odio dignissim sit amet. Mauris suscipit massa at tortor mollis pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tempor vulputate nunc at semper. Curabitur aliquam maximus orci, sed varius ipsum porta vulputate. Sed at euismod libero. In hac habitasse platea dictumst. Praesent gravida elit vitae scelerisque feugiat.</p>
    </CenteredColumn>

    <CenteredColumn>
      <h1>La viande</h1>
      <div>
        <ThumbnailButton
          viewBox={data.mapsJson.viewBox}
          path={data.mapsJson.d}
          to="beef"
          text='Découpe du boeuf'
        />
      </div>
    </CenteredColumn>
  </Layout>
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
