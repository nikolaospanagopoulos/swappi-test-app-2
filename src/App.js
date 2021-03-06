import React,{useState} from 'react'
import HomePage from './Pages/HomePage/HomePage'
import Background from './Compononents/Background/Background'
import { BrowserRouter as Router,Route } from "react-router-dom";
import StarsWarsIntro from './Compononents/StarWarsInto/StarWarsIntro'
import Header from './Compononents/NavBar/nav'
import MoviePage from './Pages/MoviePage/MoviePage'
import PeoplePage from './Pages/PeoplePage/PeoplePage'

import AboutPage from './Pages/AboutPage/AboutPage';
function App() {
  const [clicked,setClicked] = useState(true)
  const clickHandler =() => {
    setClicked(false)

    //with this hook , when i click on the intro it dissapears
}
  return (
    <Router>
    <div onClick={()=>clickHandler()}>
     {!clicked && <Header/>}
     {!clicked && <Route path='/' exact component={HomePage}/>} 
     {!clicked && <Route path='/people' exact component={PeoplePage}/>}
     {!clicked && <Route path='/movies' exact component={MoviePage}/>}
     {!clicked && <Route path='/about' exact component={AboutPage}/>}    
      {clicked && <StarsWarsIntro />}
      <Background/>
    </div>
    </Router>
  );
}

export default App;
