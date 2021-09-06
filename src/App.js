import React, {useState} from "react";
//Routing
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//Styles
import { GlobalStyle } from './GlobalStyle';


const App = () => {

    const [fetchingMovies, setFetchingMovies] = useState(true);

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home fetchingMovies={fetchingMovies} setFetchingMovies={setFetchingMovies} />} />
                <Route path='/:movieId' element={<Movie fetchingMovies={fetchingMovies} />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <GlobalStyle />
        </Router>
    );
}

export default App;
