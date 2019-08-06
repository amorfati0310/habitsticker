import React from 'react';

const HabitList = ({ habits }) => (
  <ul>
    {habits.map(habit => (
      <li key={habit.id}>{habit.title}</li>
    ))}
  </ul>
);

export default HabitList;
