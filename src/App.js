import Blog from "./Components/Blog";
import image from "./Images/my-image.jpg";

function App() {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange to-green">
        <img
          src={image}
          alt="background-image"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="md:container md:mx-auto">
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default App;
