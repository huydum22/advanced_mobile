const randomRate = () => {
  return Math.floor(Math.random() * 5);
};
import image01 from '../../assets/skill01.jpg';

const data = {
  id: '1',
  name: 'Angular Fundamentals',
  numberOfCourse: '5 course',
  author: 'Deborah House',
  level: 'Beginner',
  timeToStart: 'Apr 18, 2020',
  totalHour: '9h 36m',
  totalRate: 124,
  rate: randomRate(),
  image: image01,
  description:
    'Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
};
export default data;
