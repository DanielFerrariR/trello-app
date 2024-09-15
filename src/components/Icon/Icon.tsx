interface IconProps {
  children: React.ReactNode;
}

const Icon = ({ children }: IconProps): React.ReactElement => {
  return <div>{children}</div>;
};

export default Icon;
