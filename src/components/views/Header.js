import React from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';
import {FiMoreHorizontal} from 'react-icons/fi'

function Header (props) {

    const {} = props;

    return (
        <Container>
            <TopHeader>
                <Logo>
                    <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                         aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash
                        Home</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                    <LogoTitle>
                        <h1>Unsplash</h1>
                        <p>Photo for everyone</p>
                    </LogoTitle>
                </Logo>
                <SearchForm>
                    <AiOutlineSearch className={"search"}/>
                    <input type="text"/>
                    <AiOutlineSearch Color={"#333"} fontSize={"20"}/>
                </SearchForm>
                <QuickMenu>
                    <Menu>
                        <MenuItem>Topics</MenuItem>
                        <MenuItem>Explore</MenuItem>
                        <MenuItem>
                            <FiMoreHorizontal className={"more"}/>
                        </MenuItem>
                        <MenuItem className={"btn"}>Submit a photo</MenuItem>
                        <Info>
                            <MenuItem className={"login"}>Login</MenuItem>
                            <MenuItem className={"btn_mint"}>Join Free</MenuItem>
                        </Info>
                    </Menu>
                </QuickMenu>
            </TopHeader>

            <Gnb>
                <Nav>
                    <Link className={"nav_first"}>Editorial</Link>
                    <NavItem>
                        <Link>
                            <p>FEATURED</p>
                            Work From Home
                        </Link>
                        <Link>
                            <p>FEATURED</p>
                            Technology
                        </Link>
                        <Link>Wallpapers</Link>
                        <Link>Travel</Link>
                        <Link>Nature</Link>
                        <Link>Travel</Link>
                        <Link>Nature</Link>
                        <Link>Film</Link>
                        <Link>Textures & Patterns</Link>
                        <Link>Current Events</Link>
                        <Link>People</Link>
                        <Link>Business & Work</Link>
                        <Link>COVID-19</Link>
                        <Link>Animals</Link>
                        <Link>Interiors</Link>
                        <Link>Architecture</Link>
                        <Link>Food & Drink</Link>
                        <Link>Athletics</Link>
                        <Link>Spirituality</Link>
                        <Link>Health & Wellness</Link>
                        <Link>Fashion</Link>
                        <Link>Experimental</Link>
                        <Link>Arts & Culture</Link>
                        <Link>History</Link>
                    </NavItem>
                    <Link className={"nav_last"}>View all</Link>
                </Nav>
            </Gnb>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: 0px 0px 5px 10px rgba(0,0,0,.05);
  background: #fff;
  padding: 10px 30px 0px;
`
const TopHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-start;
`;
const LogoTitle = styled.div`
  color: #111;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin: 0 20px 0 10px;
  line-height: 1.1;
  h1 {
    font-size: 16px;
    font-weight:800;
    line-height: 1.3;
  }
  p {
    font-size: 15px;
    font-weight:500;
  }
`;
const SearchForm = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex: 1;
  background: #eee;
  border: 1px solid #fff;
  -webkit-border-radius: 60px;-moz-border-radius: 60px;border-radius: 60px;
  &:hover {
    border: 1px solid #eee;
  }
  .search {
    font-size: 20px;
    margin: 10px;
    color: #aaa;
    &:hover {
      color: #111;
    }
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
const Menu = styled.div`
    display:flex;
    align-items:center;
    margin: 0 10px;
`;
const MenuItem = styled.div`
    color: #666;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    display:block;
    cursor: pointer;
    &:hover {
      color: #333;
    }
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
    .more {
    font-size: 20px;
    font-weight: 800;
    
    }
`;
const Info = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left: 20px;
    .login {
        position:relative;
        margin: 0 20px;
        &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: -10px;
            width: 1px;
            height: 36px;
            background-color: #d1d1d1;
        }
    }
`;
const Gnb = styled.div`
    width: 100%;
`;
const Nav = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content: space-between;
    .nav_first {
      position:relative;
      text-align:left;
      padding: 20px 0;
      margin-right: 30px;
      &:after {
          content: '';
          position: absolute;
          top: 5px;
          right: -30px;
          width: 1px;
          height: 40px;
          background: #aaa;
      }
    }
    .nav_last {
      position:relative;
      padding: 20px 0;
      margin-left: 20px;
        &:before {
          content: '';
          position:absolute;
          top: 0;
          left: -200px;
          width: 200px;
          height: 48px;
          background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
        }
    }
`;
const NavItem = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content:flex-start;
    flex: 1;
    overflow-x: auto;
`;
const Link = styled.div`
    color: #777;
    font-size: 16px;
    font-weight: 600;
    padding: 20px 30px 20px 0;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      color: #333;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      
    }
`;
export default Header;