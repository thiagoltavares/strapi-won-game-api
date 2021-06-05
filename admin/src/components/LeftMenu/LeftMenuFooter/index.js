import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Powered by </span>
        <A key="website" href="https://strapi.io" target="_blank" rel="noopener noreferrer">
          Won Games
        </A>
      </div>
    </Wrapper>
  );
}


export default LeftMenuFooter;
