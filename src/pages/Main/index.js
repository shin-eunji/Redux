import React from 'react';
import styled from 'styled-components';
import Header from "../../components/views/Header";
import Visual from "../../components/views/Visual";

function Main (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Visual/>
        </Container>
    )
}

const Container = styled.div`
`
export default Main;