import React, { useState,useEffect } from 'react';
import '../App.css';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
//  pw 관련 메세지는 바로 드러나게 한다.
  const [pwErrorMessage,setPwErrorMessage]=useState(' ');
// email 관련 메세지도 그냥 바로 드러나게 하자.
  const [emailErrorMessage,setEmailErrorMessage]=useState('');
//   조건에 맞지 않는다면, 가입하기 버튼은 비활성화 한다.
  const [submitButtonOn,setSubmitButtonOn]=useState(false);
//   기본 정보 
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  useEffect(()=>{
    
   
    // 비밀번호 관련 에러 세팅
    // 가입하기 버튼 활성화 세팅
    if(!form.password&&!form.confirmPassword){
        setPwErrorMessage("비밀번호를 입력해주세요.")
        setSubmitButtonOn(false);
    }else if(form.password!==form.confirmPassword){
        setPwErrorMessage("비밀번호가 일치하지 않습니다.")
        setSubmitButtonOn(false)
        return
    }else if(form.password.length<6){
        setPwErrorMessage("비밀번호가 너무 짧습니다. 6자 이상으로 해주세요.")
        setSubmitButtonOn(false)
    }else {
        setPwErrorMessage('')
  }//이메일 유효성 검사
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!form.email){
    setEmailErrorMessage("이메일을 입력해주세요.");
    setSubmitButtonOn(false);
  }else if (!emailRegex.test(form.email)){
    setEmailErrorMessage("올바르지 않은 이메일 형식 입니다.");
    setSubmitButtonOn(false);
  }else{
    setEmailErrorMessage('')
  }
// 가입하기 버튼 활성화 조건
if(!pwErrorMessage&&!emailErrorMessage){
    setSubmitButtonOn(true)
}
  },[form.password,form.confirmPassword,form.email])

//   통합된 입력
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

 
// 가입 버튼 눌렀을 때
  const handleSubmit = (e) => {
     e.preventDefault();

    console.log('회원가입 정보:', form);
    alert('회원가입 완료!');
    navigate('/')
    // 실제 서버 통신 또는 저장 로직 추가 예정
  };

  return (
    <div className="form-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            name="username"
            placeholder="아이디"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
{/* div 하나로 둘지, 찢을지는 조금 더 고민 */}
        <div className="form-group">
          <label htmlFor="password">비밀번호 및 비밀번호 확인</label>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <span style={{color:'red'}}>{pwErrorMessage}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={form.email}
            onChange={handleChange}
            required
          />
          <span style={{color:'red'}}>{emailErrorMessage}</span>
        </div>
        <div className="register-button-group">
            {/* 취소버튼은 바로 뒤로 가기 */}
        <button type="button" onClick={() => navigate(-1)}>
            취소
          </button>
          <button
            type="submit"
            disabled={!submitButtonOn}
            style={{ backgroundColor: '#007bff', color: 'white' }}
          >
            가입하기
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Register;