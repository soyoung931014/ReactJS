import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: IDragabbleCardProps) => {
  console.log("todo", toDo);
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;
