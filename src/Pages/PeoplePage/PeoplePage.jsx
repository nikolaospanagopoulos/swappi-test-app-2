import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../Compononents/Loading/Loading'
import Message from '../../Compononents/Message/Message';
import PersonCard from '../../Compononents/PersonCard/PersonCard'
import {listPeople} from '../../actions/peopleActions'
import './PeoplePage.css'

const PeoplePage = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector((state) => state.peopleList);
  const { loading, error, people } = peopleList;

  useEffect(() => {
    dispatch(listPeople());
  }, [dispatch]);


    return ( 
        <div>
            <div>
                <h3>Click on a card to know more</h3>
            </div>
            {loading ? <Loading/> : error ? <Message color='red'> {error} </Message> : (
                <div className="grid-container">
                {people.map((person)=> {
                    return(
                        
                        <div key={person.height}  className='grid-item'>
                            <PersonCard person={person}/>
                        </div>
                    )
                })}
                </div>
            )}
            
        </div>
     );
}
 
export default PeoplePage
