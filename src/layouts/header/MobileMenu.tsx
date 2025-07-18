import { useRef, useState } from "react";
import { MobileDropdown } from "./MobileDropdown";
import { MdClose, MdPerson } from "react-icons/md";
import styles from "./MobileMenu.module.css";
import { AnimatePresence, motion } from "motion/react";
import { useClickOutside } from "../../hooks/useClickOutside";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false), isOpen);
  return (
    <div data-testid="mobile-menu" ref={dropdownRef} className={styles.menu}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`${styles.dropdown} ${styles.opened}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <MobileDropdown />
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen ? (
        <MdPerson
          data-testid="person-icon"
          onClick={() => setIsOpen(true)}
          className={styles.openIcon}
        />
      ) : (
        <MdClose
          data-testid="close-icon"
          className={styles.closeIcon}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
