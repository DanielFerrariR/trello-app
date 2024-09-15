interface IconButtonProps {
  children: React.ReactNode;
}

const IconButton = ({ children }: IconButtonProps): React.ReactElement => {
  return <button>{children}</button>;
};

export default IconButton;
