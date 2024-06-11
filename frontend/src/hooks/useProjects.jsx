import WEATHERAPPIMAGE from "../assets/icons/weatherapp-image.jpg";
import MEMORYCARDIMAGE from "../assets/icons/react-memory-card.jpg";
import BATTLESHIP from "../assets/icons/battleship.jpg";
import CALCULATOR from "../assets/icons/calculator.jpg";
import KNIGHTTRAVAILS from "../assets/icons/knight.jpg";
import GAMESTORE from "../assets/icons/gamestore.jpg";
import TICTACTOE from "../assets/icons/tictactoe.jpg";

const useProjects = () => {
  const weatherAPP = {
    title: "Weather App",
    image: WEATHERAPPIMAGE,
    github: "https://github.com/shillman11/WeatherApp",
    liveSite: "https://shillman11.github.io/WeatherApp/",
    description:
      "This weather app shows you the current weather data as well as the 3 day forecast or hourly forecast with the ability tosearch for the weather in any city or area.",
    indent: "Built using weather API",
  };

  const memoryCardAPP = {
    title: "Memory Card Game",
    image: MEMORYCARDIMAGE,
    github: "https://github.com/shillman11/React-Memory-Card",
    liveSite: "https://shillman11.github.io/React-Memory-Card/",
    description:
      "This app is a memory card game in which you try and remember what pokemon you have already caught and try to get the highest score.",
    indent: "Built using Vite/React",
  };

  const battleship = {
    title: "Battleship",
    image: BATTLESHIP,
    github: "https://github.com/shillman11/Battleship",
    liveSite: "https://shillman11.github.io/Battleship/",
    description:
      "Created a Battleship game in which the player can place different sized ships on a board and play against a computer.",
    indent: "Tested with Jest",
  };

  const calculator = {
    title: "Calculator App",
    image: CALCULATOR,
    github: "https://github.com/shillman11/Calculator",
    liveSite: "https://shillman11.github.io/Calculator/",
    description:
      "Created a calculator app which was the starting point of my web development journey.",
    indent: "My first JS Project",
  };

  const knightApp = {
    title: "Knight Travails",
    image: KNIGHTTRAVAILS,
    github: "https://github.com/shillman11/Knights-Travails",
    liveSite: "https://shillman11.github.io/Knights-Travails/",
    description:
      "This app has the user place a knight and an end point on a chessboard and shows the shortest amount of moves to get the knight to the endpoint.",
    indent: "Uses Dijkstra's Algorithm",
  };

  const gameStore = {
    title: "Game Store",
    image: GAMESTORE,
    github: "https://github.com/shillman11/game-store",
    liveSite: "https://shillman11.github.io/game-store/",
    description:
      "This app is a mock marketplace for games which icludes a shopping cart, games with prices and the ability to search for games.",
    indent: "Uses React/Vite",
  };

  const ticTacToe = {
    title: "Tic Tac Toe",
    image: TICTACTOE,
    github: "https://github.com/shillman11/Tick-Tack-Toe",
    liveSite: "https://shillman11.github.io/Tick-Tack-Toe/",
    description:
      "This is a tic tac toe game that a user can play against a bot.",
    indent: "Using MinMax Algorithm",
  };

  return {
    weatherAPP,
    memoryCardAPP,
    battleship,
    calculator,
    knightApp,
    gameStore,
    ticTacToe,
  };
};

export default useProjects;
