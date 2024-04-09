import './App.css';
// At the top of your file
import 'bootstrap/dist/css/bootstrap.min.css';
import {SpreadsheetComponent} from '@syncfusion/ej2-react-spreadsheet';

function App() {
  return (
    <div className="App">
      <h1>Sample Spreadsheet</h1>
      <SpreadsheetComponent></SpreadsheetComponent>
    </div>
  );
}

export default App;
