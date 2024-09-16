import { FunctionComponent, MouseEventHandler, SVGProps } from 'react';
import classNames from 'classnames';
import styles from './IconButton.module.scss';

interface IconButtonProps {
  className?: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  ariaLabel: string;
}

const IconButton = ({
  className,
  icon: Icon,
  onClick,
  ariaLabel,
}: IconButtonProps): React.ReactElement => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={classNames(styles.button, className)}
    >
      <Icon />
    </button>
  );
};

export default IconButton;
