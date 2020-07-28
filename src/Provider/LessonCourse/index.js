import React, {useState} from 'react';

const LessonContext = React.createContext();

const LessonProvider = (props) => {
  const [itemCourse, setItemCourse] = useState({});
  const [itemLesson, setItemLesson] = useState({});
  const [videoUrl, setVideoUrl] = useState('');
  return (
    <LessonContext.Provider
      value={{
        itemCourse,
        setItemCourse,
        itemLesson,
        setItemLesson,
        videoUrl,
        setVideoUrl,
      }}>
      {props.children}
    </LessonContext.Provider>
  );
};

export {LessonProvider, LessonContext};
