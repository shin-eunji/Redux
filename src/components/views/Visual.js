import React from 'react';
import styled from 'styled-components';
import Search from "../Module/Search";

function Visual (props) {

    const {
    } = props;

    return (
        <Container>
            <img src={"https://source.unsplash.com/WLUHO9A_xik/1600x900"} alt={"photo"}/>
            <VisualTitle>
                <VisualBox>
                    <Content>
                        <Title>
                            <h3>Unsplash</h3>
                            <p>The internet’s source of <span className={"link"}>freely-usable images.</span><br/>
                                Powered by creators everywhere.</p>
                        </Title>
                        <SearchForm>
                            <Search/>
                        </SearchForm>
                        <TagBox>
                            <TagTitle>Trending:</TagTitle>
                            <TagItem>flower</TagItem>
                            <TagItem>wallpapers</TagItem>
                            <TagItem>backgrounds</TagItem>
                            <TagItem>happy</TagItem>
                            <TagItem>love</TagItem>
                        </TagBox>
                    </Content>
                </VisualBox>
                <VisualInfo>
                    <Info>
                        <Text><LinkNotice>Photo of the Day</LinkNotice> by <LinkNotice>Jack B</LinkNotice></Text>
                        <Text>Read more about the <LinkNotice>Unsplash License</LinkNotice></Text>
                        <Text><LinkNotice>Create your website today.</LinkNotice></Text>
                    </Info>
                </VisualInfo>
            </VisualTitle>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
`
const VisualTitle = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
const VisualBox = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  color: #fff;
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    width: 830px;
`;
const Title = styled.div`
  h3 {
    font-size: 50px;
    font-weight:800;
  }
  p {
    font-size: 20px;
    margin: 20px 0;
    line-height: 1.3;
    .link {
      color: #aaa;
      text-decoration: underline;
    }
  }
`;
const SearchForm = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    width: 100%;
    background: #fff;
    -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
    &:hover {
      box-shadow: 0px 0px 0px 3px rgba(0,0,0,.2);
    }
`;
const TagBox = styled.div`
    display:flex;
    flex-direction:row;
    margin-top: 16px;
`;
const TagTitle = styled.div`
    font-size: 16px;
`;
const TagItem = styled.div`
    
`;
const VisualInfo = styled.div`
    display: flex;
    flex: 0;
    margin: 20px 30px;
`;
const Info = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
`;
const Text = styled.div`
    display: flex;
    flex-direction:row;
    color: #999;
    font-size: 14px;
    font-weight: 500;
`;
const LinkNotice = styled.div`
    color: #eee;
    font-size: 14px;
    font-weight: 500;
    padding: 0 .4rem;
    cursor: pointer;
`;
export default Visual;