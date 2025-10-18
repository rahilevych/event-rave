import React, { useRef, useState, useEffect } from 'react';
import styles from './DropdownWrapper.module.css';
import { AnimatePresence, motion } from 'motion/react';
import { useClickOutside } from '../../hooks/useClickOutside';

type Direction = 'top' | 'bottom' | 'left' | 'right';

type DropdownWrapperProps = {
  trigger: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
  children: React.ReactNode;
  className?: string;
  classNameMenu?: string;
  direction?: Direction;
  onOpenChange?: (isOpen: boolean) => void;
};

export const DropdownWrapper = ({
  trigger,
  children,
  className,
  classNameMenu,
  direction = 'bottom',
  onOpenChange,
}: DropdownWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (onOpenChange) {
      onOpenChange(isOpen);
    }
  }, [isOpen, onOpenChange]);

  const renderTrigger =
    typeof trigger === 'function' ? trigger(isOpen) : trigger;

  const getInitial = () => {
    switch (direction) {
      case 'top':
        return { opacity: 0, y: 8 };
      case 'bottom':
        return { opacity: 0, y: -8 };
      case 'left':
        return { opacity: 0, x: 8 };
      case 'right':
        return { opacity: 0, x: -8 };
      default:
        return { opacity: 0, y: -8 };
    }
  };

  const getAnimate = () => ({ opacity: 1, x: 0, y: 0 });
  const getExit = () => getInitial();

  return (
    <div ref={dropdownRef} className={`${styles.dropdown} ${className || ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {renderTrigger}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`${styles.menu} ${classNameMenu || ''}`}
            initial={getInitial()}
            animate={getAnimate()}
            exit={getExit()}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
