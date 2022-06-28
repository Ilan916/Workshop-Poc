// creation router pour l'affichage de la crypto avec le graphique pour analyse


import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import Home from "./pages/Home"
import "./App.css";


const App = () => {
  return (
    <div className="container">
        <BrowserRouter>
        <Route exact path="/" component={Home} />
          <Route exact path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
    </div>
  );
};

export default App;
