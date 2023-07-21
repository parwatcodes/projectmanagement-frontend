import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import './dashboard.css';

const initialCards = {
  todo: [
    { id: '1', content: 'Task 1' },
    { id: '2', content: 'Task 2' },
  ],
  inProgress: [
    { id: '3', content: 'Task 3' },
  ],
  inReview: [
    { id: '4', content: 'Task 4' },
  ],
  done: [
    { id: '5', content: 'Task 5' },
    { id: '6', content: 'Task 6' },
  ],
};

const Dashboard = () => {
  const [cards, setCards] = React.useState(initialCards);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const newCards = { ...cards };
    const draggedCard = newCards[source.droppableId].splice(source.index, 1)[0];
    newCards[destination.droppableId].splice(destination.index, 0, draggedCard);

    setCards(newCards);
  };

  const renderCard = (card) => {
    return (
      <Draggable key={card.id} draggableId={card.id} index={0}>
        {(provided) => (
          <div
            className="card"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {card.content}
          </div>
        )}
      </Draggable>
    );
  };

  const renderList = (listId, listTitle) => {
    return (
      <div className="list">
        <h2>{listTitle}</h2>
        <Droppable droppableId={listId}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards[listId].map((card, index) => (
                <React.Fragment key={card.id}>
                  {renderCard(card)}
                </React.Fragment>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <DragDropContext onDragEnd={handleDragEnd}>
        {renderList('todo', 'Todo')}
        {renderList('inProgress', 'In Progress')}
        {renderList('inReview', 'In Review')}
        {renderList('done', 'Done')}
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
