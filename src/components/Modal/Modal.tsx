interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps): React.ReactElement => {
  return <div>{children}</div>;
};

export default Modal;
