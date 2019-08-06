import React, { useState } from 'react';

import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';

import './App.css';

const habits = [
  {
    id: 1,
    title: '운동 1시간 하기',
  },
];

const App = () => {
  const [isOpenForm, setOpenForm] = useState(false);

  return (
    <div className="App">
      <HabitList habits={habits} />
      {isOpenForm
        ? <HabitForm />
        : null}
      <button
        type="button"
        onClick={() => setOpenForm(!isOpenForm)}
      >
        추가
      </button>
    </div>
  );
};

export default App;
