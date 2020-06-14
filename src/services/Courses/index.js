import image01 from '../../assets/image/skill01.png';
import image02 from '../../assets/image/skill02.png';
import image03 from '../../assets/image/skill03.png';
const randomRate = () => {
  return Math.floor(Math.random() * 5 + 1);
};
const data = [
  {
    id: '1',
    name: 'Angular Fundamentals',
    numberOfCourse: '5 course',
    author: 'Deborah House',
    level: 'Beginner',
    timeToStart: 'Apr 2020',
    totalHour: '1h',
    totalRate: 124,
    rate: randomRate(),
    image: image01,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '2',
    name: 'C# Fundamentals',
    numberOfCourse: '5 course',
    author: 'Scott Jimmy',
    level: 'Beginner',
    timeToStart: 'Feb 2018',
    totalHour: '2h',
    totalRate: 12,
    rate: randomRate(),
    image: image02,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '3',
    name: 'Managing AWS Operations',
    numberOfCourse: '5 course',
    author: 'Angular Simon',
    level: 'Beginner',
    timeToStart: 'Jan 2018',
    totalHour: '5h',
    totalRate: 412,
    rate: randomRate(),
    image: image03,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '4',
    name: 'Spring Framework: Spring MVC Fundamentals',
    numberOfCourse: '5 course',
    author: 'Allen Scott',
    level: 'Intermediate',
    timeToStart: 'Apr 2019',
    totalHour: '5h',
    totalRate: 90,
    rate: randomRate(),
    image: image03,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '5',
    name: 'Spring: The Big Picture',
    numberOfCourse: '5 course',
    author: 'Mark Buna',
    level: 'Beginner',
    timeToStart: 'Sep 2018',
    totalHour: '4h',
    totalRate: 42,
    rate: randomRate(),
    image: image02,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '6',
    name: 'Domain-Driven Design',
    numberOfCourse: '5 course',
    author: 'Jim Wilson',
    level: 'Intermediate',
    timeToStart: 'Jan 2020',
    totalHour: '10h',
    totalRate: 6,
    rate: randomRate(),
    image: image01,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '7',
    name: 'Dependency Injection in ASP.NET Core',
    numberOfCourse: '5 course',
    author: 'Joe Jim',
    level: 'Beginner',
    timeToStart: 'Feb 2020',
    totalHour: '72h',
    totalRate: 54,
    rate: randomRate(),
    image: image01,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '8',
    name: 'Building Application with React and Flux',
    numberOfCourse: '5 course',
    author: 'Jim Cooper',
    level: 'Intermediate',
    timeToStart: 'Apr 2017',
    totalHour: '5h',
    totalRate: 912,
    rate: randomRate(),
    image: image02,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '9',
    name: 'Python for Data Analysts',
    numberOfCourse: '10 course',
    author: 'Eugene Rooney',
    level: 'Intermediate',
    timeToStart: 'May 2020',
    totalHour: '5h',
    totalRate: 812,
    rate: randomRate(),
    image: image03,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '10',
    name: 'Getting Started with Your First SQL Server Instance',
    numberOfCourse: '9 course',
    author: 'Kevin Hill',
    level: 'Beginner',
    timeToStart: 'Dec 2010',
    totalHour: '5h',
    totalRate: 42,
    rate: randomRate(),
    image: image03,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '11',
    name: 'Domain-Driven Design',
    numberOfCourse: '5 course',
    author: 'Jim Wilson',
    level: 'Intermediate',
    timeToStart: 'Jan 2020',
    totalHour: '10h',
    totalRate: 6,
    rate: randomRate(),
    image: image01,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '12',
    name: 'Building Application with React and Flux',
    numberOfCourse: '5 course',
    author: 'Jim Cooper',
    level: 'Intermediate',
    timeToStart: 'Apr 2017',
    totalHour: '5h',
    totalRate: 912,
    rate: randomRate(),
    image: image02,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '13',
    name: 'Angular Fundamentals',
    numberOfCourse: '5 course',
    author: 'Deborah House',
    level: 'Beginner',
    timeToStart: 'Apr 2020',
    totalHour: '1h',
    totalRate: 124,
    rate: randomRate(),
    image: image01,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '14',
    name: 'Spring Framework: Spring MVC Fundamentals',
    numberOfCourse: '5 course',
    author: 'Allen Scott',
    level: 'Intermediate',
    timeToStart: 'Apr 2019',
    totalHour: '5h',
    totalRate: 90,
    rate: randomRate(),
    image: image03,
    description:
      ' Angular has become one of the most widely used web development frameworks. This course, Angular Fundamentals, will teach you the fundamentals of writing applications with Angular - whether or not you are had past experience with Angular You will learn how to bootstrap an application and how to build pages and reusable elements using Angular Components and the new Angular syntax. You will also learn the fundamentals of: routing, creating reusable services and dependency injection, building forms with validation, and communicating with the server using HTTP and observables. You will even learn how to test all of this using unit tests and end-to-end UI tests. When you finish this course, you will have the fundamental knowledge necessary to create professional and personal websites using Angular.',
  },
  {
    id: '15',
    name: 'C# Fundamentals',
    numberOfCourse: '5 course',
    author: 'Scott Jimmy',
    level: 'Beginner',
    timeToStart: 'Feb 2018',
    totalHour: '2h',
    totalRate: 12,
    rate: randomRate(),
    image: image02,
  },
];
export const listCourseProvider = async () => {
  return data;
};

export const findCourseProvider = async (id) => {
  return data.find((item) => item.id === id);
};
