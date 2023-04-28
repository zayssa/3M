import { useEffect, useState } from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import data from './data.json'
import { api } from './utils/api';



function App() {
  // start here

  const [cards, setCards] = useState(data);
  const [search, setSearch] = useState(null);



  const getList = async () => await api.getProductsList();

  const handleRequest = async (str) => {
    api.getListBySearch(str).then(data => setCards(data))
  }


  useEffect(() => {
    getList().then(data => setCards(data.products));
  }, [])

  useEffect(() => {
    if (search !== null) {
      handleRequest(search)
      // api.getListBySearch(search).then(data => setCards(data))
    }
  }, [search])

  return (
    <div>
      <Header setSearch={setSearch} />
      <main className='content container'>
        <CardList cards={cards} arr={[1, 2, 34, 5]} />

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
