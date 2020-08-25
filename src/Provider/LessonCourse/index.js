import React, {useState, useReducer} from 'react';
import {lessonCourseReducer} from '../../Reducers/LessonCourse';
import {
  getCourseDetailWithLessonAction,
  pressLessonAction,
} from '../../Actions/LessonCourse';
const LessonContext = React.createContext();
const initialState = {
  isLoading: true,
  course: {},
  itemVideo: {},
  itemLesson: {},
  question: {},
  allNote: [],
  message: '',
};
const LessonProvider = (props) => {
  const [itemCourse, dispatch] = useReducer(lessonCourseReducer, initialState);

  return (
    <LessonContext.Provider
      value={{
        itemCourse,
        courseDetailProvider: getCourseDetailWithLessonAction(dispatch),
        pressLessonProvider: pressLessonAction(dispatch),
      }}>
      {props.children}
    </LessonContext.Provider>
  );
};

export {LessonProvider, LessonContext};
