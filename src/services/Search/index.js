import REQUEST from '../HttpClient';
import {SEARCH} from '../../Constants/API';

export const SearchByKeywordAPI = async (keyword) => {
  return await REQUEST.post(SEARCH, {
    keyword: keyword,
    opt: {category: null},
    limit: 12,
    offset: 0,
  });
};
