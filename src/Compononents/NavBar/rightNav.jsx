import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Ul = styled.ul`
@font-face{
    font-family: 'starwars-title';
    src: url('../../Utilis/fonts/Starjhol.ttf');
  }
  
  
list-style:none;
display:flex;
flex-flow:row nowrap;


li{
    padding:18px 15px;
}
.link-nav{
        text-decoration:none;
        color:black;
        font-family: 'starwars-title';
        font-size:1.3rem;
        font-style:bold;
        letter-spacing:0.1rem;
        -webkit-text-stroke: 1px black;
        
   
    
  
  
  
    }

@media (max-width: 768px){
    flex-flow:column nowrap;
    background-image: linear-gradient(to bottom right,#ffe066, tan);
    position:fixed;
    transform:${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top:0;
    right:0;
    height:100vh;
    width:300px;
    padding-top:3.5rem;
    border:1px solid black;
    
    z-index:18;
    transition:transform 0.3s ease-in-out;

    
}


`



const RightNav = ({open,setOpen}) => {

    const handleClick = () => {
        setOpen(false)
    }
    return (
        <Ul open={open} onClick={handleClick}>
                <Link className='link-nav' to='/'><li>Home</li></Link>
                <Link className='link-nav' to='/people'><li>People</li></Link>
                
                <Link className='link-nav' to='/movies'><li>Movies</li></Link>
                <Link className='link-nav' to='/about'><li>About</li></Link>
                
            </Ul>
    );
}
 
export default RightNav
