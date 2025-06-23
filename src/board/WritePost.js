import { useNavigate } from "react-router-dom";
import "./WritePost.css"
import "../App.css"


const WritePost=()=>{
  const navigate=useNavigate();

  const GoToBoardList=()=>{
    navigate('/');
  }

  

  return(
    <div className="write-post-container">
      <h1>작성 중... </h1>
        <input className="write-post-input" type='text' placeholder="제목"/>
        
        <textarea className="write-post-textarea" type='text' placeholder="내용"/>
        
        <div className="write-button-group">
          <button className="cancel-button" onClick={GoToBoardList}>취소</button>
          <button className="submit-button">등록</button>
        </div>
    
    </div>
  )
}


export default WritePost;