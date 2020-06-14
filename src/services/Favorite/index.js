export const findExistFavoriteCourse = (courses, id) => {
  return courses.find((item) => item.id === id);
};

export const findIndexFavoriteCourse = (courses, item) => {
  return courses.indexOf(item);
};
