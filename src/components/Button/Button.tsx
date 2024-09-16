import classNames from 'classnames';
import { FunctionComponent, SVGProps } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  startIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const Button = ({
  className,
  children,
  onClick,
  startIcon: StartIcon,
}: ButtonProps): React.ReactElement => (
  <button className={classNames(styles.button, className)} onClick={onClick}>
    {StartIcon && <StartIcon />}
    {children}
  </button>
);

export default Button;
