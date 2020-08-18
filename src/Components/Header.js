import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HeaderContainer = styled.header`
  background-color: #3b6978;
  padding: 10px;
  font-weight: 400;
  color: #fff;
`;

const HeaderText = styled.h1`
  font-size: 2 rem;
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
