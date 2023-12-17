import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const hello = () => {
    setValue(value+1); // The whole component 'CodeExample' re-renders every time setValue is used
  }

  hello(); // setting function call like this will make component re render infinitely

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
