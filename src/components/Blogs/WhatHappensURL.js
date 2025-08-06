import React from 'react';
import { useParams } from 'react-router-dom';
import "./Blogs.css";

const WhatHappensURL = () => {
    const { slug } = useParams();

    const allBlogPosts = [
        {
            id: 1,
            slug: "what-happens-when-you-type-a-url-and-hit-enter",
            title: "What Happens When You Type a URL and Hit Enter",
            content: (
                <section className="blog-post-container">
                    <article className="blog-post-content">
                        <h2>Unveiling the Web's Magic: What Happens When You Type a URL?</h2>
                        <p>As React developers, we spend a lot of time crafting beautiful, interactive UIs and managing application state. But have you ever paused to think about the incredible journey your web application takes even before your first React component mounts? Understanding the fundamental process of "what happens when you type a URL" is crucial for building performant, robust, and secure web experiences. It helps us appreciate why certain optimizations matter and how our code fits into the grand scheme of the internet.</p>

                        <h3>Phase 1: Your Browser's Initial Steps & Cache Check</h3>
                        <p>The moment you hit Enter after typing a URL (e.g., <code>https://myawesomeapp.com/dashboard</code>), your browser springs into action:</p>
                        <ul>
                            <li><strong>URL Parsing:</strong> It dissects the URL into its core components: protocol (`https`), domain (`myawesomeapp.com`), path (`/dashboard`), and any query parameters or fragments.</li>
                            <li><strong>HSTS Preload List/Cache:</strong> A quick check for HSTS (HTTP Strict Transport Security). If `myawesomeapp.com` is on the browser's HSTS list (or was previously visited with HSTS enabled), the browser automatically upgrades the connection to HTTPS, even if you typed `http://`. This is a silent but important security feature.</li>
                            <li><strong>Browser Cache:</strong> The browser's first stop is its own cache. Has it seen this resource before? Is there a valid, fresh copy of the HTML, CSS, JavaScript, or images already stored locally? If so, it can bypass network requests entirely, leading to near-instant page loads. If the cached copy is stale, it might send a conditional request to validate it with the server.</li>
                        </ul>

                        <h3>Phase 2: DNS Resolution - Finding the Server</h3>
                        <p>If the resource isn't readily available in the cache, the browser needs to find the server's address on the internet:</p>
                        <ul>
                            <li><strong>DNS Lookup:</strong> The browser acts like a detective, needing to translate `myawesomeapp.com` into an IP address (e.g., `192.0.2.1`). It checks its own DNS cache, then your operating system's DNS cache.</li>
                            <li><strong>Recursive Query:</strong> If the IP isn't found locally, your browser asks your configured DNS resolver (often your ISP's server). This resolver then performs a recursive query through the global DNS hierarchy (root servers, TLD servers, authoritative name servers) until it finds the correct IP address for `myawesomeapp.com`. This IP is then returned and cached.</li>
                        </ul>

                        <h3>Phase 3: Establishing the Connection - TCP & TLS/SSL Handshakes</h3>
                        <p>With the server's IP in hand, your computer sets up the communication channel:</p>
                        <ul>
                            <li><strong>TCP Three-Way Handshake:</strong> This is the foundational handshake for a reliable connection. Your browser sends a SYN (synchronize) packet, the server responds with SYN-ACK (synchronize-acknowledge), and your browser replies with an ACK (acknowledge). A stable connection is now open.</li>
                            <li><strong>TLS/SSL Handshake (for HTTPS):</strong> If the URL began with `https://`, a critical security handshake occurs immediately after TCP. The client and server exchange digital certificates and cryptographic keys to establish a secure, encrypted tunnel. This protects the integrity and privacy of all data exchanged, from your login credentials to the React app's source code.</li>
                        </ul>

                        <h3>Phase 4: The Request & Response Cycle (HTTP)</h3>
                        <p>Now that the secure channel is open, the real conversation begins:</p>
                        <ul>
                            <li><strong>HTTP Request:</strong> Your browser constructs an HTTP request. For our example, it's likely a `GET` request for `/dashboard`. This request includes headers like `User-Agent` (your browser info), `Accept` (what content types the browser prefers), `Cookie` (if any for `myawesomeapp.com`), and various cache-control headers.</li>
                            <li><strong>Server Processing:</strong> The web server receives the request. It might route it to an application server running Node.js, Python, Java, etc. (where your React app might be served statically or dynamically). It processes the request, potentially querying databases or executing server-side logic.</li>
                            <li><strong>HTTP Response:</strong> The server then sends back an HTTP response. This response includes a status code (e.g., `200 OK` for success, `404 Not Found`), response headers (like `Content-Type: text/html`, `Content-Length`, `Set-Cookie`, caching instructions), and the actual **response body** – which, for your React app, will typically be the initial HTML file (`index.html`).</li>
                        </ul>

                        <h3>Phase 5: Browser Rendering - Bringing Your React App to Life</h3>
                        <p>This is where your React app truly starts to take shape in the browser:</p>
                        <ul>
                            <li><strong>HTML Parsing & DOM Construction:</strong> The browser receives the HTML and immediately begins parsing it, building the **DOM (Document Object Model)** tree. This is a live, editable representation of your page's structure.</li>
                            {/* Corrected: Escaped <link> and <style> tags */}
                            <li><strong>CSSOM Construction:</strong> As it encounters `&lt;link&gt;` tags for CSS files or `&lt;style&gt;` blocks, it downloads and parses the CSS to build the **CSSOM (CSS Object Model)** tree.</li>
                            <li><strong>Render Tree:</strong> The DOM and CSSOM are combined to form the **Render Tree** (also known as the Layout Tree). This tree contains only the visible elements and their computed styles.</li>
                            <li><strong>Layout (Reflow):</strong> The browser then calculates the precise position and size of every element in the Render Tree. This is a computationally intensive step, and unnecessary reflows can impact performance.</li>
                            <li><strong>Painting:</strong> Finally, the browser draws the pixels onto the screen, rendering the visual appearance of your web page.</li>
                        </ul>

                        <h3>Phase 6: JavaScript's Role & Dynamic Interactions</h3>
                        <p>Crucially, as the HTML is parsed, when the browser encounters `&lt;script&gt;` tags (especially those pointing to your bundled React application's JavaScript files):</p> {/* Corrected: Escaped <script> tag */}
                        <ul>
                            <li><strong>JavaScript Download & Execution:</strong> The browser pauses HTML parsing to download the JavaScript files (often multiple bundles from a build process like Webpack). Once downloaded, it parses and executes your React code.</li>
                            <li><strong>Initial Render & Hydration:</strong> Your React application mounts, performs its initial render, and if it's a server-side rendered (SSR) app, it "hydrates" the existing HTML with React's interactivity.</li>
                            <li><strong>DOM Manipulation & API Calls:</strong> Your React components then dynamically manipulate the DOM, handle events, make further API calls (e.g., using `fetch` or Axios) to populate data, and update the UI based on state changes. These actions can trigger subsequent layout and paint operations.</li>
                        </ul>

                        <h3>Why This Matters for React Developers</h3>
                        <p>Understanding this end-to-end flow isn't just theoretical; it directly impacts how you build React applications:</p>
                        <ul>
                            <li><strong>Performance Optimization:</strong> Knowledge of caching, network latency, and rendering phases helps you optimize initial load times (code splitting, image optimization, server-side rendering).</li>
                            <li><strong>Debugging Network Issues:</strong> You can better understand why API calls might be failing or slow.</li>
                            <li><strong>Security Best Practices:</strong> Recognizing the role of HTTPS reinforces the importance of secure communication for your user data.</li>
                            <li><strong>Core Web Vitals:</strong> Each step directly influences metrics like Largest Contentful Paint (LCP) and First Input Delay (FID), which are crucial for user experience and SEO.</li>
                        </ul>
                        <p>So, the next time you type a URL, remember the intricate dance happening behind the scenes. This knowledge empowers you to build even better, faster, and more robust React applications.</p>
                    </article>
                </section>
            )
        },
    ];

    const blogPost = allBlogPosts.find(post => post.slug === slug);

    if (!blogPost) {
        return <div>Blog post not found.</div>;
    }

    return (
        <section className="blog-post-detail">
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