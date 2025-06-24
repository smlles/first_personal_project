import React from "react";
import './Login.css';
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./app/store";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [id,setId] =useState('');
  const [pw,setPw] =useState('');

  // 
  useEffect(()=>{
    // console.log("화면이 보이는가")
    
  },[])

// 로그인 확인 절차
  const handleLoginEvent=()=>{
    if(!(id&&pw)){
      alert("아이디와 비밀번호는 공백이면 안됩니다.")
      return;
    }
    dispatch(login())
  }

 


  return(
    <div className="form-container">
      <h1>로그인</h1>
      {/* 입력칸 */}
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
      {/* 버튼 상하 /  좌우 배치 고민*/}
      <div className="login-button-group">
        <button 
          className="login-btn"
          onClick={handleLoginEvent}
          >로그인
        </button>
        <button 
          className="signup-btn"
          onClick={()=>navigate("/register")}
          >회원가입</button>
        <button
          className="find-id-pw-btn"
          onClick={()=>navigate('/find')}
          >
          아이디, 비밀번호 찾기
        </button>
      </div>
    </div>
  )
}