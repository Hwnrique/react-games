import classe from "./Home.module.css";
import { PiStarFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Search from "../components/Search";
import Loading from "../components/Loading";

interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: string;
}

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchGames = async (query?: string) => {
    setIsLoading(true);
    try {
      const url = query
        ? `https://api.rawg.io/api/games?search=${query}&key=${
            import.meta.env.VITE_RAWG_API_KEY
          }&page_size=35`
        : `https://api.rawg.io/api/games?key=${
            import.meta.env.VITE_RAWG_API_KEY
          }&page_size=35`;

      const res = await fetch(url);
      const data = await res.json();
      setGames(data.results);

      localStorage.setItem("games", JSON.stringify(data.results));
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGames(); // Busca inicial sem filtro
  }, []);

  const handleSearch = (query: string) => {
    fetchGames(query);
  };

  return (
    <div className={classe.container}>
      <h1>Discover our catalog</h1>
      <Search onSearch={handleSearch} />

      <main className={classe.main_container}>
        {isLoading && <Loading />}
        {games.map((game) => (
          <div className={classe.game_container} key={game.id}>
            <Link to={`/game/${game.id}`}>
              <div className={classe.flip}>
                <div className={classe.front}>
                  <img src={game.background_image} alt={game.name} />
                </div>
                <div className={classe.back}>
                  <p>{game.name}</p>
                  <p>{game.released}</p>
                  <p>
                    <span>
                      <PiStarFill />
                    </span>{" "}
                    {game.rating}
                  </p>
                  <img src={game.background_image} alt="" />
                </div>
              </div>
            </Link>
            <p className={classe.resp_name}>{game.name}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
