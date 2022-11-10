import React from 'react';

const Blog = () => {
    return (
        <div className='py-5'>
            <h1 className='text-5xl font-bold text-center py-5'>Blog Section</h1>
            <h1 className='text-2xl font-bold py-5'>What is the Difference between SQL and NoSQL?</h1> <br />
            <p>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.<br /> The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute. </p><br /> <br />
            <h1 className='text-2xl font-bold py-5'>What is JWT, and how does it work?</h1><br />
            <p>JSON Web Token  is an open standard  that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p><br /> <br />
            <h1 className='text-2xl font-bold py-5'>What is the difference between javascript and NodeJS?</h1> <br />
            <p>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.<br />JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p><br /> <br />
            <h1 className='text-2xl font-bold py-5'>How does NodeJS handle multiple requests at the same time?</h1> <br />
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p><br /> <br />
            
        </div>
    );
};

export default Blog;