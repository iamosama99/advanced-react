import {data} from '../../../data.js';
import React, {useState} from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeAll = () => {
    setPeople([]);
  }

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople)
  }

  return (
    <div>
      {
        people.map((person) => {
          console.log(person);
          return (
            <div key={person.id}>
          <h4 >
            {person.name}
          </h4>
          <button className='btn' onClick={() => removeItem(person.id)} role='button'>Remove me</button>
          </div>
          );
        })
      }
      <button className='btn' onClick={removeAll} role='button'>Remove all</button>
    </div>
  );
};

export default UseStateArray;
