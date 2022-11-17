import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import Chart from "../../components/chart/Chart";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
};

export default Home;
