import React from 'react';
import './css/blog.css';

const Blog = (props) => {
  const {tanggal, judul, summary} = props;
  return (
    <div className='blog-wrap'>
      <img src="https://placeimg.com/640/480/tech" alt="tech_image" />
      <p>{tanggal}</p>
      <h3>{judul}</h3>
      <p>{summary}</p>
    </div>
  )
}

export default Blog;
