import React from 'react';
import styled from 'styled-components';
import './scss/style.scss'

import {Switch, Route} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";


import Cards from "./components/Module/Cards";

function App (props) {

    const {} = props;

    return (
        <Container>
            <Main/>

            <Switch>
                <Route exact path={'/'} component={"Main"}></Route>
                <Route path={'/login'} component={"Login"}></Route>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default App;