type RouteKey = 'home' | 'bio' | 'contact';

type Route = {
  text: string;
  path: string;
};

type Routes = { [K in RouteKey]: Route };

export const routes: Routes = {
  home: {
    text: 'Home',
    path: '/',
  },
  bio: {
    text: 'Bio',
    path: '/bio',
  },
  contact: {
    text: 'Contact',
    path: '/contact',
  },
};

export default Object.values(routes);
