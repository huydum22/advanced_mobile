import React, {useState} from 'react';

const CourseContext = React.createContext();

const CoursesProvider = (props) => {
  const [courses, setCourses] = useState([]);
  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
      }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export {CoursesProvider, CourseContext};
