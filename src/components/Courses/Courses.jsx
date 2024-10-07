import PropTypes from 'prop-types'; // ES6
import { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = ({addBookmarks, handleCredit, handlePrice}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (
        <div className='w-full lg:w-3/4 border-0 mr-10 md:mr-0 lg:mr-10'>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:w-full lg:grid-cols-3 md:gap-5 lg:gap-5">
            {
                courses.map(course => 
                    <Course
                    key={course.id}
                    course={course}
                    addBookmarks={addBookmarks}
                    handleCredit={handleCredit}
                    handlePrice={handlePrice}
                    ></Course>
                )
            }
        </div>

        </div>
    );
};

Courses.propTypes = {
    addBookmarks: PropTypes.func,
    handleCredit: PropTypes.func,
    handlePrice: PropTypes.func,
};

export default Courses