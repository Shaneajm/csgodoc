import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import { itemListGuides } from "../../utils/sidebar/item-list"
import { space } from "../../utils/presets"
import Container from "../../components/container"
import DocSearchContent from "../../components/docsearch-content"
import Breadcrumb from "../../components/docs-breadcrumb"

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} itemList={itemListGuides}>
        <DocSearchContent>
          <Container>
            <Helmet>
              <title>Guides</title>
              <meta name="description" content="insert meta description" />
            </Helmet>
            <Breadcrumb
              itemList={itemListGuides}
              location={this.props.location}
            />
            <h1 id="csgo-guides" css={{ marginTop: 0 }}>
              Guides
            </h1>
          </Container>
        </DocSearchContent>
      </Layout>
    )
  }
}

export default IndexRoute
