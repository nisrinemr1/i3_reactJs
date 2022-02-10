//Dans le dossier dans lequel je souhaite ouvrir une app react il faut que j'ouvre le terminal et y écrire "npm init react-app" puis dedans je trouverais le pseudo server.js qui devriendra App.js. Il faut savoir que l'App.js est une convention et qu'il est important de le mettre! 
import './App.css'; //pour importer le style.css afin qu'il puisse l'afficher. 
//a ce stage là, il faut faire en sorte que la page soit découper en plusieurs parties qu'on trouvera dans le component. Il faudra y mettre chaque partie de la page dedans. 
import Welcome from './components/welcome/welcome';
import BooksPresentation from './components/books/books';
import Presentation from './components/presentations/presentation';

function App() {
    return(
        <div>
            <Welcome welcome ="안녕하세요!" />
            <Welcome library ="서울도서관" />

            <Presentation nom="김치" />

            <BooksPresentation />
        </div>
    )
}

export default App;