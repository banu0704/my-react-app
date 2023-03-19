import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/my-logo.webp" className="logo-img" alt="my-logo" />
            {/* <h4><i>E-COMMERCE</i></h4> */}
        </NavLink>
        <Nav />
    </MainHeader>
  )
}
const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 6rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    .logo-img{
        height: 5rem
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .logo-img{
         height: 6rem
        }
    }
    // .logo{
    //     height: 5rem;
    // }
`;
export default Header;

//  @media(max-width: ${({theme}) => theme.media.mobile}) {}; -- placed after . logo
