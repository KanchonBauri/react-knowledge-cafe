import PropTypes from "prop-types";
import { BiBookmark } from "react-icons/bi";
const Blog = ({ blog, handleAddToBookMark, handleAddAsMark }) => {
    // console.log(blog);
    const {id, title, cover, reading_time, author, author_img, posted_date } = blog;
    return (
        <div>
            <img className="w-full" src={cover} alt={`cover picture of the title ${title} `} />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img className="w-12" src={author_img} alt="" />
                    <div className="">
                        <p className="">{author}</p>
                        <small>{posted_date}</small>
                    </div>
                </div>
                <div className="flex items-center text-gray-500 gap-3">
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookMark(blog)} className="btn hover:bg-blue-800 text-sky-700" ><BiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <button className="text-purple-800 font-bold underline" onClick={() => handleAddAsMark(id, reading_time)}>Mark As Red</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleAddAsMark:PropTypes.func
}

export default Blog;