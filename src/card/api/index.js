import makeResponse from './response';

const api = (dateFilter, typeFilter) => new Promise((resolve) => {
  const delay = 500;
  setTimeout(resolve, delay, makeResponse(dateFilter, typeFilter));
});

export default api;
