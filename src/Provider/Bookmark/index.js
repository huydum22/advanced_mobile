import React, {useState} from 'react';

const BookmarkContext = React.createContext();

const BookmarkProvider = (props) => {
  const [bookmarkCourses, setBookmarkCourses] = useState([]);
  return (
    <BookmarkContext.Provider
      value={{
        bookmarkCourses,
        setBookmarkCourses,
      }}>
      {props.children}
    </BookmarkContext.Provider>
  );
};

export {BookmarkProvider, BookmarkContext};
