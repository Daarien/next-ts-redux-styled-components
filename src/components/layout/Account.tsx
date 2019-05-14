import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { Button, Link } from "components/elements";
import styled from "styled-components";
import { dispatcher, TUserInfo } from "store/account";
import { TState } from "store";
import { withRouter, WithRouterProps } from "next/router";
import { getCookie } from "utils/session";

const UserLabel = styled(Button)`
  &::after {
    display: none;
  }
`;

interface Props extends WithRouterProps {
  auth: boolean;
  userInfo: TUserInfo;
  setUser: (userInfo: TUserInfo) => void;
  logOff: () => void;
}

function Account({ auth, userInfo, router, setUser, logOff }: Props) {
  useEffect(() => {
    if (!auth) {
      const jwt = getCookie("jwt");
      if (jwt) {
        setUser(jwt);
      }
    }
  }, []);

  useEffect(() => {
    if (!auth && router!.route === "/user") {
      router.push("/login");
    }
  }, [auth]);

  function handleSelect(eventKey) {
    if (eventKey === "info") {
      router.push("/user");
    }
    if (eventKey === "exit") {
      logOff();
    }
  }

  return (
    <div>
      {auth ? (
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle as={UserLabel} id="header-account-dropdown">
            {userInfo.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="info">Info</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="exit">Exit</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Link route="/login">
          <Button>Войти</Button>
        </Link>
      )}
    </div>
  );
}

export default withRouter(
  connect(
    ({ account }: TState) => ({
      auth: account.auth,
      userInfo: account.userInfo
    }),
    dispatcher
  )(Account)
);
