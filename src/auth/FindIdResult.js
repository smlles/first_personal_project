import './Find.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import dummyUsers from '../data/dummyUser'
import { useLocation } from 'react-router-dom'







const FindIdResult=()=>{
    const location=useLocation();
    const {email} = location.state||'';
    const navigate=useNavigate();
    
    // console.log(email)
     const foundUser=dummyUsers.find(user=>user.email===email);
useEffect(()=>{
    
     console.log(foundUser.username)
},[])
    
    return(
        <div className="form-container">
            <p>아이디찾기결과 : {foundUser.username}</p>
            <button
                className="primary-btn"
                onClick={()=>navigate('/')}>로그인 화면으로</button>
        </div>
    )
}

export default FindIdResult