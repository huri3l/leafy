import list from '@/static/routes.json';

export const routes = {
  get: <T extends keyof typeof list>(route: T) => list[route],
  search: (term: string) => `/${list.search}?${list.search_term}=${term}`,
};
