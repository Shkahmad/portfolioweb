import React from 'react'
import './Blog.css'
import './Blogmedia.css'
import { MdOutlineAccessTime } from "react-icons/md";
import testimonial from "../../assets/img/testimonial.jpg";
import post1 from "../../assets/img/post1.jpg";
import post2 from "../../assets/img/post2.jpg";
import post3 from "../../assets/img/post3.jpg";

const Blog = () => {
  return (
    <div className='container blog'>
      <div className="text-blog">
        <h1>BLOG</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="blogs">
        <div className="blog-into">
          <img src={post1} />
          <div className="titles">
            <h1>TRAVEL</h1>
          </div>
          <div className="dess">
            <h1>See more ideas about Travel</h1>
            <p>Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          </div>
          <div className="names">
            <div className="nameimgs">
              <img src={testimonial} />
              <h1>Morgan Freeman</h1>
            </div>
            <div className="times">
            <MdOutlineAccessTime  className='timeicon'/>
            <h1> 10 min</h1>
            </div>
          </div>
        </div>

        <div className="blog-into">
          <img src={post2} />
          <div className="titles">
            <h1>WEB DESIGN</h1>
          </div>
          <div className="dess">
            <h1>See more ideas about Travel</h1>
            <p>Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          </div>
          <div className="names">
            <div className="nameimgs">
              <img src={testimonial} />
              <h1>Morgan Freeman</h1>
            </div>
            <div className="times">
            <MdOutlineAccessTime  className='timeicon'/>
            <h1> 10 min</h1>
            </div>
          </div>
        </div>
        <div className="blog-into">
          <img src={post3} />
          <div className="titles">
            <h1>WEB DESIGN</h1>
          </div>
          <div className="dess">
            <h1>See more ideas about Travel</h1>
            <p>Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          </div>
          <div className="names">
            <div className="nameimgs">
              <img src={testimonial} />
              <h1>Morgan Freeman</h1>
            </div>
            <div className="times">
            <MdOutlineAccessTime  className='timeicon'/>
            <h1> 10 min</h1>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
