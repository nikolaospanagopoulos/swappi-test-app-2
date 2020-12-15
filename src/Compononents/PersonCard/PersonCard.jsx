import React,{useState} from 'react';
import './PersonCard.css'

const PersonCard = ({person}) => {
    const [showResults,setShowResults] = useState(false)
    const toggle =() =>{
        setShowResults(showResults=>!showResults)
    }
    return (
        <div className='card' onClick={()=>toggle()} >
            <div className='container'>
                <h1> {person.name} </h1>
            </div>
            <div className='person-details'>
                <h3> height: {person.height} cm</h3>
                <h3> mass: {person.mass} kg</h3>
                <h3> hair color: {person.hair_color} </h3>
                <h3> skin color: {person.skin_color} </h3>
                <h3> eye color: {person.eye_color} </h3>
                <h3> birth year: {person.birth_year} </h3>
                <h3> gender: {person.gender} </h3>
                <h3> homeworld: {person.homeworld} </h3>
                <div>Films:
            <p> {showResults && person.films.length} </p>
            <p>{showResults && person.films} </p>
            </div>
            <div>vehicles:
            <p> {showResults && person.vehicles.length} </p>
            <p>{showResults && person.vehicles} </p>
            </div>

            <div>Spaceships:
            <p> {showResults && person.starships.length} </p>
            <p>{showResults && person.starships} </p>
            </div>
            </div>
        </div>
    );
}
 
export default PersonCard;