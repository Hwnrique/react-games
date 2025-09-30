import classe from "./About.module.css";

const About = () => {
  return (
    <div className={classe.container}>
      <h2 className={classe.title}>Who we are?</h2>
      <p>
        We are <span>React Games Ltda.</span>, a company born from a passion for
        technology and the ever-evolving world of video games. Our focus is on
        delivering digital games to players who value convenience, speed, and
        security in their purchases. From blockbuster releases to indie gems, we
        offer a wide range of titles in digital format, making it easier for
        gamers to explore, download, and enjoy their favorite games without the
        limitations of physical media. Our mission is simple: to connect people
        with the games they love, while providing a seamless shopping experience
        that reflects the best of modern digital entertainment.
      </p>
      <p>
        At React Games Ltda., we believe gaming is more than just a pastime —
        it’s a form of culture, creativity, and connection. That’s why we work
        to bring the latest industry trends, trusted partnerships, and a
        user-friendly platform to our customers. Whether you are a casual player
        or a dedicated enthusiast, we strive to be your go-to destination for
        digital games.
      </p>
      <p>
        We are not just a store; we are part of the gaming community. Our team
        is composed of professionals who are also gamers at heart, and we
        channel that enthusiasm into every product and service we provide. By
        combining innovation, reliability, and a genuine love for games, React
        Games Ltda. aims to be more than a company — we aim to be a bridge
        between developers and players, fueling the joy of interactive
        entertainment.
      </p>
    </div>
  );
};

export default About;
