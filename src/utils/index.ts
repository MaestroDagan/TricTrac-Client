export * from './api';

export function getQuery(window: Window) {
  const queryArr = window.location.search.split('?');
  queryArr.shift();

  const query: any = {};

  for (const queryStr of queryArr) {
    const arr = queryStr.split('=');
    query[arr[0]] = arr[1];
  }

  return query;
}
