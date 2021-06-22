import React from 'react';

//取得從父組件傳進來的props 即 inputValue
const CardFooter = (props) => {
  const { inputValue } = props;

  let criteria = {};

  if (!inputValue) {
    criteria = {
      title: '---',
      backgroundColor: '#d3d8e2',
    };
  } else if (inputValue < 15) {
    criteria = {
      title: 'SLOW',
      backgroundColor: '#ee362d',
    };
  } else if (inputValue < 40) {
    criteria = {
      title: 'GOOD',
      backgroundColor: '#1b82f1',
    };
  } else if (inputValue >= 40) {
    criteria = {
      title: 'FAST',
      backgroundColor: '#13d569',
    };
  }

  return (
    <div
      className="card-footer"
      style={{
        backgroundColor: criteria.backgroundColor,
      }}
    >
      {criteria.title}
    </div>
  );
};

export default CardFooter;
