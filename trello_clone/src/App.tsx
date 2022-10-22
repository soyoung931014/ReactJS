import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const App = () => {
  const onDragEnd = () => {
    return 1;
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="one">
          {(magic) => (
            <ul {...magic.droppableProps} ref={magic.innerRef}>
              <Draggable draggableId="first" index={0}>
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    one
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;
