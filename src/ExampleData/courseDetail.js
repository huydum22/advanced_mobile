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
};
export default data;
