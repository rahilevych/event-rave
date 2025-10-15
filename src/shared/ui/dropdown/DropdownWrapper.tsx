import React, { useRef, useState } from 'react';
import styles from './Dropdown.module.css';

import { AnimatePresence, motion } from 'motion/react';
import { useClickOutside } from '../../hooks/useClickOutside';

type DropdownWrapperProps = {
  trigger: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
  children: React.ReactNode;
  className?: string;
};

export const DropdownWrapper = ({
  trigger,
  children,
  className,
}: DropdownWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));
  const renderTrigger =
    typeof trigger === 'function' ? trigger(isOpen) : trigger;
  return (
    <div ref={dropdownRef} className={`${styles.dropdown} ${className || ''}`}>
      <button className={styles.trigger} onClick={() => setIsOpen((p) => !p)}>
        {renderTrigger}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`${styles.menu} `}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
