import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({
  className,
  children,
  onClick,
}: ButtonProps): React.ReactElement => (
  <button className={classNames(styles.button, className)} onClick={onClick}>
    {children}
  </button>
);

export default Button;
