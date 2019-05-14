// import React, { FunctionComponent } from 'react'
// import { IButtonProps } from 'interfaces'
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${({ theme }) => theme.mainColor};
  padding: 7px 15px;
  border-radius: 3px;
  transition: background-color 150ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.activeColor};
  }
`;
// export const Button: FunctionComponent<IButtonProps> = props => {
//   return <StyledButton {...props} />
// }

// Button.defaultProps = {
//   type: 'button',
// }
