import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';

// Define more columns.
const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'name', name: 'Name' },
  { key: 'age', name: 'Age' },
  { key: 'country', name: 'Country' },
  { key: 'email', name: 'Email' },
  { key: 'phone', name: 'Phone' },
  { key: 'city', name: 'City' },
  { key: 'state', name: 'State' },
  { key: 'zipCode', name: 'Zip Code' }
];

// Generate sample row data.
const rows = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  title: `Title ${index}`,
  name: `Name ${index}`,
  age: Math.floor(Math.random() * 100),
  country: `Country ${index}`,
  email: `email${index}@example.com`,
  phone: `123-456-${String(index).padStart(4, '0')}`,
  city: `City ${index}`,
  state: `State ${index}`,
  zipCode: `${String(index).padStart(5, '0')}`
}));

function App() {
  return <DataGrid columns={columns} rows={rows} style={{margin: '40px' }}/>;
}

export default App;

