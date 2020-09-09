import React from 'react';
import styled from 'styled-components';
import Cards from "../Module/Cards";

function Contents (props) {

    const {} = props;

    return (
        <Container>
            <Cards/>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: 0;
    left: 0;
    width: 1300px;
    margin: 60px auto 0;
    line-height: 0;
    @media screen and (max-width: 832px) {
        -webkit-column-count: 1;
        -webkit-column-gap: 0px;
        -moz-column-count: 1;
        -moz-column-gap: 0px;
        column-count: 1;
        column-gap: 0px;
    }
    @media screen and (min-width: 833px) and (max-width: 1232px) {
        -webkit-column-count: 2;
        -webkit-column-gap: 0px;
        -moz-column-count: 2;
        -moz-column-gap: 0px;
        column-count: 2;
        column-gap: 0px;
    }
    @media screen and (min-width: 1233px) and (max-width: 1632px) {
        -webkit-column-count: 3;
        -webkit-column-gap: 0px;
        -moz-column-count: 3;
        -moz-column-gap: 0px;
        column-count: 3;
        column-gap: 0px;
    }
    @media screen and (min-width: 1633px) {
        -webkit-column-count: 3;
        -webkit-column-gap: 0px;
        -moz-column-count: 3;
        -moz-column-gap: 0px;
        column-count: 3;
        column-gap: 0px;
    }
`
export default Contents;