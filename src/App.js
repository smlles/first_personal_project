import logo from './logo.svg';
import './App.css';
import Login from './Login';
import React from 'react';
import { Provider,useSelector } from 'react-redux';
import store from './app/store';
import BoardMain from './board/BoardMain';
import { useEffect } from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import PostDetail from './board/PostDetail';
import EditPost from './board/EditPost';
import WritePost from './board/WritePost';



function App() {

  const isLoggedIn= useSelector(state=>state.auth.isLoggedIn);
  useEffect(()=>{
  
  },[])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isLoggedIn 
            ? 
            <Route path="/" element={<BoardMain/>}/>
            
            :
            <Route path="*" element={<Login/>}/>}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


