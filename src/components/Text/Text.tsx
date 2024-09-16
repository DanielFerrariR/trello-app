import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';

export type TextType =
  | 'page'
  | 'section'
  | 'subsection'
  | 'paragraph'
  | 'caption';

export interface TitleProps {
  className?: string;
  type?: TextType;
  children?: ReactNode;
}

interface DynamicTagComponentProps {
  className?: string;
  type: TextType;
  children?: ReactNode;
}

const mapTypeWithTag = {
  page: 'h1',
  section: 'h2',
  subsection: 'h3',
  paragraph: 'p',
  caption: 'p',
};

const DynamicTagComponent: React.FC<DynamicTagComponentProps> = ({
  type,
  ...extraProps
}) => React.createElement(mapTypeWithTag[type], extraProps);

const Text: React.FC<TitleProps> = ({
  className,
  type = 'paragraph',
  children,
}) => (
  <DynamicTagComponent
    className={classNames(type && styles[type], className)}
    type={type}
  >
    {children}
  </DynamicTagComponent>
);

export default Text;
