import { DropdownWrapper } from '../../../../shared/ui/dropdown/DropdownWrapper';
import { MdClose, MdMenu } from 'react-icons/md';
import { SidebarItem } from '../../model/types';
import styles from './ProfileMenu.module.css';
import { createPortal } from 'react-dom';
import { useState } from 'react';

type ProfileMenuProps = {
  list: SidebarItem[];
  onClick: (node: React.ReactNode) => void;
  onTitleChange: (title: string) => void;
};

export const ProfileMenu = ({
  list,
  onClick,
  onTitleChange,
}: ProfileMenuProps) => {
  const handleClick = (item: SidebarItem) => {
    onClick(item.component);
    onTitleChange(item.label);
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />,
          document.body,
        )}
      <div className={styles.header}>
        {' '}
        <DropdownWrapper
          className={styles.dropdown}
          direction="right"
          onOpenChange={setIsOpen}
          trigger={(open) =>
            open ? (
              <MdClose className={styles.icon} />
            ) : (
              <MdMenu className={styles.icon} />
            )
          }
        >
          <ul className={styles.list}>
            {list.map((item) => (
              <li key={item.id} onClick={() => handleClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </DropdownWrapper>
      </div>
    </>
  );
};
