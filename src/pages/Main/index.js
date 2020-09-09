import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../../components/views/Header";
import Visual from "../../components/views/Visual";
import axios from "axios";
import Contents from "../../components/views/Contents";
import Photo from "../../components/Module/Photo";

function Main (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Visual/>
            <Contents/>
        </Container>
        )
}

const Container = styled.div`
`
export default Main;