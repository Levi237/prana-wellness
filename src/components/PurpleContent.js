import React, {Component }from 'react';
import styled from 'styled-components';

export default class PurpleContent extends Component {
    render(){
 const { headerContent, toggleEmailSignup } = this.props
 console.log(headerContent)
    return(<>
            <Title>{headerContent.header}</Title>

            <section>
                <Content>
                    {headerContent.message}  
                </Content>
                <ButtonContaner>
                    <button className="purple mobile-fill" value={headerContent.value} onClick={(e) => {toggleEmailSignup(e)}}>{headerContent.button}</button>
                </ButtonContaner>

            </section>
    </>);
};
}

const Title = styled.h1 `
    font-weight: normal;
    color: #FFFFFF;
    @media screen and (max-width: 945px){
            padding: 2.5vw;
        }
`;
const Content = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 50vw;
    font-size: 1.5vw;
    margin-left: 10vw;
    margin-right: 2.5vw;
    float: left;
    color: #fff;
    text-align: left;
    @media screen and (max-width: 945px){
        display: block;
        width: 80vw;
        font-size: 3vw;
        margin-left: 10vw;
        margin-right: 2.5vw;
        margin-bottom: 4vw;
        float: none;
        text-align: justify;
    }
`;
const ButtonContaner = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 27.5vw;
    margin-right: 10vw;
    float: right;
    text-align: center;
    @media screen and (max-width: 945px){

        display: block;
        float: none;
        width: 100%;
    }
`;
