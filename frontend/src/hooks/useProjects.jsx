import WEATHERAPPIMAGE from "../assets/icons/weatherapp-image.jpg";

const useProjects = () => {
  const weatherAPP = {
    title: "Weather App",
    image: WEATHERAPPIMAGE,
    github: "https://github.com/shillman11/WeatherApp",
    liveSite: "https://shillman11.github.io/WeatherApp/",
    description:
      "This weather app shows you the current weather data as well asthe 3 day forecast or hourly forecast with the ability tosearch for the weather in any city or area.",
    indent: "Built using weather API",
  };

  return { weatherAPP };
};

export default useProjects;
