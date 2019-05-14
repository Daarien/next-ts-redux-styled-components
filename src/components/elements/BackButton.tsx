import React, { FunctionComponent } from "react";
import { IButtonProps } from "interfaces";
import { Button, Router } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface IBackButtonProps extends IButtonProps {
  to?: string;
}

export const BackButton: FunctionComponent<IBackButtonProps> = ({
  to,
  children,
  ...other
}) => {
  function handleClick() {
    if (to) {
      Router.pushRoute(to);
    } else {
      Router.back();
    }
  }
  return (
    <Button onClick={handleClick} {...other}>
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      {children}
    </Button>
  );
};

BackButton.defaultProps = {
  title: "Назад"
};
