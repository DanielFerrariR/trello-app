import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { ReactComponent as ChevronRight } from '../../assets/chevron--right.svg';
import { ReactComponent as ChevronLeft } from '../../assets/chevron--left.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
  children: React.ReactNode;
  initialState?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

const Sidebar = ({
  className,
  children,
  initialState = false,
  onToggle,
}: SidebarProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    setIsOpen(initialState);
  }, [initialState]);

  useEffect(() => {
    onToggle?.(isOpen);
  }, [onToggle, isOpen]);

  return (
    <div
      className={classNames(
        styles.wrapper,
        !isOpen && styles.isClosed,
        className
      )}
    >
      {isOpen ? (
        <>
          <IconButton
            ariaLabel="Close"
            className={styles.closeIcon}
            icon={ChevronLeft}
            onClick={() => setIsOpen(false)}
          />
          {children}
        </>
      ) : (
        <button
          aria-label="Open"
          className={classNames(styles.sideBarButton)}
          onClick={() => setIsOpen(true)}
        >
          <Icon className={styles.openIcon} icon={ChevronRight} />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
