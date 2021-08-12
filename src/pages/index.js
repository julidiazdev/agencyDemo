// index.js: Homepage
// -------------------

import React from 'react';
import { Link } from 'gatsby';
import { Banner, TextWrapper, MoreText } from '../styles/IndexStyles';


export default function Home() {
  return(
    <div style={{ position: 'relative' }}>
    <Banner></Banner>
    <TextWrapper>
      <div>
        <h2>GeekyHacker</h2>
        <p>One Stop for<br/>
        All your development<br/>
        And design needs</p>
        <Link to="/works">Our works</Link>
      </div>
    </TextWrapper>
    <MoreText>Learn more ...</MoreText>
  </div>
  );
}
