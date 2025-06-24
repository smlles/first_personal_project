import { useNavigate, useParams } from "react-router-dom";
import "./WritePost.css"
import "../App.css"
import { useEffect,useState,useRef } from "react";
import { useLocation } from "react-router-dom";
import dummyPosts from "../data/dummyPost";
import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css'


const EditPost=({posts,updatePost})=>{
  const navigate=useNavigate();
  const {id} =useParams();
  const post = posts.find(p=>p.id===parseInt(id));

// 기존 게시글의 제목, 내용 세팅
  const [title,setTitle]=useState(post?.title||'');
  const [description,setDescription]=useState(post?.description||'');
  const editorRef=useRef();

  useEffect(()=>{
    // 없는 게시글 링크라면? 돌려보내자
    if(!post){
      alert("잘못된 경로입니다.");
      navigate(-1);
    }
  },[post])

  // 원래 있던 글은 합쳐도 될까? 
  // 사실상 작성,수정은 복붙이니까 일단 둬보자
  const ChangeTitle =(e)=>{
    setTitle(e.target.value)
  }

  const ChangeDescription=(e)=>{
    setDescription(e.target.value);
  }

  // 수정 완료
  const HandleSubmit=()=>{
    // 작성과 다른점 -> 지켜야 할 기존값은 지키기
    const contentMarkdown = editorRef.current.getInstance().getMarkdown();
    const contentHTML = editorRef.current.getInstance().getHTML();
    const updatedPost={
      ...post,
      title,
      descriptionHTML:contentHTML,
    }
   updatePost(updatedPost)
  // 수정한 내용을 바로 확인할 수 있게
  // 메인 화면이 아닌, 수정 한 글로 보내기
    navigate(`/posts/${updatedPost.id}`)
  }
  

  return(
    <div className="write-post-container">
      <h1>수정 중... </h1>
      <input 
        className="write-post-input" 
        type='text' 
        placeholder="제목"
        value={title} 
        onChange={(e)=>ChangeTitle(e)}
      />
       <Editor 
         ref={editorRef}
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        initialValue={post.descriptionHTML}
        />
        {/* 버튼들 */}
      <div className="write-button-group">
          {/* 취소버튼 -> 직전 페이지로 */}
        <button className="cancel-button" onClick={()=>navigate(-1)}>취소</button>
          {/* 수정 버튼 원래 글 페이지로*/}
        <button 
          className="submit-button"
          onClick={HandleSubmit}>수정</button>
      </div>
    </div>
  )
}


export default EditPost;