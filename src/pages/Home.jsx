import { Link } from "react-router";
import homeImg from "../assets/home.jpg";
import Button from "../components/Button";

function Home() {
  return (
    <section
      className="overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="min-h-[calc(100vh-72px)] flex flex-col justify-center gap-10 pl-16">
        <div className="flex flex-col gap-4">
          <h1 className="heading-1 text-inputs">Campers of your dreams</h1>
          <p className="heading-2 text-inputs">
            You can find everything you want in our catalog
          </p>
        </div>
        <Button as={Link} to="/catalog" variant="primary" size="lg">
          View Now
        </Button>
      </div>
    </section>
  );
}

export default Home;
