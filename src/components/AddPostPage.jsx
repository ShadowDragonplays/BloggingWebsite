
import React from 'react';
import BlogForm from './BlogForm';
import './AddPostPage.css';

const AddPostPage = ({ addPost }) => {
  return (
    <div className="add-post-page">
      <div className="create-post-hero">
        <h1>Create New Post</h1>
        <p>Share your thoughts, ideas, and stories with the world</p>
      </div>
      
      <div className="form-container">
        <BlogForm 
          onSubmit={addPost} 
          formTitle="What's on your mind?" 
        />
      </div>
    </div>
  );
};

export default AddPostPage;