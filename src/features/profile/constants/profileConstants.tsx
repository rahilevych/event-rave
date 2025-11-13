import { Tikets } from '../components/tikets/Tikets';
import { ProfileInfo } from '../components/profile-info/ProfileInfo';

export const sidebarItems = [
  { id: 'profile', label: 'Profile', component: <ProfileInfo /> },
  { id: 'tikets', label: 'Tickets', component: <Tikets /> },
];
