import { FunctionComponent, SVGProps } from 'react';
import classNames from 'classnames';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const Icon = ({ className, icon: Icon }: IconProps): React.ReactElement => {
  return (
    <div className={classNames(styles.icon, className)}>
      <Icon />
    </div>
  );
};

export default Icon;
