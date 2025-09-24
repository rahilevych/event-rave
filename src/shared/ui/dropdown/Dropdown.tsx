import React, { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.css';

import { AnimatePresence, motion } from 'motion/react';

type DropdownProps<T> = {
  options: T[];
  onSelect: (value: T) => void;
  trigger?: React.ReactNode;
  renderItem?: (item: T) => React.ReactNode;
  classNameDropdown?: string;
  classNameList?: string;
  openIcon?: React.ReactNode;
  closedIcon?: React.ReactNode;
};

export const Dropdown = <T,>({
  options,
  onSelect,
  trigger,
  renderItem,
  classNameDropdown,
  classNameList,

  openIcon,
  closedIcon,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item: T) => {
    onSelect(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      data-testid="dropdown"
      className={`${styles.dropdown} ${isOpen ? styles.pressed : ''} ${classNameDropdown || ''}`}
      ref={dropdownRef}
    >
      <button className={styles.button} onClick={toggleDropdown}>
        {isOpen ? closedIcon || null : openIcon || trigger || null}{' '}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={`${styles.list} ${classNameList || ''}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {options.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {renderItem ? renderItem(item) : String(item)}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
