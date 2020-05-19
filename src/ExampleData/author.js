import imagePerson from '../../assets/person.jpg';
const randomRate = () => {
  return Math.floor(Math.random() * 20);
};
const data = [
  {
    id: '1',
    name: 'Deborah House',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '2',
    name: 'Scott Jimmy',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '3',
    name: 'Angular Simon',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '4',
    name: 'Allen Scott',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '5',
    name: 'Mark Buna',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '6',
    name: 'Jim Wilson',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '7',
    name: 'Joe Jim',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '8',
    name: 'Jim Cooper',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '9',
    name: 'Google Cloud',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
  {
    id: '10',
    name: 'Jason Olson',
    image: imagePerson,
    numberOfCourse: randomRate() + ' course',
  },
];
export default data;
