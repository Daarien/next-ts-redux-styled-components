import React from "react";
import styled from "styled-components";
import Header from "./Header";

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */

  > main {
    flex-grow: 1;
    padding-top: 2rem;
    /* max-width: 1200px;
    margin: 30px auto; */
  }

  > footer {
    section {
      display: flex;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;

      span {
        margin: 1rem auto 2rem;
      }
    }
  }
`;

interface Props {
  title?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => {
  return (
    <StyledLayout>
      <Header title={title} />
      <main>{children}</main>
      <footer>
        <hr />
        <section>
          <span>Footer</span>
        </section>
      </footer>
    </StyledLayout>
  );
};

export default Layout;
