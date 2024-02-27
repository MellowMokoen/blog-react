import Blog from "./Components/Blog";

function App() {
  return (
    <div>
      <div className="bg-my-image bg-no-repeat bg-cover w-full h-full">
        <div className="md:container md:mx-auto">
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default App;
