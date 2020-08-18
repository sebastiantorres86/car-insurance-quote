import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { getYearDifference, calculateBrand, getPlan } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #84a9ac;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #204051;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #3b6978;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: #cf1b1b;
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ saveSummary, saveLoading }) => {
  const [data, saveData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, saveError] = useState(false);

  // Extract values from state
  const { brand, year, plan } = data;

  // Read the data from the form and place it in the State
  const getInformation = (e) =>
    saveData({ ...data, [e.target.name]: e.target.value });

  // When the user presses submit
  const quoteInsurance = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      saveError(true);
      return;
    } else {
      saveError(false);
    }

    // Base Price of $2000
    let result = 2000;

    // Get the difference of years
    const difference = getYearDifference(year);

    // For each year you have to subtract 3%
    result -= (difference * 3 * result) / 100;

    // American 15%
    // Asian 5%
    // European 30%
    result = calculateBrand(brand) * result;

    // Basic increases 20%
    // Full 50%
    const planIncrement = getPlan(plan);
    result = parseFloat(planIncrement * result).toFixed(2);

    saveLoading(true);

    setTimeout(() => {
      // Delete the Spinner
      saveLoading(false);

      // Pass the information to the main component
      saveSummary({
        quote: Number(result),
        data,
      });
    }, 3000);
  };

  return (
    <form onSubmit={quoteInsurance}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={getInformation}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={getInformation}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getInformation}
        />{" "}
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={getInformation}
        />{" "}
        Full
      </Field>

      <Button type="submit">Quote</Button>
    </form>
  );
};

Form.propTypes = {
  saveSummary: PropTypes.func.isRequired,
  saveLoading: PropTypes.func.isRequired,
};

export default Form;
