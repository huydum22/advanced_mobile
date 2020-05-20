const randomCheck = () => {
  if (Math.floor(Math.random() * 5) % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
var subtitles = [
  'Introduction',
  'Practice Exercises',
  'Introduction to TypeScript',
  'Comparing Angular to AngularJS',
  'A Conceptual Overview of Angular',
  'Installing Git and Node',
  'Getting Started with the Angular CLI',
  'Bootstrapping an Angular App',
  'A Brief Look at the App Module',
  'Accessing Static Files',
  'Summary',
];
var times = [
  '2m 54s',
  '2m 24s',
  '7m 9s',
  '2m 17s',
  '3m 2s',
  '1m 12s',
  '2m 3s',
  '4m 50s',
  '4m 35s',
  '1m 44s',
  '5m 47s',
  '42s',
];

const randomSubTitle = () => {
  return subtitles[Math.floor(Math.random() * subtitles.length)];
};
const randomTime = () => {
  return times[Math.floor(Math.random() * times.length)];
};
const data = [
  {
    title: 'Course Overview',
    hour: '2m 4s',
    data: [
      {
        subTitle: 'Course Overview',
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Getting Started with Angular',
    hour: '33m 31s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Creating and Communicating Between Angular Components',
    hour: '32m 6s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Exploring the Angular Template Syntax',
    hour: '16m 29s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Creating Reusable Angular Services',
    hour: '49m 15s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Routing and Navigating Pages',
    hour: '1h 14m 12s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Collecting Data with Angular Forms and Validation',
    hour: '11m 38s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },

  {
    title: 'Communicating Between Components',
    hour: '13m 19s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Reusing Components with Content Projection',
    hour: '33m 17s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Displaying Data with Pipes',
    hour: '24m 35s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
  {
    title: 'Understanding Angular Dependency Injection',
    hour: '45m 35s',
    data: [
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
      {
        subTitle: randomSubTitle(),
        isCheck: randomCheck(),
        time: randomTime(),
      },
    ],
  },
];
export default data;
