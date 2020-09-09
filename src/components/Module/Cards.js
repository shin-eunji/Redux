import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Photo from "./Photo";

function Cards (props) {

    const [photo, setPhoto] = useState([])

    useEffect(() => {
        axios.get("https://api.unsplash.com/photos/?client_id=t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc").then(res => {
            const data = res.data;
            console.log("data", data);
            setPhoto(data);
        })
    }, [])

    return (
        <Container>
            <CardList>
                {
                    photo.map((item, index) => {
                        return <Photo key={index} item={item} />
                    })
                }
            </CardList>
        </Container>
)
}

const Container = styled.div`
    
`
const CardList = styled.div`
    
`;
export default Cards;