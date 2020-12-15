import React,{useState} from 'react'
import HomePage from './Pages/HomePage/HomePage'
import Background from './Compononents/Background/Background'
import { BrowserRouter as Router,Route } from "react-router-dom";
import StarsWarsIntro from './Compononents/StarWarsInto/StarWarsIntro'
import Header from './Compononents/NavBar/nav'
import PeoplePage from './Pages/PeoplePage/PeoplePage'
function App() {
  const [clicked,setClicked] = useState(true)
  const clickHandler =() => {
    setClicked(false)
}
  return (
    <Router>
    <div onClick={()=>clickHandler()}>
     {!clicked && <Header/>}
     {!clicked && <Route path='/' exact component={HomePage}/>} 
     {!clicked && <Route path='/people' exact component={PeoplePage}/>} 
      {clicked && <StarsWarsIntro />}
      <Background/>
    </div>
    </Router>
  );
}

export default App;
