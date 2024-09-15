interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps): React.ReactElement => {
  return <div>{children}</div>;
};

export default Sidebar;
