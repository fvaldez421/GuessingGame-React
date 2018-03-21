
import React, { Component } from "react";
import GifCard from "./components/GifCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";
import gifs from "./components/characters.json";


let message = "";
let gameOver = false;
let lossCount = 0;
let winCount = 0;


class App extends Component {
  state = {
    gifs,
    winCount,
    lossCount,
    wins: 0,
    losses: 0,
    message
  };

  CheckState = id => {
// <<<<<<<<CHECKS GAME STATUS>>>>>>>>>
      if (gameOver) {
          for (let i = 0; i < gifs.length; i++) {
              gifs[i].selected = false;
          }; 
          message = "";
          gameOver = false;
          winCount = 0;
          lossCount = 0;
          this.setState({ message })
      };
// <<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>

// <<<<<<<<CHECKS GIF STATUS, IF SELECTED "TRUE", ADD TO LOSS COUNTER, IF FALSE, ADD TO WINCOUNTER>>>>>>>>>>
      for (let i = 0; i < gifs.length; i++) {
          if (gifs[i].id === id && gifs[i].selected) {
              lossCount++;
              this.setState({ lossCount });

          } else if (gifs[i].id === id && !gifs[i].selected) {
              winCount++;
              for (let i = 0; i < gifs.length; i++) {
                  if (gifs[i].id === id) {
                    gifs[i].selected = true;
                  };
              };
              this.setState({ gifs, winCount });
          };
      };
// <<<<<<<RANDOMIZES GIFS>>>>>>>
      gifs.sort(() => (0.5 - Math.random()));
// <<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>

// <<<<<<<<CHECKS FOR WIN AND LOSS COUNTERS, CHANGES GAME STATUS>>>>>>>>>
      if (winCount === gifs.length) {
          let wins = this.state.wins;
          wins++;
          message = "Winner Winner Chicken Dinner! Click an image to restart.";
          this.setState({ message, wins });
          gameOver = true;
      }else if (lossCount === 3) {
          let losses = this.state.losses;
          losses++;
          message = "LOOOSER, go home... Click an image to restart.";
          this.setState({ message, losses });
          gameOver = true;
      };
// <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>

  };

  render() {
    return (
      <Wrapper>
        <Title
        wins={this.state.wins}
        losses={this.state.losses}
        message={this.state.message}
        >
        Gif Game
        </Title>
        {this.state.gifs.map(gif => (
          <GifCard
            CheckState={this.CheckState}
            id={gif.id}
            key={gif.id}
            name={gif.name}
            image={gif.image}
            occupation={gif.occupation}
            location={gif.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
