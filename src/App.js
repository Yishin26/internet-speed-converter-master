import './App.css';

import React, { useState } from 'react';

import CardFooter from './components/CardFooter';
import UnitControl from './components/UnitControl';
import UnitConverter from './components/UnitConverter';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas, far);

function App() {
  //1.定義state, 取得預設值為0 的inputValue 和修改狀態setValue的方法
  const [inputValue, setInputValue] = useState(0);

  //2.定義事件處理器(在父層定義好，在用props流入從子層呼叫(和vue emit類似之功能))
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
}

export default App;
