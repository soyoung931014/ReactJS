import { todoList } from "atom";
import DraggableCard from "DraggableCard";
import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
const App = () => {
  const [toDos, setToDos] = useRecoilState(todoList);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return; // 유저가 제 자리에 둘 떄
    setToDos((oldToDos) => {
      // 1) Delete item on source.index
      const toDosCopy = [...oldToDos];
      toDosCopy.splice(source.index, 1);
      // 2) Put back the item on the destination.index
      toDosCopy.splice(destination?.index, 0, draggableId);
      console.log(toDosCopy);
      return toDosCopy;
    });
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
            <Droppable droppableId="one">
              {(magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                  {toDos.map((toDo, index) => (
                    <DraggableCard key={toDo} index={index} toDo={toDo} />
                  ))}
                  {magic.placeholder}
                </Board>
              )}
            </Droppable>
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
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;
