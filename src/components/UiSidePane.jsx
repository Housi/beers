import React, { useState } from "react";
import styled from "styled-components";

const Pane = styled.div`
  position: relative;
  height: 100%;
  width: ${props => (props.open ? `39%` : `0px`)};
`;

const PaneContent = styled.div`
  height: 100%;
  padding: 1em 1em 2em 1em;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const PaneToggle = styled.div`
  position: absolute;
  top: 1em;
  right: 100%;
  font-size: 2em;
  padding: 5px 20px 5px 5px;
  background-color: var(--theme-surfaceColor);
  border-radius: var(--theme-borderRadius) 0 0 var(--theme-borderRadius);
  mix-blend-mode: difference;
  writing-mode: vertical-rl;
  text-orientation: upright;
  &:hover {
    cursor: pointer;
  }
`;

const UiSidePane = ({ name, children }) => {
  const [state, setState] = useState(false);
  const toggleOpen = () => setState(prevValue => !prevValue);
  return (
    <Pane open={state}>
      <PaneToggle onClick={toggleOpen}>{name}</PaneToggle>
      <PaneContent>{children}</PaneContent>
    </Pane>
  );
};

export default UiSidePane;
