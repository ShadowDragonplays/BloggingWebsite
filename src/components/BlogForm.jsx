
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogForm.css';

const BlogForm = ({ post = { title: '', content: '' }, onSubmit, formTitle }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, [post.title, post.content]); // Add specific dependencies

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!content.trim()) newErrors.content = 'Content is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ ...post, title, content });
      navigate('/');
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="blog-form-container">
      <h2>{formTitle}</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className={errors.title ? 'error' : ''}
            placeholder="Enter post title..."
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            className={errors.content ? 'error' : ''}
            rows="10"
            placeholder="Write your post content here..."
          ></textarea>
          {errors.content && <span className="error-message">{errors.content}</span>}
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate('/')} className="btn btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;