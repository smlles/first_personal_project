import './Find.css'
import '../'
import { useNavigate } from 'react-router-dom'



const Find=()=>{
    const navigate=useNavigate();





    return(

        <div className="form-container">
            <h2>찾으려는 내용이 무엇인가요?</h2>
            <div className='find-button-group'>
                <button
                    onClick={()=>navigate('/find/id')}
                    className="primary-btn"
                    >아이디를 찾고 싶어요.</button>
                <button
                    onClick={()=>navigate('/find/pw')}
                    className="primary-btn"
                    >비밀번호를 찾고 싶어요.</button>
                <button
                    onClick={()=>navigate('/')}>취소</button>
            </div>
        </div>
    )
}


export default Find;