import Hero from "../components/Home/Hero";
import Upcoming from "../components/Home/Upcoming";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="text-white">
      <Nav />
      <Hero />
      <Upcoming />
    </div>
  );
};

export default Home;
