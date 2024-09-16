import classNames from 'classnames';
import styles from './Textarea.module.scss';

interface TextareaProps {
  className?: string;
  placeholder?: string;
  value?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}

const Textarea = ({
  className,
  placeholder,
  value,
  onChange,
  onBlur,
  maxLength,
}: TextareaProps): React.ReactElement => (
  <textarea
    className={classNames(styles.textarea, className)}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    maxLength={maxLength}
  />
);

export default Textarea;
