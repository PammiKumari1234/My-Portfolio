import React from 'react';
import { useParams } from 'react-router-dom';
import CommonNav from '../common-nav/CommonNav';
import "./Blogs.css"

const WhatHappensURL = () => {
  const { slug } = useParams(); 

  const allBlogPosts = [
    {
      id: 1,
      slug: "what-happens-when-you-type-a-url-and-hit-enter",
      title: "What Happens When You Type a URL and Hit Enter",
      content: (
        <>
          <p>This is the detailed content for "What Happens When You Type a URL and Hit Enter".</p>
          <p>When you type a URL into your browser and hit Enter, a fascinating series of events unfolds:</p>
          <ol>
            <li>**DNS Resolution:** Your browser first checks its cache for the IP address corresponding to the domain name (e.g., example.com). If not found, it queries a DNS (Domain Name System) server. The DNS server translates the human-readable domain name into an IP address (e.g., 192.0.2.1).</li>
            <li>**TCP/IP Handshake:** Once the IP address is known, your browser initiates a TCP (Transmission Control Protocol) handshake with the web server at that IP address. This establishes a reliable connection.</li>
            <li>**HTTP Request:** Your browser then sends an HTTP (Hypertext Transfer Protocol) GET request to the web server, asking for the specific page (e.g., `/index.html`). This request includes information like your browser type, preferred language, and any cookies.</li>
            <li>**Server Processing:** The web server receives the request. It might process dynamic content (e.g., using PHP, Node.js, Python), interact with databases, or simply retrieve a static HTML file.</li>
            <li>**HTTP Response:** The server then sends back an HTTP response. This includes a status code (e.g., 200 OK for success, 404 Not Found), headers (like content type, caching instructions), and the actual content of the webpage (HTML, CSS, JavaScript, images, etc.).</li>
            <li>**Browser Rendering:** Your browser receives the HTML and starts parsing it. As it encounters CSS, it applies styles. As it finds JavaScript, it executes scripts. It progressively renders the page, fetching additional resources (images, fonts, etc.) as needed.</li>
            <li>**Page Display:** Finally, the fully rendered webpage is displayed to you in your browser window.</li>
          </ol>
          <p>All of this typically happens in milliseconds, making the web feel instantaneous!</p>
        </>
      )
    },
  ];

  const blogPost = allBlogPosts.find(post => post.slug === slug);

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <section className="blog-post-detail">
        {/* <CommonNav/> */}
      <div className='blog-content-wrapper'>
        <h1>{blogPost.title}</h1>
      <div className="blog-post-content">
        {blogPost.content}
      </div>
      </div>
    </section>
  );
};

export default WhatHappensURL;