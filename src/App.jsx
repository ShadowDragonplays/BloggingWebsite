
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AddPostPage from './components/AddPostPage';
import EditPostPage from './components/EditPostPage';
import './App.css';

function App() {

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : [
      { 
        id: 1, 
        title: 'Welcome to Daily-Blog', 
        content: 'Daily Blogs and diving into the ever-evolving world of tech, creativity, and modern life. Whether you are into programming, design, digital trends, or just like reading something fresh and interesting, this blog is here for you.'
      }
    ];
  });


  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);


  const addPost = (post) => {
    const newPost = { ...post, id: Date.now() };
    setPosts([newPost, ...posts]);
  };


  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };


  const editPost = (updatedPost) => {
    setPosts(posts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    ));
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} deletePost={deletePost} />} />
            <Route path="/add" element={<AddPostPage addPost={addPost} />} />
            <Route path="/edit/:id" element={<EditPostPage posts={posts} editPost={editPost} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;