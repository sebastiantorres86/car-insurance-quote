import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Message = styled.p`
  background-color: #84a9ac;
  color: #e7dfd5;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const QuoteResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #3b6978;
  background-color: #84a9ac;
  margin-top: 1rem;
  position: relative;
`;

const QuoteText = styled.p`
  color: #204051;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <Message>Choose brand, year and type of insurance</Message>
  ) : (
    <QuoteResult>
      <TransitionGroup component="span" className="result">
        <CSSTransition
          classNames="result"
          key={quote}
          timeout={{ enter: 500, exit: 500 }}
        >
          <QuoteText>
            The total is: $<span>{quote}</span>{" "}
          </QuoteText>
        </CSSTransition>
      </TransitionGroup>
    </QuoteResult>
  );
};

Result.propTypes = {
  quote: PropTypes.number.isRequired,
};

export default Result;
