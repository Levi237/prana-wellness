import React from 'react';
import styled from 'styled-components';

const mobileMax = "800px";
const lightGreen = "rgba(150, 198, 68)";
const namasteArrow = "rgba(220,199,225)";
const samadhiArrow = "rgb(91, 148, 46)";
const karmaArrow = "rgba(150, 91, 165, 0.6)";
const guruArrow = "#965BA5";
const priceArrow = "rgba(150, 91, 165, 0.2)";

const NewPackageDisplay =({deals, details, duration})=> {
    const header = deals.map((deal, k) => {
        return <DetailTD key={k}><span>{deal.name}</span><br/>${deal.price}</DetailTD>
    });
    const detail = details.map((detail, k) => {
        return (
            <tr key={k}>
                <td>{detail.product}</td>
                <td><img src={detail.included[0]}/></td>
                <td><img src={detail.included[1]}/></td>
                <td><img src={detail.included[2]}/></td>
                <td><img src={detail.included[3]}/></td>
            </tr>
        )
    });
    const durations = duration.map((duration,k) => {
        return <td key={k}>{duration}</td>
    });
    return(
        <Container>
            <div>
            <Table>
                <TitleTR>
                    <td></td><td></td><td></td><td></td><td></td>
                </TitleTR>
                <ColorBlockTR>
                    <td>PRICING TABLE</td>{header}
                </ColorBlockTR>
                <ArrowTR>
                    <td></td><td></td><td></td><td></td><td></td>
                </ArrowTR>
                <tr>
                    <td>Monthly Sessions</td>{durations}
                </tr>
                {detail}
            </Table>
            </div>
        </Container>
    )
};
const Container = styled.div`
    section {
        display: inline-block;
    }
    img {
        height: 10px;
        width: 10px;
    }
`;
const Table = styled.table`
    max-with: 800px;
    border-spacing: 0;
    margin: 0 auto;
    background-color: #fff!important;
    z-index: 1;
    position: relative;
    box-shadow 0 14px 12px -12px rgba(0,0,0.6);

    tr {
        border-spacing: 1px;
        padding: 10px;
    }
    tr:first-of-type, tr:nth-of-type(2) td, tr:nth-of-type(3) td  {
        border-bottom:none;
    }
    td {
        width: 0px;
        border-bottom: 1px solid grey;
    }
    td:last-of-type {
        background-color: ${lightGreen};
    @media screen and (max-width: ${mobileMax}) {
        td {
            font-size: 2.8vw;
        }
    }
`;
const TitleTR = styled.tr`
    td {
        text-align: center!important;
        border: none!important;
        border-radius: 10px 10px 0 0;
        height: 10px;
    }
    td:first-of-type {
        background-color: ${priceArrow}!important;
    }
    td:nth-of-type(2) {
        background-color: ${namasteArrow}!important;
    }
    td:nth-of-type(3) {
        background-color: ${karmaArrow}!important;
    }
    td:nth-of-type(4) {
        background-color: ${guruArrow}!important;
    }
    td:last-of-type {
        background-color: ${samadhiArrow}!important;
    }
    @media screen and (max-width: ${mobileMax}) {
        td {
            height: 5px;
        }
    }
`;
const DetailTD = styled.td`

        span {
            font-size: 1.2em!important;
        }
        @media screen and (max-width: ${mobileMax}) {
            span {
                font-size: 3vw!important;
            }
        }

`;
const ColorBlockTR = styled.tr`
    td {
        text-align: center!important;
        font-size: 1.2em;
    }
    td:first-of-type {
        background-color: ${priceArrow}!important;
    }
    td:nth-of-type(2) {
        background-color: ${namasteArrow}!important;
    }
    td:nth-of-type(3) {
        background-color: ${karmaArrow}!important;
    }
    td:nth-of-type(4) {
        background-color: ${guruArrow}!important;
    }
    td:last-of-type {
        background-color: ${samadhiArrow}!important;
    }
    @media screen and (max-width: ${mobileMax}) {
        td { font-size: 4vw; }
    }
`;

const ArrowTR = styled.tr`
    td {
        border-bottom: none;
        border-left: 50px solid transparent; 
        border-right: 50px solid transparent; 
    }
    td:first-of-type{
        border-top: 20px solid ${priceArrow};
        border-left: 120px solid transparent; 
        border-right: 120px solid transparent; 
    }
    td:nth-of-type(2) {
        border-top: 20px solid ${namasteArrow};
    }
    td:nth-of-type(3){
        border-top: 20px solid ${karmaArrow};
    }    
    td:nth-of-type(4){
        border-top: 20px solid ${guruArrow};
    }
    td:last-of-type{
        border-top: 20px solid ${samadhiArrow};
    }
    @media screen and (max-width: ${mobileMax}) {
        td {
            border-left: 7.5vw solid transparent; 
            border-right: 7.5vw solid transparent; 
        }
        td:first-of-type {
            border-top: 3vw solid ${priceArrow};
            border-left: 18vw solid transparent; 
            border-right: 18vw solid transparent; 
        }
        td:nth-of-type(2){
            border-top: 3vw solid ${namasteArrow};
        }
        td:nth-of-type(3){
            border-top: 3vw solid ${karmaArrow};
        }
        td:nth-of-type(4){
            border-top: 3vw solid ${guruArrow};
        }
        td:last-of-type{
            border-top: 3vw solid ${samadhiArrow};
        }
    }
`;

export default NewPackageDisplay;