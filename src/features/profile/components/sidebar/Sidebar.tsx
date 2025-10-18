import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { SidebarItem } from '../../model/types';
type SidebarProps = {
  list: SidebarItem[];
  onClick: (node: React.ReactNode) => void;
  onTitleChange: (title: string) => void;
};

export const Sidebar = ({ list, onClick, onTitleChange }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState(list[0].id);

  const handleClick = (item: SidebarItem) => {
    onClick(item.component);
    onTitleChange(item.label);
    setActiveTab(item.id);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>Profile</div>
      <ul className={styles.list}>
        {list.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item)}
            className={`${styles.listItem} ${
              item.id === activeTab ? styles.active : ''
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
