import styles from './Home.module.scss';
import { Dashboard } from './Dashboard';
import { useEffect, useRef, useState } from 'react';
import { Board } from './Dashboard/Dashboard.types';
import cloneDeep from 'lodash/cloneDeep';
import DashboardSidebar, {
  getEmptyBoard,
} from './DashboardSidebar/DashboardSidebar';

const Home = () => {
  const [boards, setBoards] = useState<Board[]>(() => {
    const boards = localStorage.getItem('boards');
    if (!boards) return [getEmptyBoard()];
    return JSON.parse(boards);
  });
  const [currentBoard, setCurrentBoard] = useState(boards[0]);
  const onceRef = useRef(false);

  useEffect(() => {
    if (onceRef.current) {
      onceRef.current = false;
      return;
    }
    onceRef.current = true;

    let newBoards = cloneDeep(boards);

    newBoards = newBoards.map((board) => {
      if (board.id === currentBoard.id) return currentBoard;
      return board;
    });

    localStorage.setItem('boards', JSON.stringify(boards));
    setBoards(newBoards);
  }, [currentBoard, boards]);

  return (
    <div className={styles.homeWrapper}>
      <DashboardSidebar
        boards={boards}
        setBoards={setBoards}
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
      />
      <Dashboard board={currentBoard} setBoard={setCurrentBoard} />
    </div>
  );
};

export default Home;
