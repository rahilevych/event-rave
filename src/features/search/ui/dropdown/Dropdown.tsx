import { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.css';
import { FaAngleDown } from 'react-icons/fa';
import { AnimatePresence, motion } from 'motion/react';

type DropdownProps = {
  items: string[];
  label?: string;
  onSelect: (item: string) => void;
  className?: string;
};

export const Dropdown = ({
  items,
  label = 'Select',
  onSelect,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (item: string) => {
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
      className={`${styles.dropdown} ${isOpen ? styles.pressed : ''} ${className || ''}`}
      ref={dropdownRef}
    >
      <button
        className={`${styles.button} ${isOpen ? styles.pressed : ''} `}
        onClick={toggleDropdown}
      >
        {label}
        <FaAngleDown
          className={`${styles.icon} ${isOpen ? styles.opened : ''} `}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.list}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
