import React from 'react';
import Header from './components/structure/header/Header';
import Experience from "./components/structure/experience/Experience";
import Skills from "./components/structure/skills/Skills";
import Footer from './components/structure/footer/Footer';
import './App.css';
import './bulma-timeline.min.css';

function App() {
    return (
        <div className="App has-background-warning-light">
            <Header></Header>
            <Experience></Experience>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
}

export default App;
