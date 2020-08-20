import React, {useReducer} from 'react';
import {myCourseReducer} from '../../Reducers/MyCourse';
import {getMyCourseAction} from '../../Actions/MyCourse';
const MyCourseContext = React.createContext();
const initialState = {
  isLoading: true,
  listMyCourse: null,
  message: '',
};
const MyCourseProvider = (props) => {
  const [myCourses, dispatch] = useReducer(myCourseReducer, initialState);

  return (
    <MyCourseContext.Provider
      value={{
        myCourses,
        myCoursesProvider: getMyCourseAction(dispatch),
      }}>
      {props.children}
    </MyCourseContext.Provider>
  );
};

export {MyCourseProvider, MyCourseContext};
