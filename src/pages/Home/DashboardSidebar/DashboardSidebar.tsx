import { IconButton } from '../../../components/IconButton';
import { Sidebar } from '../../../components/Sidebar';
import { Text } from '../../../components/Text';
import { Board } from '../Dashboard/Dashboard.types';
import styles from './DashboardSidebar.module.scss';
import { ReactComponent as TrashCanIcon } from '../../../assets/trash-can.svg';
import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import { v4 as uuidv4 } from 'uuid';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';
import { useState } from 'react';

interface DashboardSidebarProps {
  boards: Board[];
  setBoards: React.Dispatch<React.SetStateAction<Board[]>>;
  currentBoard: Board;
  setCurrentBoard: React.Dispatch<React.SetStateAction<Board>>;
}

export const getEmptyBoard = () => ({
  id: uuidv4(),
  title: 'Simple Project Board',
  lists: [],
});

const DashboardSidebar = ({
  boards,
  setBoards,
  currentBoard,
  setCurrentBoard,
}: DashboardSidebarProps) => {
  const [isOpen, setIsOpen] = useState(() => {
    const isSidebarOpen = localStorage.getItem('isSidebarOpen');
    if (isSidebarOpen === 'true') return true;
    return false;
  });

  const addNewBoard = () => {
    const newBoards = cloneDeep(boards);
    newBoards.push(getEmptyBoard());
    setBoards(newBoards);
  };

  const deleteBoard = (boardId: string) => {
    let newBoards = cloneDeep(boards);
    newBoards = newBoards.filter((board) => board.id !== boardId);
    setBoards(newBoards);
  };

  const handleToggle = (isOpen: boolean) => {
    localStorage.setItem('isSidebarOpen', `${isOpen}`);
    setIsOpen(isOpen);
  };

  return (
    <Sidebar
      className={styles.wrapper}
      initialState={isOpen}
      onToggle={handleToggle}
    >
      <div className={styles.boardListTitleWrapper}>
        <Text className={styles.boardListTitle} type="subsection">
          Your paintings
        </Text>
        <IconButton ariaLabel="Add" icon={AddIcon} onClick={addNewBoard} />
      </div>
      <div className={styles.boardListWrapper}>
        {boards.map((board) => {
          const isCurrentBoard = currentBoard.id === board.id;
          return (
            <div key={board.id} className={styles.boardButtonWrapper}>
              <button
                className={classNames(
                  styles.boardButton,
                  isCurrentBoard && styles.isCurrentBoard
                )}
                disabled={isCurrentBoard}
                onClick={() => setCurrentBoard(board)}
              >
                {board.title}
              </button>
              {!isCurrentBoard && (
                <IconButton
                  ariaLabel="Delete"
                  className={styles.deleteBoardButton}
                  icon={TrashCanIcon}
                  onClick={() => deleteBoard(board.id)}
                />
              )}
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
