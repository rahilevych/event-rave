export interface SidebarItem {
  id: string;
  label: string;
  component: React.ReactNode;
}

export interface User {
  id: number;
  email?: string;
  fullName?: string;
  role?: string;
}
