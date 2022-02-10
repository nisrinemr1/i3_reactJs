import './App.css';
import Person from './components/personne/person'
import FruitList from './components/fruit-list/fruit-list'
import SchoolMemberList from './components/school-member-list/school-member-list';

function App() {

  const people = [
    { id: 1, firstname: 'Balthazar', lastname: 'Picsou', status: 'Prof' },
    { id: 2, firstname: 'Riri', lastname: 'Duck', status: 'Eleve' },
    { id: 3, firstname: 'Donald', lastname: 'Duck', status: 'Prof' },
    { id: 4, firstname: 'Lili', lastname: 'Duck', status: 'Eleve' },
    { id: 5, firstname: 'Zaza', lastname: 'Vanderquack', status: 'Eleve' },
    { id: 6, firstname: 'Gontran', lastname: 'Bonheur', status: 'Prof' },
    { id: 7, firstname: 'Fifi', lastname: 'Duck', status: 'Eleve' }
  ];
  return (
    <div className="App">
      <div>
        <h2>Demooooo </h2>
        <Person firstname='Zaza' lastname='Vanderquack' gender='F' />
        <hr />
        <FruitList />
        <hr />
        <SchoolMemberList members = {people} />
      </div>
    </div>
  );
}

export default App;
