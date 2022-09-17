import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar';

const people = [
  {
    id: 'people-01', 
    title: 'Tom Brady',
  },
  {
    id: 'people-02', 
    title: 'Leonel Messi',
  },
  {
    id: 'people-03', 
    title: 'Carlos Delgado',
  },
  {
    id: 'people-04', 
    title: 'Cristiano Ronaldo',
  },
];

const calendar = [
  {
    id: 'calendar-01',
    title: 'Sesion de trabajo',
  },
  {
    id: 'calendar-02',
    title: 'Revision de propuestas',
  },
  {
    id: 'calendar-03',
    title: 'Evento para donacion de juguetes',
  },
  {
    id: 'calendar-04',
    title: 'Reunion semanal de trabajo',
  },
  {
    id: 'calendar-05',
    title: 'Revision de Pendings',
  },
];

const emails = [
  {
    id: 'email-01',
    title: 'Reporte de resultados',
  },
  {
    id: 'email-02',
    title: 'Requisitos para cambio',
  },
  {
    id: 'email-03',
    title: 'Estatus de funcionalidad',
  },
  {
    id: 'email-04',
    title: 'Proximos eventos',
  },
  {
    id: 'email-05',
    title: 'Participa en la encuesta',
  },
];


function App() {

  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null);

  const [currentOption, setCurrentOption] = useState('all');

  function handleClick (e){
    const op = e.target.name;

    switch (op) {
      case 'all':
        setData([...people, ...calendar, ...emails]);
        setCurrentOption('all');
        break;
      case 'people':
        setData([...people]);
        setCurrentOption('people');
        break;
      case 'calendar':
        setData([...calendar]);
        setCurrentOption('calendar');
        break;
      case 'emails':
        setData([...emails]);
        setCurrentOption('emails');
        break;

      default:
        break;
    }
  }

  function handleOnSelectedItem (item) {
    setSelection(item);
  }

  return (
    <div className='search-component'>
      <h1>Search Filter on React</h1>
      <button className='button' onClick={handleClick} name='all' >All</button>
      <button className='button' onClick={handleClick} name='people' >People</button>
      <button className='button' onClick={handleClick} name='calendar' >Calendar</button>
      <button className='button' onClick={handleClick} name='emails' >Emails</button>

      {selection ? <div>You selected: {selection.title}</div> : ""}
      <SearchBar items={data} onItemSelected={ handleOnSelectedItem } />
    </div>
  );
}

export default App
