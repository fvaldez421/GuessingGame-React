
import React, { Component } from "react";
import GifCard from "./components/GifCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";
import gifs from "./components/characters.json";
// import logo from './logo.svg';


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

      let addWin = this.state.wins;
      let UpdatedGifs = this.state.gifs;

      addWin++;
      for (let i = 0; i < gifs.length; i++) {
        if (gifs[i].id === id) {
          gifs[i].selected = true;
        };
      };

      this.setState({ gifs: UpdatedGifs, wins: addWin });
      console.log(this.state.gifs[i].id);

    };
  };
  if (this.state.wins === gifs.length - 1) {
    message = "Winner Winner Chicken Dinner!";
    this.setState({ message });
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


  // {
  //   "id": 4,
  //   "selected": false,
  //   "name": "Michael",
  //   "image": "data:image/jpeg;base64,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"
  // },
  // {
  //   "id": 5,
  //   "selected": false,
  //   "name": "Kevin",
  //   "image": "data:image/jpeg;base64,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"
  // },
  // {
  //   "id": 6,
  //   "selected": false,
  //   "name": "Toby",
  //   "image": "data:image/jpeg;base64,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"
  // },
  // {
  //   "id": 7,
  //   "selected": false,
  //   "name": "Andy",
  //   "image": "data:image/jpeg;base64,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"
  // },
  // {
  //   "id": 8,
  //   "selected": false,
  //   "name": "Angela",
  //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAXHMGnIGtmA-F7uVhYC5zEAmMWIx9cCF1RKUs5lqxHvvZR70FRqDf5dAAb1TMC5z93M"
  // },
  // {
  //   "id": 9,
  //   "selected": false,
  //   "name": "Ryan",
  //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LBQQK0VXcNLFgreylRDWFB81o4A03sZzTpa61VWb95iVtmFyVEuVcW8c61Vh0ymcAYg"
  // },
  // {
  //   "id": 10,
  //   "selected": false,
  //   "name": "Stanley",
  //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgoq14ZGy2MIwY2PDJUPTQ20CW6zqMA_8vPDO3e9iJoa-55oDxlLD7Eo_2ez0X5a6whE"
  // },
  // {
  //   "id": 11,
  //   "selected": false,
  //   "name": "Meredith",
  //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeduCWUAmwr8Uf7WcEGx0deNFvvpXixQizgd6Jkd7sS4F_mjemtjzKA4qlE13hAqo2SD8"
  // },
  // {
  //   "id": 12,
  //   "selected": false,
  //   "name": "Phyllis",
  //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbQVP79BDT2nAdXuJgipnpT8KrtnXyHQzvZ3nS094IMK_sTidONiDv7sNhUf86bJwsuU"
  // },
  // {
  //   "id": 13,
  //   "selected": false,
  //   "name": "Oscar",
  //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lc4nOo-1QG3FWtvFLDI60NOYGy7CqUCCUMlhP4j7IsEw8k-I9EUbXzrXveNhz5d28YU"
  // },
  // {
  //   "id": 14,
  //   "selected": false,
  //   "name": "Kelly",
  //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwmOuuq45OCtpsqv7AL7Ciugsqx0NxEtuHdpUKRbiDWlhTHSI4_k"
  // }