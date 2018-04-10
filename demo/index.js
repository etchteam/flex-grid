import React from 'react';
import ReactDOM from 'react-dom';
import FlexGrid from '../FlexGrid';
import './main.scss';

ReactDOM.render(
  <div>
    <h1>Flex grid example</h1>
    <FlexGrid>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
        <FlexGrid.Item grow key={i}>Item</FlexGrid.Item>
      ))}
    </FlexGrid>
  </div>,
  document.getElementById('app'),
);
