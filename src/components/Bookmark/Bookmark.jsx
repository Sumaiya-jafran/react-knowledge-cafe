import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {

    const {title}=bookmark;
    return (
        <div className="p-5 bg-orange-200 rounded-xl m-4">
          <h3>Title: {title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
   
  };
export default Bookmark;