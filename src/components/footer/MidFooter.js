import React from 'react';

import styled from 'styled-components';


 const MidFooter = () => {
    return(
    <Container>
        <section>Have Questions?</section>
        <section>Stephanie@pranawellnessworks.com</section> 
            {/* <section>sign up for our WELLNESS NEWSLETTER </section> */}
            {/* <EmailerRequest /> */}
    </Container>);
};

export default MidFooter;

const Container = styled.div`
    text-align: center;
    width: 100%;
`;