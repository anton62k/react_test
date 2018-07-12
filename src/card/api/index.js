import makeResponse from './response';

const api = (dateFilter, typeFilter) => new Promise((resolve) => {
  setTimeout(resolve, 500, makeResponse(dateFilter, typeFilter));
});

export default api;
