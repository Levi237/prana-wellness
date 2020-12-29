import React from 'react';

import styled from 'styled-components';


 const MidFooter = () => {
    return(
    <Container>
        <section>Have Questions?</section>
        <section>Stephanie@pranawellnessworks.com</section> 
    </Container>);
};

export default MidFooter;

const Container = styled.div`
    text-align: center;
    width: 100%;
`;