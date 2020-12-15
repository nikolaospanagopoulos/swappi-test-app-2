import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Ul = styled.ul`

list-style:none;
display:flex;
flex-flow:row nowrap;


li{
    padding:18px 15px;
}


@media (max-width: 768px){
    flex-flow:column nowrap;
    background-image: linear-gradient(to bottom right,#ffe066, tan);;
    position:fixed;
    transform:${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top:0;
    right:0;
    height:100vh;
    width:300px;
    padding-top:3.5rem;
    z-index:18;
    transition:transform 0.3s ease-in-out;

    li{

    }
}


`



const RightNav = ({open,setOpen}) => {

    const handleClick = () => {
        setOpen(false)
    }
    return (
        <Ul open={open} onClick={handleClick}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/people'><li>People</li></Link>
                
                <li>Movies</li>
                <li>About</li>
                
            </Ul>
    );
}
 
export default RightNav
