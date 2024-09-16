import cloneDeep from 'lodash/cloneDeep';
import { EditableText } from '../../../components/EditableText';
import { useState } from 'react';
import { ActiveCard, Board } from './Dashboard.types';
import styles from './Dashboard.module.scss';
import { IconButton } from '../../../components/IconButton';
import { Button } from '../../../components/Button';
import { Text } from '../../../components/Text';
import { ReactComponent as TrashCanIcon } from '../../../assets/trash-can.svg';
import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import { EditCardModal } from './EditCardModal';
import { v4 as uuidv4 } from 'uuid';

interface DashboardProps {
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
}

const Dashboard = ({ board, setBoard }: DashboardProps): React.ReactElement => {
  const [draggedCardData, setDraggedCardData] = useState<ActiveCard | null>(
    null
  );
  const [editCardModalData, setEditCardModalData] = useState<ActiveCard | null>(
    null
  );
  const isBoardEmpty = board.lists.length === 0;

  const updateBoardTitle = (text: string) => {
    const newBoard = cloneDeep(board);
    newBoard.title = text;
    setBoard(newBoard);
  };

  const updateListTitle = (listId: string, text: string) => {
    const newBoard = cloneDeep(board);
    const listIndex = newBoard.lists.findIndex((list) => list.id === listId);
    newBoard.lists[listIndex].title = text;
    setBoard(newBoard);
  };

  const updateCardTitle = (listId: string, cardId: string, text: string) => {
    const newBoard = cloneDeep(board);
    const listIndex = newBoard.lists.findIndex((list) => list.id === listId);
    const cardIndex = newBoard.lists[listIndex].cards.findIndex(
      (card) => card.id === cardId
    );
    newBoard.lists[listIndex].cards[cardIndex].title = text;
    setBoard(newBoard);
  };

  const updateCardDescription = (
    listId: string,
    cardId: string,
    text?: string
  ) => {
    const newBoard = cloneDeep(board);
    const listIndex = newBoard.lists.findIndex((list) => list.id === listId);
    const cardIndex = newBoard.lists[listIndex].cards.findIndex(
      (card) => card.id === cardId
    );
    newBoard.lists[listIndex].cards[cardIndex].description = text;
    setBoard(newBoard);
  };

  const addNewList = () => {
    const newBoard = cloneDeep(board);
    newBoard.lists.push({
      id: uuidv4(),
      title: 'New List',
      cards: [],
    });
    setBoard(newBoard);
  };

  const deleteList = (listId: string) => {
    const newBoard = cloneDeep(board);
    newBoard.lists = newBoard.lists.filter((list) => list.id !== listId);
    setBoard(newBoard);
  };

  const addNewCard = (listId: string) => {
    const newBoard = cloneDeep(board);
    const listIndex = newBoard.lists.findIndex((list) => list.id === listId);
    newBoard.lists[listIndex].cards.push({
      id: uuidv4(),
      title: 'New Card',
    });
    setBoard(newBoard);
  };

  const deleteCard = (cardId: string, listId: string) => {
    const newBoard = cloneDeep(board);
    const listIndex = newBoard.lists.findIndex((list) => list.id === listId);
    newBoard.lists[listIndex].cards = newBoard.lists[listIndex].cards.filter(
      (card) => card.id !== cardId
    );
    setBoard(newBoard);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    listId: string
  ) => {
    event.preventDefault();

    // Skip if the card was dropped in the same list
    if (listId === draggedCardData?.list.id) return;

    const newBoard = cloneDeep(board);
    // Remove card from previous list
    const previousList = newBoard.lists.find(
      (list) => list.id === draggedCardData?.list.id
    )!;
    const card = previousList.cards.find(
      (card) => card.id === draggedCardData!.card.id
    )!;
    previousList.cards = previousList.cards.filter(
      (card) => card.id !== draggedCardData?.card.id
    );
    // Add card to the new list
    const list = newBoard.lists.find((list) => list.id === listId)!;
    list.cards.push(card);
    setBoard(newBoard);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) =>
    event.preventDefault();

  return (
    <div className={styles.wrapper}>
      <EditableText
        className={styles.boardTitle}
        type="section"
        text={board.title}
        onChangeText={updateBoardTitle}
        maxLength={512}
      />
      <div className={styles.board}>
        {board.lists.map((list) => (
          <div
            key={list.id}
            className={styles.list}
            onDrop={(event) => handleDrop(event, list.id)}
            onDragOver={handleDragOver}
          >
            <div className={styles.listTitleWrapper}>
              <EditableText
                className={styles.listTitle}
                text={list.title}
                onChangeText={(text) => updateListTitle(list.id, text)}
                maxLength={512}
              />
              <IconButton
                ariaLabel="Delete"
                icon={TrashCanIcon}
                onClick={() => deleteList(list.id)}
              />
            </div>
            <div className={styles.listWrapper}>
              {list.cards.map((card) => (
                <div key={card.id} className={styles.cardWrapper}>
                  <button
                    onClick={() => {
                      setEditCardModalData({
                        list: list,
                        card: card,
                      });
                    }}
                    className={styles.card}
                    draggable
                    onDragEnd={() => setDraggedCardData(null)}
                    onDragStart={() =>
                      setDraggedCardData({ list: list, card: card })
                    }
                  >
                    <Text className={styles.cardTitle}>{card.title}</Text>
                  </button>
                  <IconButton
                    ariaLabel="Delete"
                    className={styles.cardDeleteButton}
                    icon={TrashCanIcon}
                    onClick={() => deleteCard(card.id, list.id)}
                  />
                </div>
              ))}
            </div>
            <Button startIcon={AddIcon} onClick={() => addNewCard(list.id)}>
              Add a new card
            </Button>
          </div>
        ))}
        <div className={styles.buttonRightGap}>
          <Button
            startIcon={AddIcon}
            className={styles.addListButton}
            onClick={addNewList}
          >
            {isBoardEmpty ? 'Add a new list' : 'Add another list'}
          </Button>
        </div>
      </div>
      {editCardModalData && (
        <EditCardModal
          editCardModalData={editCardModalData}
          hideModal={() => setEditCardModalData(null)}
          updateCardTitle={(text) =>
            updateCardTitle(
              editCardModalData.list.id,
              editCardModalData.card.id,
              text
            )
          }
          updateCardDescription={(text) =>
            updateCardDescription(
              editCardModalData.list.id,
              editCardModalData.card.id,
              text
            )
          }
        />
      )}
    </div>
  );
};

export default Dashboard;
