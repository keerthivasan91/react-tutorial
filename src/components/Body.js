import React from 'react'
import '../App.css';
export default function Body() {
  return (
    <div className="container mt-4" style={{alignContent: 'center', color: '#555'}}>
        <h1>Welcome to My Blog</h1>
        <p id="blog-description">This is a simple blog layout created using React and Bootstrap. You can add your own content here.</p>
        <hr />
        <h2>Blog Post 1</h2>
        <img src="./image.png" alt="Blog Post 1" className="img-fluid" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia quam reprehenderit assumenda a quod velit error itaque est dolore commodi nam animi vel ipsum, excepturi, voluptas accusantium facere? Culpa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia quam reprehenderit assumenda a quod velit error itaque est dolore commodi nam animi vel ipsum, excepturi, voluptas accusantium facere? Culpa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia quam reprehenderit assumenda a quod velit error itaque est dolore commodi nam animi vel ipsum, excepturi, voluptas accusantium facere? Culpa!</p>
    </div>
  )
}
