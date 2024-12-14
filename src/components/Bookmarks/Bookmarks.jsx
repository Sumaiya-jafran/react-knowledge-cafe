import Bookmark from '../Bookmark/Bookmark'
import PropTypes, { number } from 'prop-types';
const Bookmarks = ({handleBook,readingTime}) => {
    
    return (
        <div className='w-1/3 bg-slate-300 p-7 text-center'>
            <h1>Total Reading Time: {readingTime} </h1>
            <h1>This is bookmarks: {handleBook.length} </h1>
            {
                handleBook.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes = {
    handleBook: PropTypes.array,
    readingTime: PropTypes.number
  };
export default Bookmarks;