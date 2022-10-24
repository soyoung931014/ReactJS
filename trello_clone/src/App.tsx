import { todoList } from "atom";
import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Board from "Board";
const App = () => {
  const [toDos, setToDos] = useRecoilState(todoList);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return; // 유저가 제 자리에 둘 떄

    /*  console.log("드래그 끝");
    console.log("source: ", source);
    console.log("destination: ", destination);
    console.log("draggableId: ", draggableId); */
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </div>
  );
};

export default App;
const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 3fr);
  gap: 10px;
`;
