import React,  { useState } from 'react'
import './Blog.css'

const BlogPost = ({title, content }) => {

    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
      };
  return (
    <div>
        <h2 >{title}</h2>
        {isTruncated ? (
        <p id='theText'>{content.slice(0, 150)}...</p>
      ) : (
        <p id='theText'>{content}</p>
      )}
      <button onClick={toggleTruncate}>
        {isTruncated ? 'Read More' : 'Read Less'}
      </button>
    </div>
  )
}

export default BlogPost