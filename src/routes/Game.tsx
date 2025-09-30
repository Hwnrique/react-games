import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo, SiIos } from "react-icons/si";
import { PiStarFill } from "react-icons/pi";

import Loading from "../components/Loading";

import classe from "./Games.module.css";

interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: string;
  description: string;
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}

const platformIcons: Record<string, React.ReactNode> = {
  pc: <FaWindows />,
  playstation5: <FaPlaystation />,
  playstation4: <FaPlaystation />,
  "xbox-one": <FaXbox />,
  "xbox-series-x": <FaXbox />,
  "nintendo-switch": <SiNintendo />,
  ios: <SiIos />,
  macos: <FaApple />,
  linux: <FaLinux />,
  android: <FaAndroid />,
};

const gameURL = "https://api.rawg.io/api/games/";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

const Game = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getGame = async (url: string, cacheKey: string) => {
    setIsLoading(true);

    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      console.log("Carregado do cache!");
      setGame(JSON.parse(cached));
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(url);
      const data: Game = await res.json();
      setGame(data);

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
    const cacheKey = `game-${id}`;

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
          <div className={classe.main}>
            <div
              className={classe.desc}
              dangerouslySetInnerHTML={{ __html: game.description }}
            />
            <div className={classe.infos}>
              <h2>Available on platforms:</h2>
              <div className={classe.platformIcons}>
                {game.platforms?.map((item) => {
                  const slug = item.platform.slug;
                  const icon = platformIcons[slug];
                  return icon ? (
                    <span key={item.platform.id} className={classe.icon}>
                      {icon}
                    </span>
                  ) : null;
                })}
                <h3>Rating:</h3>
                <p className={classe.rating}>
                    <span className={classe.star}>
                      <PiStarFill />
                    </span>{" "}
                    {game.rating}
                  </p>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Game;
