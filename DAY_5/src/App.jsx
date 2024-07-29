import Header from './component/Header';
import Footer from './component/Footer';
import Note from './component/Note';
import API_DATA from './component/data';
import './App.css'

function App() {

  return (
    <div>
      <Header />
      
      {API_DATA.map((data) => (
          <Note key={data.id} myData={data} />
        ))}
     
       
     
       
      <Footer />
      
    </div>
  )
}

export default App
