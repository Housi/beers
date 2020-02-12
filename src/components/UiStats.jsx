import React from "react";
import styled from "styled-components";
import shortid from "shortid";

const Stats = styled.div`
  text-align: center;
  padding: 0 10px 12px 0;
`;

const Stat = ({ name, value }) => (
  <fieldset>
    <legend>{name}</legend>
    {value || "N/A"}
  </fieldset>
);

const UiStats = ({ stats, children }) => (
  <Stats>
    {children}
    {Object.keys(stats).map(key => (
      <Stat name={key} value={stats[key]} key={shortid.generate()} />
    ))}
  </Stats>
);

export default UiStats;
