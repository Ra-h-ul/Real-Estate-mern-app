import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Your Key to Finding the Perfect Home</h1>
          <p>
            Discover your dream home with UrbanNest,
            the ultimate tool for effortless real estate exploration. 
            Whether you're buying, renting, or just browsing, 
            our user-friendly platform connects you with the perfect property in no time.
            With advanced search filters, real-time updates, and personalized recommendations, 
            UrbanNest makes finding your next home simple, fast, and stress-free. 
            Explore neighborhoods, compare properties, and connect with trusted agents—all in one place.
            Start your journey to a new home today with UrbanNest,
            where every search brings you closer to your ideal space.
          </p>
          <SearchBar />
        </div>
      </div>
      <div className="imgContainer">
        <img 
          src="https://plus.unsplash.com/premium_photo-1678903964473-1271ecfb0288?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Background" 
        />
      </div>
    </div>
  );
}

export default HomePage;
