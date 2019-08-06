import React from 'react';
import ReactDOM from 'react-dom';
import HabitList from './HabitList';

const habits = [
  { id: 1, title: 'Test' },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HabitList habits={habits} />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
