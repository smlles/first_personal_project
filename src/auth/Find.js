import './Find.css'
import '../'
import { useNavigate } from 'react-router-dom'



const Find=()=>{
    const navigate=useNavigate();





    return(
// switch 써가지고 이 안에서 다 때려 박는 것을 목표로 ...
// 지금 파일이 find 관련만 5개란말이지 
// 상태1. 뭔가 찾으려 하기 이전, 
// 상태2. 아이디를 찾을거다
// 아이디... 모바일UI 마냥 조건 만족하면 렌더링하는 것으로 구현해서 파일 압축
// 그러면 FIR도 지울 수 있다.
// 상태3. 비밀번호를 찾을거다.
// 비밀번호는 이메일을 통한 재발급으로 구현 -> FPR을 지울 수 있다.
// 그럼 여기에 최종적으로 3개의 화면을 때려 박아야한다.
// 
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