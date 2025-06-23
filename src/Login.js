import React from "react";
import './Login.css';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./app/store";

export default function Login(){
  const dispatch=useDispatch();
  const [id,setId] =useState('');
  const [pw,setPw] =useState('');

  useEffect(()=>{
    console.log("화면이 보이는가")
    
  },[id,pw])


  const handleLoginEvent=()=>{
    if(!(id&&pw)){
      alert("아이디와 비밀번호는 공백이면 안됩니다.")
      return;
    }
    dispatch(login())
  }


  return(
    <div className="login-container">
      <h1>로그인</h1>
      <div className="form-group">
        <label htmlFor="username">아이디</label>
        <input 
          type="text" 
          id="username" 
          placeholder="아이디를 입력하세요"
          onChange ={(e)=>setId(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">비밀번호</label>
        <input 
          type="password" 
          id="password" 
          placeholder="비밀번호를 입력하세요"
          onChange ={(e)=>setPw(e.target.value)}  
        />
      </div>
      <div className="button-group">
        <button 
          className="login-btn"
          onClick={handleLoginEvent}
          >로그인

        </button>
        <button className="signup-btn">회원가입</button>
      </div>
    </div>
  )
}