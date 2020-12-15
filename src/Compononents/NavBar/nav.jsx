import React from 'react';
import styled from 'styled-components';
import Burger from '../NavBar/burger'



const Nav = styled.nav`
width:100%;
height:75px;

background-image: linear-gradient(to bottom right,#ffe066, tan);
display:flex;
justify-content:space-between;


.logo{
    position: relative;
    bottom:4rem
}


`




const Header = () => {
    return ( 
        <Nav >
            <div className='logo'>
               
            </div>
            <Burger/>
        </Nav>
     );
}
 
export default Header;