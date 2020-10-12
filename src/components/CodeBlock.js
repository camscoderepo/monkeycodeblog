import React from 'react';
import styled from 'styled-components';

const CodeHighlight = styled.div`
  background-color: #feb;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #f99;
`;

export const CodeBlock = () => {
    return(
        <CodeHighlight />
    )
}