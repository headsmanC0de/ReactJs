import React from "react";
import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  const addCash = () => {
    dispatch({type: 'ADD_CASH', payload: 2})
  }

  const getCash = () => {
    dispatch({type: 'GET_CASH', payload: 2})
  }

  return(
    <div className={'app'}>
      <div style={{fontSize: '2rem'}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash()}>Add Cash</button>
        <button onClick={() => getCash()}>Get Cash</button>
      </div>
    </div>
  )
}

export default App;
