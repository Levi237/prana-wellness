import React from 'react';
import styled from 'styled-components';

// import './PackageDisplay.css';

const NewPackageDisplay =({pricePack})=> {

    const showPackage = pricePack.map((pack, key) => {
        const details = pack.details.map((detail, k) => {
            return <tr key={k}><td>{detail.product}</td><td>{detail.included[0]}</td><td>{detail.included[1]}</td><td>{detail.included[2]}</td><td>{detail.included[3]}</td></tr>
        })
        const titles = pack.title.map((title,k) => {
            return <td key={k}>{title}</td>
        })
        const prices = pack.price.map((price,k) => {
            return <td key={k}>{price}</td>
        })
        const durations = pack.duration.map((duration,k) => {
            return <td key={k}>{duration}</td>
        })
        return(
            <Container key={key} className="pack-container">
                <div className="">
                <table>
                    <tr><td>Package</td>{titles}</tr>
                    <tr><td>Price</td>{prices}</tr>
                    <tr><td>Duration</td>{durations}</tr>
                    {details}
                </table>
 

                </div>
            </Container>
        )
    })
    return(<>{showPackage}</>);
};
const Container = styled.div`
    section {
        display: inline-block;
    }
`;
export default NewPackageDisplay;