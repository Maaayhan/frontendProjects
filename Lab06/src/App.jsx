import React, { useState, useEffect } from 'react';
import { Pagination } from './components/Pagination';
import { Posts } from './components/Posts';
import './styles.css';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);  
  const postsPerPage = 10;
  useEffect ( () => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log("res", res);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []); 
  //dependencies array is empty, so it only runs once; if it's not empty, it runs every time the value of the dependency changes
  
 // Get current posts
  const indexOfLastPost = currentPage * postsPerPage; //30
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //20
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); //20-30
  
//change active page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='container mt-5'>
      <h1>My Blog</h1>
      <Posts posts = {currentPosts} loading = {loading}/>
      <Pagination
        postsPerPage = {postsPerPage}
        totalPosts = {posts.length}
        paginate = {paginate}
        currentPage = {currentPage}/>
    </div>
  );
}