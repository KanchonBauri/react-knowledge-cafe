import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ">
            <div>
                <h3 className="text-3xl text-center font-bold p-2">Reading Time: {readingTime}</h3>
            </div>
            <h3 className="text-3xl text-center font-bold ">BookMarks Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark} readingTime={readingTime} ></BookMark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;