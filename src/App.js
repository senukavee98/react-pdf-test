import logo from './logo.svg';
import './App.css';
import PDFFIle from './components/PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFIle />} fileName="FORM">
        {({ blob, url, loading, error }) =>
          loading ? (
            <button>Loading document...</button>
          ) : (
            <button>Download PDF</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
