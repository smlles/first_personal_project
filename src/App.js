import logo from './logo.svg';
import './styles/App.css';
import Login from './Login';
import React from 'react';
import { Provider,useSelector } from 'react-redux';
import store from './app/store';
import BoardMain from './board/BoardMain';
import { useEffect,useState } from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import PostDetail from './board/PostDetail';
import EditPost from './board/EditPost';
import WritePost from './board/WritePost';
import { Navigate } from 'react-router-dom';
import dummyPosts from './data/dummyPost';
import Register from './auth/Register';
import Find from './auth/Find';
import FindId from './auth/FindId';
import FindPw from './auth/FindPw';
import dummyUsers from './data/dummyUser';
import FindIdResult from './auth/FindIdResult';
import FindPwResult from './auth/FindPwResult';
import WritePost2 from './board/WritePost2';



function App() {

  // 로그인 상태 확인
  const isLoggedIn= useSelector(state=>state.auth.isLoggedIn);
  const [posts,setPosts]=useState(dummyPosts);

  const deletePostById=(id)=>{
    setPosts((prev)=>prev.filter((post)=>post.id!==id));
  }

  const updatePost=(updatedPost)=>{
    setPosts((prevPosts)=>
      prevPosts.map((post)=>
      post.id===updatedPost.id ?{...post,...updatedPost}:post))
  }

  useEffect(()=>{
  
  },[])
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 로그인을 했는가?  */}
          {isLoggedIn 
            ? 
            // 했다
            <>
            {/* 기본은 boardMain */}
              <Route path="/" element={<BoardMain posts={posts}/>}/>
              <Route path="/posts/:id" element={<PostDetail posts={posts} deletePost={deletePostById}/>}/>
              <Route path="/edit/:id" element={<EditPost posts={posts} updatePost={updatePost}/>}/>
              <Route path="/write" element={<WritePost posts={posts} setPosts={setPosts}/>}/>
              <Route path="*" element={<Navigate to="/" replace />}/>
            </>
            ://안했다
            //로그인페이지 보여주기
            <>
              <Route path="/register" element={<Register/>}/>
              <Route path="/find" element={<Find/>}/>
              <Route path="/find/id" element={<FindId/>}/>
              <Route path="/find/id/result" element={<FindIdResult/>}/>
              <Route path="/find/pw" element={<FindPw/>}/>
              <Route path="/find/pw/result" element={<FindPwResult/>}/>
              <Route path="*" element={<Login/>}/>
            </>
            }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


