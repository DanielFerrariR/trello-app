import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  children: React.ReactNode;
  onClickOutside?: () => void;
}

const Modal = ({
  className,
  children,
  onClickOutside,
}: ModalProps): React.ReactElement => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Prevent focus behind the modal with tab navigation
  useEffect(() => {
    document.getElementById('root')?.setAttribute('inert', 'true');
    return () => {
      document.getElementById('root')?.removeAttribute('inert');
    };
  }, []);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) onClickOutside?.();
  };

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className={styles.wrapper}
      onClick={handleClickOutside}
    >
      <div className={classNames(styles.modal, className)}>{children}</div>
    </div>,
    document.getElementById('modals')!
  );
};

export default Modal;
