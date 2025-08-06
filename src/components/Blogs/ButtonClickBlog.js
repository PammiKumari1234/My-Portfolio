import React from 'react';
import { useParams } from 'react-router-dom';
import "./Blogs.css";

const ButtonClickBlog = () => {
    const { slug } = useParams();

    const allBlogPosts = [
        {
            id: 3,
            slug: "react-button-click-internals",
            title: "What Happens Internally When You Click a Button in a React Counter App?",
            content: (
                <section className="blog-post-container">
                    <article className="blog-post-content">
                        <h2>Deconstructing a Button Click in React</h2>

                        <h3>🖱️ 1. User Action & Native Event</h3>
                        <p>The process starts when a user physically clicks the "Increment" button. The browser detects this as a native <code>click</code> event on the DOM node.</p>

                        <h3>🔧 2. React Synthetic Event & Handler Execution</h3>
                        <p>React captures the native event using its <strong>Synthetic Event System</strong>, which wraps the native event for consistency and performance.</p>
                        <p>Then, the <code>onClick</code> prop's handler (like <code>handleIncrement</code>) is invoked inside React’s event delegation system.</p>

                        <h3>⚛️ 3. State Update Request via setCount</h3>
                        <p><code>setCount(count + 1)</code> doesn’t immediately change the state. Instead, it queues a state update and flags the component as “dirty.”</p>

                        <h3>🔄 4. Reconciliation & Component Re-execution</h3>
                        <ul>
                            <li>React schedules a re-render of the component.</li>
                            <li>It re-runs the component function with the updated state.</li>
                            <li>A new Virtual DOM tree is generated.</li>
                        </ul>

                        <h3>🧮 5. Diffing & Minimal DOM Changes</h3>
                        <ul>
                            <li>React compares old and new Virtual DOMs using its diffing algorithm.</li>
                            <li>Only the necessary DOM elements are updated — typically the text inside the button or a heading.</li>
                        </ul>

                        <h3>🌐 6. Actual DOM Manipulation</h3>
                        <p>React updates the browser DOM efficiently, causing the visible UI change (e.g., counter increments).</p>

                        <h3>🎯 7. Functional Updates & Batching Nuances</h3>
                        <p>Using <code>setCount(prev => prev + 1)</code> enables sequential increments in one handler due to batching behavior.</p>

                        <h3>🧠 8. Debugging Performance Bottlenecks</h3>
                        <ul>
                            <li>Use React Profiler to spot expensive re-renders.</li>
                            <li>Try Chrome Performance tab for deep JS+UI tracing.</li>
                            <li>Apply memoization with <code>React.memo</code>, <code>useCallback</code>, or <code>useMemo</code>.</li>
                            <li>Use virtualization for long lists.</li>
                        </ul>

                        <h3>🚀 9. React Fiber Architecture (Concurrent Mode)</h3>
                        <p>React Fiber breaks rendering into interruptible tasks. It helps keep the UI responsive by prioritizing user input and delaying non-critical renders.</p>

                        <h4>✨ Real-world Scenarios</h4>
                        <ul>
                            <li><strong>Without Fiber:</strong> Rendering a big list blocks your typing.</li>
                            <li><strong>With Fiber:</strong> React pauses the list update to process your typing first.</li>
                            <li><code>startTransition</code> lets you mark updates as low-priority for smoother UX.</li>
                        </ul>

                        <p>This beautifully orchestrated click-to-update pipeline is why React feels fast, intuitive, and robust — even in heavy apps.</p>
                    </article>
                </section>
            )
        }
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

export default ButtonClickBlog;
