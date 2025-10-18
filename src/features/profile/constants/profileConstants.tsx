import { Tikets } from '../components/tikets/Tikets';
import { Favorites } from '../components/favorites/Favorites';
import { ProfileInfo } from '../components/profile-info/ProfileInfo';

export const sidebarItems = [
  { id: 'profile', label: 'Profile', component: <ProfileInfo /> },
  { id: 'favorites', label: 'Favorites', component: <Favorites /> },
  { id: 'tikets', label: 'Tickets', component: <Tikets /> },
];
