import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookMark, handleAddAsMark}) => {
    const[blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-3xl font-bold" >Blogs: {blogs.length} </h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleAddToBookMark={handleAddToBookMark} 
                    handleAddAsMark = {handleAddAsMark}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func,
    handleAddAsMark: PropTypes.func
}

export default Blogs;