import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"
import CenteredColumn from "../components/layouts/centeredColumn"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout fullHeight withFooter>
    <SEO title="404: Not found" />
    <CenteredColumn>
      <h1>Erreur 404</h1>
      <p>En français : cette page n'existe pas.</p>
      <p><Link to="/">Retour à l'accueil ?</Link></p>
    </CenteredColumn>
  </Layout>
)

export default NotFoundPage
