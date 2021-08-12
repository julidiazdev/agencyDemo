// IndexStyles.js:
// ------------------

import styled from 'styled-components';

const Banner = styled.div `
    &:after {
        content: "";
        display: block;
        height: 100vh;
        width: 100%;
        background-image: url('/img/cover.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(100%) blur(2px);
    }
`;

const TextWrapper = styled.div`
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    div{
        display: flex;
        justify-content: cexºnter;
        align-items: center;
        flex-direction: column;
    }
`;

const MoreText = styled.div`
    position: absolute;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.225em;
    font-weight: 600;
    font-size: 1.2rem;
    z-index: 1;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -50%);

    &:after {
        content: "";
        display: block;
        height: 2rem;
        width: 2rem;
        left: 50%;
        position: absolute;
        margin: 1em 0 0 -0.75em;
        background-image: url("arrow.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

const SectionTwo = styled.section`
    background-color: #21b2a6;
    text-align: center;
    padding: 10rem 0;
    
    div {
        width: 66%;
        margin: 0 auto;
    }

    h2 {
        font-size: 3rem;
        padding: 1.35em 0;
        color: #ffffff;
        border-bottom: 2px solid #1d9c91;
        text-transform: uppercase;
        letter-spacing: 0.6rem;
        margin: 0; 
    }
    
    p {
        text-transform: uppercase; color: #c8ece9; text-align: center; letter-spacing: 0.225em; font-size: 1.5rem;
    }

    h5 {
        font-size: 1.4rem;
        line-height: 2rem;
        color: #ffffff;
        border-bottom: 2px solid #1d9c91;
        font-weight: 800;
        letter-spacing: 0.225em;
        text-transform: uppercase;
        padding-bottom: 0.5rem;
        margin-bottom: 5rem;
    }
`;

// We need to export the styles defined
// for these 3 components (Banner, TextWrapper)
export { Banner, TextWrapper, MoreText };