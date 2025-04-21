
import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import './HomePage.css';

const HomePage = ({ posts, deletePost }) => {
  return (
    <div className="home-page">
      <div className="page-header">
        <h1>Shadow Blogs</h1>
        <Link to="/add" className="btn btn-primary">Create New-Post</Link>
      </div>
      
      <div className="hero-section">
        <h2>From Ideas To Impact.</h2>
        <p>Welcome to Shadow Blogs — where your ideas find their voice. Create, customize, and share your stories effortlessly with our clean and intuitive platform.</p>
        <Link to="/add" className="btn btn-primary">Start Writing</Link>
      </div>
      
      {posts.length === 0 ? (
        <div className="empty-state">
          <h2>No posts yet</h2>
          <p>Create your first post to get started!</p>
          <Link to="/add" className="btn btn-primary">Create Post</Link>
        </div>
      ) : (
        <>
          <h2 className="recent-posts-heading">Recent Posts</h2>
          <div className="posts-grid">
            {posts.map(post => (
              <BlogPost 
                key={post.id} 
                post={post} 
                onDelete={deletePost} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;