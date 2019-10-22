import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Container from "../components/container";
import HomepageGuides from "../components/homepage/homepage-guides"

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <meta name="Description" content="CSGO Doc" />
        </Helmet>
        <main
          id={`reach-skip-nav`}
          css={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `space-between`
          }}
        >
          <div css={{ flex: `1 1 100%` }}>
            <Container withSidebar={false}>

            </Container>
          </div>

          <HomepageGuides />
        </main>
      </Layout>
    );
  }
}

export default IndexRoute;
