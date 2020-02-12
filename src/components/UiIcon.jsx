import React from "react";
import styled from "styled-components";

const defs = {
  starEmpty:
    "M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z",
  starFull:
    "M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
};

const Symbol = styled.svg`
  width: 1em;
  height: 1em;
`;

function Icon({ name }) {
  return (
    <Symbol viewBox="0 0 32 32" preserveAspectRatio="xMidYMid slice">
      <title>{name}</title>
      <path d={defs[name]} />
    </Symbol>
  );
}

export default Icon;
