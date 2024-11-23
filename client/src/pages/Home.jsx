import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Library | Home</title>
      </Helmet>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
