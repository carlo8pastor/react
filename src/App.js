import React from 'react';
import Movie from './components/Movie/Movie';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Scroll down to view popular movies</h1>
                <p>( made with React )</p>
            </header>
            <Movie />
        </div>
    );
}

export default App;
