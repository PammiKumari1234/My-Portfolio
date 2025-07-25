import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  let items = [
    {
      id: 1,
      title: "What Happens When You Type a URL and Hit Enter",
      sub: "The Invisible Journey from Your Keyboard to a Webpage",
      img: "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/11/18101105/Search-Google-or-Type-a-URL.jpg",
      slug:"what-happens-when-you-type-a-url-and-hit-enter",
    },
    // {id:1,title:"What Happens When You Type a URL and Hit Enter",sub:"The Invisible Journey from Your Keyboard to a Webpage"},
    // {id:1,title:"What Happens When You Type a URL and Hit Enter",sub:"The Invisible Journey from Your Keyboard to a Webpage"},
    // {id:1,title:"What Happens When You Type a URL and Hit Enter",sub:"The Invisible Journey from Your Keyboard to a Webpage"}
  ];
  return (
    <section className="blog-section">
      <div className="blogs">
        {items.map((blog) => (
          <div className="blog-cards" key={blog.id}>
            <div className="blog-img">
              <img
                src={blog.img}
                alt="What Happens When You Type a URL and Hit Enter"
              />
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
