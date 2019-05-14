import React from "react";
import styled from "styled-components";
import { ErrorBoundary } from "./ErrorBoundary";

const Info = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 6px;
  border: 1px solid red;
  .info-header {
    color: darkorchid;
  }
  .info-error {
    background-color: pink;
    margin-right: 10px;
    padding: 3px;
  }
`;
interface Props {
  error: {
    error: string;
    message: string | { name: string; message: string }[];
  };
}

export function ErrorInfo({ error }: Props) {
  let errorMessage = "";
  if (error && error.message) {
    if (typeof error.message === "string") {
      errorMessage = error.message;
    } else if (Array.isArray(error.message)) {
      const errorObj = error.message[0];
      if (errorObj.message) {
        errorMessage = errorObj.name + ": " + errorObj.message;
      }
    }
  }
  return error && error.error ? (
    <ErrorBoundary>
      <Info>
        <span className="info-header">Ответ сервера:</span>
        <span className="info-error">{error.error}</span>
        <span>{errorMessage}</span>
      </Info>
    </ErrorBoundary>
  ) : null;
}
