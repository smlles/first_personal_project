import './Find.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import dummyUsers from '../data/dummyUser'





const FindId=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');


const CheckEmailHandler=()=>{
    const foundUser=dummyUsers.find(user=>user.email===email);
    if(!foundUser){
       alert('가입된 정보가 없습니다.') 
    }else{
        alert("이메일이 확인되었습니다.")
        navigate("/find/id/result",{
            state:{email:email}
        })
    }
}


    return(

        <div className="form-container">
            <h1>아이디 찾기</h1>
            <div>
                <input 
                    type='email'
                    placeholder='가입 할 때 사용한 이메일'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                {/* 1안 : 여기에 그냥 가입한 아이디가 뜨게한다 */}
                <div className="find-btn-group">
                    <button
                        onClick={()=>navigate(-1)}>취소</button>
                    <button
                        className="primary-btn"
                        onClick={CheckEmailHandler}>확인</button>
                            {/* 2안 : 페이지를 바꿔서 보여준다. */}
                </div>
            </div>
        </div>
    )
}


export default FindId;