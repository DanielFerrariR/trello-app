import styles from './Home.module.scss';
import { Dashboard } from './Dashboard';
import { useMemo, useState } from 'react';
import { Board } from './Dashboard/Dashboard.types';
import DashboardSidebar, {
  getEmptyBoard,
} from './DashboardSidebar/DashboardSidebar';
import cloneDeep from 'lodash/cloneDeep';

const Home = () => {
  const [boards, setBoards] = useState<Board[]>(() => {
    const boards = localStorage.getItem('boards');
    if (boards) return JSON.parse(boards);
    return [getEmptyBoard()];
  });
  const [currentBoardId, setCurrentBoardId] = useState(() => {
    const boardId = localStorage.getItem('currentBoardId');
    const currentBoard = boards.find((board) => board.id === boardId);
    if (currentBoard) return currentBoard.id;
    return boards[0].id;
  });
  const currentBoard = useMemo(
    () => boards.find((board) => board.id === currentBoardId)!,
    [boards, currentBoardId]
  );

  const updateBoards = (newBoards: Board[]) => {
    localStorage.setItem('boards', JSON.stringify(newBoards));
    setBoards(newBoards);
  };

  const updateBoard = (newBoard: Board) => {
    const newBoards = cloneDeep(boards).map((board) => {
      if (board.id === currentBoardId) return newBoard;
      return board;
    });
    updateBoards(newBoards);
  };

  const updateCurrentBoardId = (id: string) => {
    localStorage.setItem('currentBoardId', id);
    setCurrentBoardId(id);
  };

  return (
    <div className={styles.homeWrapper}>
      <DashboardSidebar
        boards={boards}
        updateBoards={updateBoards}
        currentBoardId={currentBoardId}
        updateCurrentBoardId={updateCurrentBoardId}
      />
      <Dashboard board={currentBoard} updateBoard={updateBoard} />
    </div>
  );
};

export default Home;
