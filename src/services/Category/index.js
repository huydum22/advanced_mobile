import REQUEST from '../HttpClient';
import {SEARCH, ALL_CATEGORY} from '../../Constants/API';

export const SearchAllCategoryAPI = async () => {
  return await REQUEST.get(ALL_CATEGORY);
};

export const ListCourseByCategoryAPI = async (id) => {
  return await REQUEST.post(SEARCH, {
    keyword: '',
    opt: {category: [id]},
    limit: 5,
    offset: 0,
  });
};
