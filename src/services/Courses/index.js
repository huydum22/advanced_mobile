const image01 =
  'https://storage.googleapis.com/itedu-bucket/Courses/9f3d46fa-61d2-4d4c-a392-a8e79ca7f335/avatar/67a2008d-7f04-4240-bbfc-1182c4f052af.jpg';
const image02 =
  'https://storage.googleapis.com/itedu-bucket/Courses/24b1856a-953c-419b-84c5-a9ef44bc139e/avatar/0d738acf-88c4-47cc-b7c7-329ad7ae57da.png';
const image03 =
  'https://storage.googleapis.com/itedu-bucket/Courses/9f3d46fa-61d2-4d4c-a392-a8e79ca7f335/avatar/67a2008d-7f04-4240-bbfc-1182c4f052af.jpg';
const randomRate = () => {
  return Math.floor(Math.random() * 5 + 1);
};

import REQUEST from '../HttpClient';
import {
  TOP_NEW,
  TOP_RATE,
  TOP_SELL,
  TOP_USER_FAVORITE,
} from '../../Constants/API';

const data = [
  {
    id: '1',
    title: 'Angular Fundamentals',
    numberOfCourse: '5 course',
    name: 'Deborah House',
    level: 'Beginner',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '1h',
    ratedNumber: 124,
    soldNumber: randomRate(),
    imageUrl: image01,
  },
  {
    id: '2',
    title: 'C# Fundamentals',
    numberOfCourse: '5 course',
    name: 'Scott Jimmy',
    level: 'Beginner',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '2h',
    ratedNumber: 12,
    soldNumber: randomRate(),
    imageUrl: image02,
  },
  {
    id: '3',
    title: 'Managing AWS Operations',
    numberOfCourse: '5 course',
    name: 'Angular Simon',
    level: 'Beginner',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '5h',
    ratedNumber: 412,
    soldNumber: randomRate(),
    imageUrl: image03,
  },
  {
    id: '4',
    title: 'Spring Framework: Spring MVC Fundamentals',
    numberOfCourse: '5 course',
    name: 'Allen Scott',
    level: 'Intermediate',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '5h',
    ratedNumber: 90,
    soldNumber: randomRate(),
    imageUrl: image03,
  },
  {
    id: '5',
    title: 'Spring: The Big Picture',
    numberOfCourse: '5 course',
    name: 'Mark Buna',
    level: 'Beginner',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '4h',
    ratedNumber: 42,
    soldNumber: randomRate(),
    imageUrl: image02,
  },
  {
    id: '6',
    title: 'Domain-Driven Design',
    numberOfCourse: '5 course',
    name: 'Jim Wilson',
    level: 'Intermediate',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '10h',
    ratedNumber: 6,
    soldNumber: randomRate(),
    imageUrl: image01,
  },
  {
    id: '7',
    title: 'Dependency Injection in ASP.NET Core',
    numberOfCourse: '5 course',
    name: 'Joe Jim',
    level: 'Beginner',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '72h',
    ratedNumber: 54,
    soldNumber: randomRate(),
    imageUrl: image01,
  },
  {
    id: '8',
    title: 'Building Application with React and Flux',
    numberOfCourse: '5 course',
    name: 'Jim Cooper',
    level: 'Intermediate',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '5h',
    ratedNumber: 912,
    soldNumber: randomRate(),
    imageUrl: image02,
  },
  {
    id: '9',
    title: 'Python for Data Analysts',
    numberOfCourse: '10 course',
    name: 'Eugene Rooney',
    level: 'Intermediate',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '5h',
    ratedNumber: 812,
    soldNumber: randomRate(),
    imageUrl: image03,
  },
  {
    id: '10',
    title: 'Getting Started with Your First SQL Server Instance',
    numberOfCourse: '9 course',
    name: 'Kevin Hill',
    level: 'Beginner',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '5h',
    ratedNumber: 42,
    soldNumber: randomRate(),
    imageUrl: image03,
  },
  {
    id: '11',
    title: 'Domain-Driven Design',
    numberOfCourse: '5 course',
    name: 'Jim Wilson',
    level: 'Intermediate',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '10h',
    ratedNumber: 6,
    soldNumber: randomRate(),
    imageUrl: image01,
  },
  {
    id: '12',
    title: 'Building Application with React and Flux',
    numberOfCourse: '5 course',
    name: 'Jim Cooper',
    level: 'Intermediate',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '5h',
    ratedNumber: 912,
    soldNumber: randomRate(),
    imageUrl: image02,
  },
  {
    id: '13',
    title: 'Angular Fundamentals',
    numberOfCourse: '5 course',
    name: 'Deborah House',
    level: 'Beginner',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '1h',
    ratedNumber: 124,
    soldNumber: randomRate(),
    imageUrl: image01,
  },
  {
    id: '14',
    title: 'Spring Framework: Spring MVC Fundamentals',
    numberOfCourse: '5 course',
    name: 'Allen Scott',
    level: 'Intermediate',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '5h',
    ratedNumber: 90,
    soldNumber: randomRate(),
    imageUrl: image03,
  },
  {
    id: '15',
    title: 'C# Fundamentals',
    numberOfCourse: '5 course',
    name: 'Scott Jimmy',
    level: 'Beginner',
    updatedAt: '2020-07-08T17:42:31.370Z',
    totalHours: '2h',
    ratedNumber: 12,
    soldNumber: randomRate(),
    imageUrl: image02,
  },
];

export const listCourseProvider = async () => {
  return data;
};

export const findCourseProvider = async (id) => {
  return data.find((item) => item.id === id);
};
export const topRateCourseAPI = async () => {
  return await REQUEST.post(TOP_RATE, {
    limit: 10,
    page: 1,
  });
};
export const topSellerCourseAPI = async () => {
  return await REQUEST.post(TOP_SELL, {
    limit: 10,
    page: 1,
  });
};

export const topNewCourseAPI = async () => {
  return await REQUEST.post(TOP_NEW, {
    limit: 10,
    offset: 0,
  });
};

export const topCourseUserFavorite = async (id) => {
  return await REQUEST.post(TOP_USER_FAVORITE, {
    userId: id,
  });
};
