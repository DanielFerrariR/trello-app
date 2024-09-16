import { FunctionComponent, SVGProps } from 'react';
import classNames from 'classnames';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  testId?: string;
}

const Icon = ({
  className,
  icon: Icon,
  testId,
}: IconProps): React.ReactElement => {
  return (
    <div className={classNames(styles.icon, className)} data-testid={testId}>
      <Icon />
    </div>
  );
};

export default Icon;
