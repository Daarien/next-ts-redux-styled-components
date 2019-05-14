import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
// import Logo from "../../../static/img/logo.svg";
import Logo from "static/img/x5.png";
import { Flex, Link } from "components/elements";
import Account from "components/layout/Account";

const StyledHeader = styled.header`
  width: 100%;
  color: #fff;
  background-color: ${({ theme }) => theme.activeColor};

  div.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > a {
        margin-right: 30px;
      }
    }
  }
`;

interface Props {
  title: string;
}

function Header({ title }: Props) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledHeader>
        <div className="header-inner">
          <nav>
            <Link route="/">
              <a>
                {/* <Logo /> */}
                <img src={Logo} width="150" />
              </a>
            </Link>

            <Link route="/shops">
              <a>Список табакошопов</a>
            </Link>

            <Link route="announcements">
              <a>Список анонсов</a>
            </Link>

            <Link route="/about">
              <a>Информация</a>
            </Link>
          </nav>
          <section>
            <Account />
          </section>
        </div>
      </StyledHeader>
    </Fragment>
  );
}

export default Header;
