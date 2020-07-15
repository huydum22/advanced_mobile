const randomRate = () => {
  return Math.floor(Math.random() * 20);
};
import image from '../assets/image/logoItEdu.png';

const data = [
  {
    id: '1',
    name: 'Amazing Network Traffic with Wireshark',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '2',
    name: 'PRINCE2@ Practitioner',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '3',
    name: 'ITIL 4 Foundation',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '4',
    name: 'Building Statistical and Mathematical Model with R',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '5',
    name: 'Data Engineering with Google Cloud',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '6',
    name: 'Domain-Driven Design',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '7',
    name: 'Cloud Architecture with Google Cloud',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '8',
    name: 'Building Application with React and Flux',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '9',
    name: 'Cloud Engineering with Google Cloud',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',
    image: image,
  },
  {
    id: '10',
    name: 'Microsoft 365 Mobility and Security (MS-101)',
    numberOfCourse: randomRate() + ' course',
    totalHour: randomRate() + 'h',

    image: image,
  },
];
export default data;
