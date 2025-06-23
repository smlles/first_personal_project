import { useNavigate } from "react-router-dom";
import './PostDetail.css'
import "../App.css"
import { useLocation,useParams } from "react-router-dom";


const PostDetail=()=>{
  
  const location = useLocation();
  const {post} =location.state;
  const {id} = useParams
  console.log('post',post)
  console.log('id',id)
  const navigate=useNavigate();

  const GoToBoardList=()=>{
    navigate('/')
  }

  const GoWritePost=()=>{
  console.log('가주세요')
  navigate('/write')
}


  return(

    <div className="post-detail-container">
  <h1 className="post-title">제에에에에에모오오오옥</h1>

  <div className="post-meta">
    <div className="meta-left">
      <span>작성자: user01</span>
      <span>댓글 수: 12</span>
    </div>
    <div className="meta-right">
      <span>조회수: 100</span>
      <span>좋아요: 5</span>
      <span>작성 시간: 2025-06-23</span>
    </div>
  </div>

  <div className="post-content">
    내요오오오오오오오오오오오오오오옹
  </div>

  <div className="post-button-group">

    <button className="back-button" onClick={GoToBoardList}>목록으로</button>
      <button className="write-button" onClick={GoWritePost}>글쓰기</button>
   
  </div>
</div>
    
      
   
  )
}


export default PostDetail;