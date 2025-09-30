import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";

import classe from "./Games.module.css";

interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: string;
  description: string;
}

const gameURL = "https://api.rawg.io/api/games/";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

const Game = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getGame = async (url: string, cacheKey: string) => {
    setIsLoading(true);

    // 1️⃣ Tenta pegar do cache local
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      console.log("Carregado do cache!");
      setGame(JSON.parse(cached));
      setIsLoading(false);
      return;
    }

    // 2️⃣ Se não tiver no cache, faz fetch
    try {
      const res = await fetch(url);
      const data: Game = await res.json();
      setGame(data);

      // 3️⃣ Salva no cache
      localStorage.setItem(cacheKey, JSON.stringify(data));
      console.log("Carregado da API e salvo no cache!");
    } catch (error) {
      console.error("Erro ao buscar jogo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    const gameUrl = `${gameURL}${id}?key=${apiKey}`;
    const cacheKey = `game-${id}`; // chave única para cada jogo

    getGame(gameUrl, cacheKey);
  }, [id]);

  return (
    <main className={classe.container}>
      {isLoading && <Loading />}

      {game && (
        <>
          <div className={classe.game_container}>
            <img
              className={classe.img}
              src={game.background_image}
              alt={game.name}
            />
          </div>
          <h1>{game.name}</h1>
          <div
            className={classe.desc}
            dangerouslySetInnerHTML={{ __html: game.description }}
          />
        </>
      )}
    </main>
  );
};

export default Game;
