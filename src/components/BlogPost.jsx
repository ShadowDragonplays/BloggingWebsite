
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = ({ post, onDelete }) => {
  const { id, title, content } = post;
  

  const createExcerpt = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className="blog-post">
      <h2 className="post-title">{title}</h2>
      <p className="post-date">Posted on {new Date().toLocaleDateString()}</p>
      <div className="post-content">
        {createExcerpt(content)}
      </div>
      <div className="post-actions">
        <Link to={`/edit/${id}`} className="btn btn-edit">
          Edit
        </Link>
        <button 
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this post?')) {
              onDelete(id);
            }
          }} 
          className="btn btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogPost;