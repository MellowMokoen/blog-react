import { Link } from "react-router-dom";
import BlogData from "./BlogData";

const FullStories = () => {
  return (
    <div className="bg-my-image bg-no-repeat bg-cover overflow-hidden py-10 h-screen md:bg-cover">
      <div className="container mx-auto pb-14 bg-white rounded-md">
        <div className="flex">
          <div className="py-10 px-5">
            <ul className="nav justify-content-start">
              <button className="bg-rose-500 px-3 text-white rounded-lg">
                Log Out
              </button>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts/tech">Technology</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts/food">Food</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts/gym">Exercise</Link>
              </li>
            </ul>
            <div className="font-rubik">
              {BlogData.map((post) => (
                <div key={post.id} className="flex blog-post">
                  <div className="blog-post-content flex flex-col w-1/2">
                    <h2 className="text-3xl my-4">{post.title}</h2>
                    <p className="">{post.description}</p>
                    <Link to={"/"}>
                      <button className="btn my-4 bg-rose-400 text-white">
                        More Articles
                      </button>
                    </Link>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <img
                      src={post.image}
                      className="w-1/2 mx-auto block"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStories;
