
import React, { Component } from "react";
import GifCard from "./components/GifCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import gifs from "./components/characters.json";
import "./App.css";


let message = "";

class App extends Component {
  state = {
    gifs,
    wins: 0,
    losses: 0,
    message
  };

  CheckState = id => {
  for (let i = 0; i < gifs.length; i++) {
    if (gifs[i].id === id && gifs[i].selected === true) {
      let addLoss = this.state.losses;

      addLoss++;
      this.setState({ losses: addLoss });
      console.log("Status checked, selected = " + gifs[i].selected );

    } else if (gifs[i].id === id && gifs[i].selected === false) {
      let UpdatedGifs = this.state.gifs;

      for (let i = 0; i < gifs.length; i++) {
        if (gifs[i].id === id) {
          gifs[i].selected = true;
        };
      };

      this.setState({ gifs: UpdatedGifs });
      console.log(this.state.gifs[i].id);

    };
  };
  if (this.state.wins === gifs.length - 1) {
    let addWin = this.state.wins;
    addWin++;
    message = "Winner Winner Chicken Dinner!";

    this.setState({ message, wins: addWin });
  }else if (this.state.losses === 3) {
    message = "LOOOSER, go home...";
    this.setState({ message, wins: 0, losses: 0 })
  };
  gifs.sort(() => (0.5 - Math.random()));
};

  render() {
    return (
      <Wrapper>
        <Title
        wins={this.state.wins}
        losses={this.state.losses}
        message={this.state.message}
        >
        Guessing Game
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
