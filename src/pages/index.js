import React from "react"
import { graphql, Link } from "gatsby"

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
      <h1>La nourriture vivante</h1>
      <p>
        Bien que je cuisine et mange du bœuf, j’ai réalisé il y a quelques années que je ne savais que très peu de choses à propos des
        différentes pièces proposées à la vente. J’avais donc pour projet dans un coin de ma tête de remédier à cela. À la faveur d’un
        pic de motivation, je me suis lancé dans des recherches puis dans la création de la première page de ce site
        (<Link to="beef">la découpe du bœuf</Link>). J’ai passé de longues heures à rassembler et recouper les informations, puis à dessiner
        et à décrire chaque pièce de boucherie.
      </p>
      <p>
        Au cours de ce travail, ma vision sur l’importance du sujet a évolué. Je considérais initialement ces informations comme intéressantes
        mais accessoires. Il me paraissait donc logique que seuls les professionnels et quelques cuisiniers passionnés connaissent	ces détails.
      </p>
      <p>
        Je pense désormais au contraire que chaque consommateur, même le plus occasionnel	, devrait avoir ces connaissances sur la nature même
        de ce qu’il consomme. Autrement dit, comment est-il possible que j’en sache si peu après des années à acheter de la viande et à en
        commander dans les restaurants.
      </p>
      <p>
        J’ai d’abord eu cette réflexion à propos de la viande de bœuf, mais il est évident qu’elle s’applique à tous les aliments. Qu’est-ce
        que le poivre ? Que sont le thé, le fromage ou les œufs ? Sûrement pas uniquement des articles de supermarché.
      </p>
      <p>
        J’ai donc décidé de ne pas m’arrêter au schéma des pièces de bœuf`, mais de créer ce site et d’y ajouter des pages au fur et à mesure.
        Le but n’est pas d’être exhaustif, mais de créer des schémas clairs, interactifs et instructifs. Je crois que les sujets traités sur ce
        site sont basiques (ou qu’ils devraient l’être en tout cas) sous la forme la plus simple possible.
      </p>

    </CenteredColumn>

    <CenteredColumn>
      <h1>La viande</h1>
      <div>
        <ThumbnailButton
          viewBox={data.mapsJson.viewBox}
          path={data.mapsJson.d}
          to="beef"
          text='Découpe du bœuf'
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
