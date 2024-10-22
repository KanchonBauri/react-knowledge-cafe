import PropTypes from "prop-types";
import { BiBookmark } from "react-icons/bi";
const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover, reading_time, author, author_img, posted_date } = blog;
    return (
        <div>
            <img className="w-full" src={cover} alt={`cover picture of the title ${title} `} />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img className="w-12" src={author_img} alt="" />
                    <div className="">
                        <p cl>{author}</p>
                        <small>{posted_date}</small>
                    </div>
                </div>
                <div className="flex items-center text-gray-500 gap-3">
                    <p>{reading_time} min read</p>
                    <button className="btn text-sky-700" ><BiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;