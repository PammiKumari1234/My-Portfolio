import React from "react";
import { Link, useParams } from "react-router-dom";
import WhatHappensURL from "./Blogs/WhatHappensURL";
import ButtonClickBlog from "./Blogs/ButtonClickBlog";

const Blogs = () => {
  const { slug } = useParams();

  const items = [
    {
      id: 1,
      title: "What Happens When You Type a URL and Hit Enter",
      sub: "The Invisible Journey from Your Keyboard to a Webpage",
      img: "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/11/18101105/Search-Google-or-Type-a-URL.jpg",
      slug:"what-happens-when-you-type-a-url-and-hit-enter",
      content: <WhatHappensURL/>
    },
    {
      id: 2,
      title: "What Happens Internally When You Click a Button in a React Counter App?",
      sub: "Deconstructing a Button Click in React",
      img:"https://img.freepik.com/premium-vector/favorites-button-flat-stars-line-icon-best-favorite-like-saved-rate-feedback-sstkbold-vector-line-icon-business_855332-2065.jpg?w=360",
      slug:"react-button-click-internals",
      content: <ButtonClickBlog/>
    }
  ];

  if (slug) {
    const blog = items.find(b => b.slug === slug);
    if (!blog) return <h2>Blog not found 🛑</h2>;

    return (
  <section className="single-blog">
    {blog.content}
    {/* <Link to="/blogs"><button style={{color:"white"}}>← Back to Blogs</button></Link> */}
  </section>
);

  }

  return (
    <section className="blog-section">
      <div className="blogs">
        {items.map(blog => (
          <div className="blog-cards" key={blog.id}>
            <div className="blog-img">
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blog-body">
              <div className="blog-title">{blog.title}</div>
              <div className="blog-sub">{blog.sub}</div>
              <Link to={`/blogs/${blog.slug}`}>
                <button className="blog-btn">Read &gt;&gt;</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
