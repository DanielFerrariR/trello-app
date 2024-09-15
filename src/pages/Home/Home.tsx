import { useState } from 'react';
import styles from './Home.module.scss';
import { EditableText } from '../../components/EditableText';
import { v4 as uuidv4 } from 'uuid';
import cloneDeep from 'lodash/cloneDeep';
import { Button } from '../../components/Button';

interface Card {
  id: string;
  title: string;
  description?: string;
}

interface List {
  id: string;
  title: string;
  cards: Card[];
}

interface Board {
  id: string;
  title: string;
  lists: List[];
}

const Home = () => {
  const [board, setBoard] = useState<Board>(() => ({
    id: uuidv4(),
    title: 'Simple Project Board',
    lists: [],
  }));

  const updateBoardTitle = (text: string) => {
    const newBoard = cloneDeep(board);
    newBoard.title = text;
    setBoard(newBoard);
  };

  const uploadListTitle = (listId: string, text: string) => {
    const newBoard = cloneDeep(board);
    const listIndex = newBoard.lists.findIndex((list) => list.id === listId);
    newBoard.lists[listIndex].title = text;
    setBoard(newBoard);
  };

  const uploadCardTitle = (listId: string, cardId: string, text: string) => {
    const newBoard = cloneDeep(board);
    const listIndex = newBoard.lists.findIndex((list) => list.id === listId);
    const cardIndex = newBoard.lists[listIndex].cards.findIndex(
      (card) => card.id === cardId
    );
    newBoard.lists[listIndex].cards[cardIndex].title = text;
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

  const addNewCard = (listId: string) => {
    const newBoard = cloneDeep(board);
    const listIndex = newBoard.lists.findIndex((list) => list.id === listId);
    newBoard.lists[listIndex].cards.push({
      id: uuidv4(),
      title: 'New Card',
    });
    setBoard(newBoard);
  };

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
          <div key={list.id} className={styles.list}>
            <EditableText
              text={list.title}
              onChangeText={(text) => uploadListTitle(list.id, text)}
              maxLength={512}
            />
            <div className={styles.listWrapper}>
              {list.cards.map((card) => (
                <div key={card.id} className={styles.card}>
                  <EditableText
                    text={card.title}
                    onChangeText={(text) =>
                      uploadCardTitle(list.id, card.id, text)
                    }
                    maxLength={512}
                  />
                </div>
              ))}
            </div>
            <Button onClick={() => addNewCard(list.id)}>Add a new card</Button>
          </div>
        ))}
        <div className={styles.buttonRightGap}>
          <Button className={styles.addListButton} onClick={addNewList}>
            {board.lists.length === 0 ? 'Add a new list' : 'Add another list'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
