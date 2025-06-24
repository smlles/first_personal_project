import '@toast-ui/editor/dist/toastui-editor.css';  // 에디터 스타일 import
import React, { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';

import { useNavigate } from 'react-router-dom';

const WritePost2 = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const editorRef = useRef();

  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) {
      alert('제목을 입력하세요.');
      return;
    }

    const contentMarkdown = editorRef.current.getInstance().getMarkdown();
    const contentHTML = editorRef.current.getInstance().getHTML();

    const newPost = {
      id: posts.length + 1, // 임시 id 생성
      title,
      descriptionMarkdown: contentMarkdown,
      descriptionHTML: contentHTML,
      createdAt: new Date().toISOString().split('T')[0],
      author: 'user01',  // 임시 작성자
      views: 0,
      likes: 0,
      comments: 0,
    };

    setPosts([...posts, newPost]);
    navigate('/');
  };

  return (
    <div className="write-post-container">
      <h1>게시글 작성</h1>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px', fontSize: '18px' }}
      />
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
        등록
      </button>
    </div>
  );
};

export default WritePost2;