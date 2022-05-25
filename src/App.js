import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import CardSection from './components/CardsSection';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App bg-gray-200 font-sans flex flex-col items-center">
      <Header/>
      <main>
        <Paragraph/>
        <CardSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
