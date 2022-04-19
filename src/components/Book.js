import React from 'react';
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom';
import './Book.css';

function Book(props) {
  return (
    <div className='_book'>
        <div className='imageArea'>
            <img src = {props.imageLink} className = "image"/>
        </div>
        <div className='info'>
            <div className = "title">{props.title}</div>
            <div className = "author">by <span className="authorName">{props.author}</span>         <br/>FREE</div>
            <ReadMoreReact 
                text = {props.bookInfo}
                min = {100}
                ideal = {150}
                max = {200}
                readMoreText = " ... "
            />
            <Link to = "/book" className="btn read">READ &nbsp;🞂</Link>
            <button type="button" className="btn learnMore">Learn More &nbsp;🞂</button>
        </div>
    </div>
  )
}

export default Book;