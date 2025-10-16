export interface SideBarItem {
  id: string;
  label: string;
  component: React.ReactNode;
}

export interface User {
  id: number;
  email?: string;
  fullName?: string;
}
