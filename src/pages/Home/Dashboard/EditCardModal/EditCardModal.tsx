import { EditableText } from '../../../../components/EditableText';
import { IconButton } from '../../../../components/IconButton';
import { Modal } from '../../../../components/Modal';
import styles from './EditCardModal.module.scss';
import { ReactComponent as CloseIcon } from '../../../../assets/close.svg';
import { ReactComponent as TextLongParagraphIcon } from '../../../../assets/text--long-paragraph.svg';
import { ReactComponent as ContainerImageIcon } from '../../../../assets/container--image.svg';
import { Text } from '../../../../components/Text';
import { useState } from 'react';
import { Textarea } from '../../../../components/Textarea';
import { Icon } from '../../../../components/Icon';
import { ActiveCard } from '../../Dashboard/Dashboard.types';

interface EditCardModalProps {
  editCardModalData: ActiveCard;
  updateCardTitle: (text: string) => void;
  updateCardDescription: (text?: string) => void;
  hideModal: () => void;
}

const EditCardModal = ({
  editCardModalData,
  updateCardTitle,
  updateCardDescription,
  hideModal,
}: EditCardModalProps) => {
  const [description, setDescription] = useState(
    editCardModalData.card.description
  );

  return (
    <Modal className={styles.modal} onClickOutside={hideModal}>
      <div className={styles.titleWrapper}>
        <Icon icon={ContainerImageIcon} />
        <EditableText
          type="section"
          className={styles.title}
          text={editCardModalData.card.title}
          onChangeText={updateCardTitle}
          maxLength={512}
        />
        <IconButton
          ariaLabel="Close"
          className={styles.closeButton}
          icon={CloseIcon}
          onClick={hideModal}
        />
      </div>
      <div></div>
      <Text className={styles.listDetails}>
        in the list&nbsp;
        <span className={styles.listName}>{editCardModalData.list.title}</span>
      </Text>
      <div className={styles.descriptionWrapper}>
        <Icon icon={TextLongParagraphIcon} />
        <Text className={styles.descriptionTitle} type="subsection">
          Description
        </Text>
      </div>
      <Textarea
        className={styles.descriptionTextarea}
        placeholder="Add a more detailed description..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        onBlur={() => updateCardDescription(description)}
        maxLength={4096}
      />
    </Modal>
  );
};

export default EditCardModal;
