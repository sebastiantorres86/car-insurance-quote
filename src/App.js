import React, { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Summary from "./Components/Summary";
import Result from "./Components/Result";
import Spinner from "./Components/Spinner";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #e7dfd5;
  padding: 3rem;
`;

function App() {
  const [summary, saveSummary] = useState({
    quote: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, saveLoading] = useState(false);

  // Extract data
  const { quote, data } = summary;
  return (
    <Container>
      <Header title="Online Car Insurance Quote" />

      <FormContainer>
        <Form saveSummary={saveSummary} saveLoading={saveLoading} />

        {loading ? <Spinner /> : null}

        <Summary data={data} />

        {!loading ? <Result quote={quote} /> : null}
      </FormContainer>
    </Container>
  );
}

export default App;
