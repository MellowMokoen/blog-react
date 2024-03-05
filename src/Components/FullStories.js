import { useParams, Link } from "react-router-dom";
import BlogData from "./BlogData";

const FullStories = () => {
  const { id } = useParams();

  // Find the post with the matching id
  const post = BlogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-my-image bg-no-repeat bg-cover py-10 md:bg-cover">
      <div className="container mx-auto pb-14 bg-white rounded-md">
        <div className="flex">
          <div className="py-10 px-5">
            <ul className="nav justify-content-start">
              <button className="bg-rose-500 px-3 text-white rounded-lg">
                Log In
              </button>
              <li className="nav-item">
                <Link to="/">Travel</Link>
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
              <div className="flex blog-post">
                <div className="blog-post-content pt-16 flex flex-col w-1/2">
                  <h2 className="text-3xl my-4">{post.title}</h2>
                  <p className="leading-loose">{post.description}</p>
                </div>
                <div className="flex flex-col w-1/2">
                  <img
                    src={post.image}
                    className="w-1/2 mx-auto block pt-16"
                    alt=""
                  />
                  <p className="text-sm py-4 text-center">{post.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStories;
