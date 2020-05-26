export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: {
    ROOT: '/profile/:username',
    FAVORITES: '/profile/:username/favorites',
  },
  FEED: '/feed',
  SETTINGS: '/settings',
  ARTICLES: {
    ROOT: '/articles/:slug',
    EDIT: '/articles/:slug/edit',
  },
  ARTICLE: {
    NEW: '/article/new',
  },
  TAGS: {
    ROOT: '/tags',
    TAG: '/tags/:tag',
  },
};
