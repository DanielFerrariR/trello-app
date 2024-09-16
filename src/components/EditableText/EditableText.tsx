import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Text } from '../Text';
import { TextType } from '../Text/Text';
import textStyles from '../Text/Text.module.scss';
import styles from './EditableText.module.scss';

interface EditableTextProps {
  className?: string;
  text: string;
  onChangeText: (text: string) => void;
  type?: TextType;
  maxLength?: number;
}

const EditableText = ({
  className,
  text,
  onChangeText,
  type = 'paragraph',
  maxLength,
}: EditableTextProps): React.ReactElement => {
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(text);
  const isValueEmpty = value.trim() === '';

  useEffect(() => {
    setValue(text);
  }, [text]);

  useEffect(() => {
    if (isEditing) textareaRef.current?.focus();
  }, [isEditing]);

  const handleBlur = () => {
    const newValue = isValueEmpty ? text : value.trim();
    onChangeText(newValue);
    setValue(newValue);
    setIsEditing(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      textareaRef.current?.blur();
    }
  };

  return (
    <div
      className={classNames(styles.wrapper, className)}
      onClick={() => setIsEditing(true)}
    >
      <textarea
        onKeyDown={handleKeyDown}
        aria-label={value}
        className={classNames(
          styles.textarea,
          isEditing && styles.show,
          type && textStyles[type]
        )}
        ref={textareaRef}
        onFocus={() => setIsEditing(true)}
        onBlur={handleBlur}
        rows={1}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        maxLength={maxLength}
      />
      <Text
        type={type}
        className={classNames(styles.text, isEditing && styles.hide)}
      >
        {isValueEmpty ? ' ' : value}
      </Text>
    </div>
  );
};

export default EditableText;
