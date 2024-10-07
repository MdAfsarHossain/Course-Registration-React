import PropTypes from 'prop-types'; // ES6
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, price, credit}) => {
    let creditRemaining = 20 - credit;
    
    return (
        <div className='md:w-1/2 lg:w-1/4 border-2 py-5 px-5 bg-gray-50 rounded-lg h-fit'>
            
            <h1 className='font-semibold text-blue-600 text-xl mb-5 border-b-2 pb-3'>Credit Hour Remaining <span>{creditRemaining}</span> hr</h1>

            <h1 className='font-bold text-2xl mb-2'>Course Name</h1>

            <div className="">
                
                {
                    bookmarks.map((bookmark, idx) => 
                        <Bookmark
                            key={idx}
                            bookmark={bookmark}
                            index={idx}
                        ></Bookmark>
                    )
                }
                
            </div>

            <h1 className='border-t-2 border-b-2 py-2 mt-5 font-bold text-gray-600'>Total Credit Hour: {credit}</h1>
            <h1 className='py-2 font-bold text-gray-600'>Total Price: {price}.00 USD</h1>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired
};

export default Bookmarks;