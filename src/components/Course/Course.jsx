import PropTypes from "prop-types"; // ES6

const Course = ({ course, addBookmarks, handleCredit, handlePrice }) => {
  const { title, cover, description, price, credit } = course;

  const handleClick = () => {
    addBookmarks(course, credit, handleCredit, handlePrice, price);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl border-t-2 rounded-lg px-5 space-y-5">
        <figure className="pt-5">
          <img src={cover} alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-base">{title}</h2>
          <p className="text-gray-600 text-base text-justify line-clamp-4">
            {description}
          </p>

          <div className="flex justify-between">
            <div className="">
              <h3 className="font-bold text-gray-700">Price: ${price}</h3>
            </div>
            <div className="">
              <h3 className="font-bold text-gray-700">Credit: {credit} hr</h3>
            </div>
          </div>

          <div className="card-actions mb-5 mt-3">
            <button
              onClick={handleClick}
              className="btn btn-primary uppercase bg-blue-400 w-full py-2 rounded font-bold text-white hover:bg-blue-600 transition"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  addBookmarks: PropTypes.func,
  handlePrice: PropTypes.func,
  handleCredit: PropTypes.func,
};

export default Course;
