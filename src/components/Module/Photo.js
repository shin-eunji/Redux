import React, {useState} from 'react';
import styled from 'styled-components';

function Photo (props) {

    const {
        item
    } = props;

    const [ over, handleMouseover ] = useState(true)

    return (
        <Container>
            <CardImage onMouseEnter={() => handleMouseover(true)} onMouseLeave={() => handleMouseover(false)}>
                {
                    over &&
                    <Hover>

                    </Hover>

                }
                <img src={item.urls.small} alt="photo" />

            </CardImage>
        </Container>
    )
}

const Container = styled.div`
`
const CardImage = styled.div`
    margin-bottom: 20px;
    cursor: zoom-in;
`;
const Hover = styled.div`
    position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(0,0,0,.3), rgba(0,0,0,.0), rgba(0,0,0,.3));
      display:flex;
      flex-direction:row;
      align-items: flex-end;
      justify-content:flex-start;
      z-index: 1000;
`;
export default Photo;