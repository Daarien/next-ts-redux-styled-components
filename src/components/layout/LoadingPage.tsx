import React from "react";
import Layout from "components/layout/Layout";
import { Flex } from "components/elements";
import { Spinner } from "react-bootstrap";

const LoadingPage = () => {
  return (
    <Layout>
      <Flex justify="center" style={{ height: "100%" }}>
        <Spinner animation="grow" variant="dark" style={{ margin: "auto" }} />
      </Flex>
    </Layout>
  );
};

export default LoadingPage;
