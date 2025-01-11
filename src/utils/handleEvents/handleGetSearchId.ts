import { getSearchId } from '../fetch/index';

const handleGetSearchId = async () => {
  const res = await getSearchId();
  return res.searchId;
};

export const searchId = localStorage.searchId ? localStorage.searchId : await handleGetSearchId();
