import React from "react";
import styled from "@emotion/styled";
import { firstUppercase } from "../helper";
import PropTypes from "prop-types";

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #204051;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  // Extract data
  const { brand, year, plan } = data;
  if (brand === "" || year === "" || plan === "") {
    return null;
  } else {
    return (
      <SummaryContainer>
        <h2>Quote summary</h2>
        <ul>
          <li>Brand: {firstUppercase(brand)}</li>
          <li>Plan: {firstUppercase(plan)}</li>
          <li>Year of the car: {year}</li>
        </ul>
      </SummaryContainer>
    );
  }
};

Summary.propTypes = {
  data: PropTypes.object.isRequired
}

export default Summary;
