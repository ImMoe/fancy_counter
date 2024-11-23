import { useEffect, useState } from 'react';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import Count from './Count';
import CountButtons from './CountButtons';
import ResetButton from './ResetButton';
import Title from './Title';

const Card = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleKey = (event) => {
      if (event.code === 'Space') {
        setCount(count + 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [count]);
  const handleSetCount = (event, type) => {
    if (type === 'plus') {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
    event.target.blur();
  };
  return (
    <div className='card'>
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtons>
        <button
          onClick={(e) => handleSetCount(e, 'minus')}
          className='count-btn'
        >
          <MinusIcon className='count-btn-icon' />
        </button>

        <button
          onClick={(e) => handleSetCount(e, 'plus')}
          className='count-btn'
        >
          <PlusIcon className='count-btn-icon' />
        </button>
      </CountButtons>
    </div>
  );
};
export default Card;
