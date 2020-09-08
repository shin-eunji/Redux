import React from 'react';
import styled from 'styled-components';
import {AiOutlineSearch, AiOutlineEllipsis} from 'react-icons/ai'

function Header (props) {

    const {} = props;

    return (
        <Container>
            <TopHeader>
                <Logo>
                    <img src="" alt="unsplash"/>
                </Logo>
                <SearchForm>
                    <AiOutlineSearch Color={"#333"} fontSize={"20"}/>
                    <input type="text"/>
                    <AiOutlineSearch Color={"#333"} fontSize={"20"}/>
                </SearchForm>
                <QuickMenu>
                    <SubMenu>
                        <Link>Topics</Link>
                        <Link>Explore</Link>
                        <Link>
                            <AiOutlineEllipsis/>
                        </Link>
                    </SubMenu>
                    <InfoMenu>
                        <Link className={"btn"}>Submit a photo</Link>
                        <UserInfo>
                            <Link className={"login"}>Login</Link>
                            <Link className={"btn_mint"}>Join Free</Link>
                        </UserInfo>
                    </InfoMenu>
                </QuickMenu>
            </TopHeader>

            <Gnb>
                <Nav>
                    <Link>Editorial</Link>
                    <NavItem>
                        <Link>
                            <span>FEATURED</span>
                            Work From Home
                        </Link>
                        <Link>
                            <span>FEATURED</span>
                            Technology
                        </Link>
                        <Link>Wallpapers</Link>
                        <Link>Travel</Link>
                        <Link>Nature</Link>
                        <Link>Wallpapers</Link>
                        <Link>Travel</Link>
                        <Link>Nature</Link>
                        <Link>Wallpapers</Link>
                        <Link>Travel</Link>
                        <Link>Nature</Link>
                    </NavItem>
                    <Link>View all</Link>
                </Nav>
            </Gnb>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: 0px 0px 5px 10px rgba(0,0,0,.05);
  background: #fff;
  padding: 10px 30px;
`
const TopHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
`;
const Logo = styled.div`
    
`;
const SearchForm = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex: 1;
  background: #eee;
  -webkit-border-radius: 60px;-moz-border-radius: 60px;border-radius: 60px;
  AiOutlineSearch {
      
  }
  input {
    border:none;
    background:none;
    flex: 1;
    padding: 10px 0 10px 10px;
  }
`;
const QuickMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
`;
const SubMenu = styled.div`
    display:flex;
    align-items:center;
    margin: 0 10px;
`;
const InfoMenu = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left: 10px;
`;
const UserInfo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left: 10px;
    .login {
        position:relative;
        margin: 0 20px;
        &:before {
            content: "";
            position: absolute;
            top: -6px;
            left: 0px;
            width: 1px;
            height: 32px;
            background-color: #d1d1d1;
        }
    }
`;
const Link = styled.div`
    color: #666;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 0 10p x 30px;
    display:block;
    &.btn {
      border: 1px solid #666;
      -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
      padding: 8px 10px;
    }
    &.btn_mint {
      background: #3cb46e;
      color: #fff;
      -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
      padding: 8px 10px;
      &:hover {
        background: #37a866;
      }
    }
`;
const Gnb = styled.div`
    width: 100%;
`;
const Nav = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;
const NavItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex: 1;
    overflow-x: auto;
`;
export default Header;