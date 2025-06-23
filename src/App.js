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
import { Navigate } from 'react-router-dom';



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
            <>
              <Route path="/" element={<BoardMain/>}/>
              <Route path="/posts/:id" element={<PostDetail/>}/>
              <Route path="/edit" element={<EditPost/>}/>
              <Route path="/write" element={<WritePost/>}/>
              <Route path="*" element={<Navigate to="/" replace />}/>
            </>//로그인 유무로 페이지 가르기
            
            :
            <Route path="*" element={<Login/>}/>}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


