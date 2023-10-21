import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
    "h1",
    {
        id: " ",
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title"
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container"
    },
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(container)


 /*
    HMR - Hot Module Reloading
    File Watcher Algorithms - C++
    Bundling
    MINIFY
    Cleaning our code
    Dev and Production build
    Super fast build algorithms
    Image Optimization
    Caching while development
    Compression
    Compatible with older versions of browsers
    https on dev
    port number
    consistent hashing algorithm to cache things
    Zero configuration bundler
    Transitive Dependencies

 */