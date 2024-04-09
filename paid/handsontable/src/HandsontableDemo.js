import React from 'react';
import { HotTable } from '@handsontable/react';

const HandsontableDemo = () => {
  const data = [
    ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
  ];

  const columns = [
    { type: 'text' },
    { type: 'numeric' },
    { type: 'numeric' },
    { type: 'numeric' },
    { type: 'numeric' }
  ];

  return (
    <div>
      <h1>Handsontable Demo</h1>
      <HotTable data={data} colHeaders={true} rowHeaders={true} columns={columns} stretchH="all" />
    </div>
  );
};

export default HandsontableDemo;
