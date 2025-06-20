import logo from './logo.svg';
import './App.css';
import Login from './Login';
import React from 'react';
import { Provider,useSelector } from 'react-redux';
import store from './app/store';
import BoardMain from './board/BoardMain';

function App() {

  const isLoggedIn= useSelector(state=>state.auth.isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn? <BoardMain/>:<Login/>}
    </div>
  );
}

export default App;

export function Root(){
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
