import React from "react";
import { Golden, Page, Rule } from "../styles/novel";

const Novel = ({ allPokemon }) => {
  return (
    <Page>
      <h1>Simon's Novel</h1>
      <h2>Meet the Cast</h2>
      <p>
        <Golden>
          <strong>Ash</strong>
        </Golden>
        - the <em>superstar</em> of pokemon he is the kindest and has most
        justice in his heart. his bonds with pokemon are the biggest!
      </p>
      <Rule />
    </Page>
  );
};

export default Novel;
