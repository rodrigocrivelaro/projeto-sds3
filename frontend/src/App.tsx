import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBar from './components/NavBar/index';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
