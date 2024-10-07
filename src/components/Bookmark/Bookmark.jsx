import PropTypes from 'prop-types'; // ES6

const Bookmark = ({bookmark, index}) => {
    const {title} = bookmark;

    return (
        <div>
            <h1 className='text-gray-500'>{index+1}. {title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired, 
    index: PropTypes.number.isRequired,   
};

export default Bookmark;