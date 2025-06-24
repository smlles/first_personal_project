import './Find.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import dummyUsers from '../data/dummyUser'
import { useLocation } from 'react-router-dom'







const FindPwResult=()=>{
    const location=useLocation();
    const {email} = location.state||'';
    const {username} = location.state||'';
    const navigate=useNavigate();
    
    // console.log(email)
     const foundUser=dummyUsers.find(user=>user.email===email&&user.username===username);

    
    return(
        <div className="form-container">
            <p>비밀번호 찾기 결과 : {foundUser.password}</p>
            <button
                className="primary-btn"
                onClick={()=>navigate('/')}>로그인 화면으로</button>
        </div>
    )
}

export default FindPwResult