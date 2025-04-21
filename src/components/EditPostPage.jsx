
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogForm from './BlogForm';

const EditPostPage = ({ posts, editPost }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <div className="edit-post-page">
      <BlogForm 
        post={post} 
        onSubmit={editPost} 
        formTitle={`Edit Post: ${post.title}`} 
      />
    </div>
  );
};

export default EditPostPage;