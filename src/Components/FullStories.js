import React from "react";
import food2 from "../Images/food2.jpg";
import food3 from "../Images/food3.jpg";
import tech2 from "../Images/tech2.jpg";
import tech3 from "../Images/tech3.png";

export default function FullStories() {
  return (
    <div className="bg-gradient-to-t from-red-300 to-lime-200 bg-no-repeat bg-cover w-full h-full">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* First row */}
          <div className="flex flex-col">
            <img
              src={tech2}
              alt="story"
              className="rounded-md shadow-md shadow-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-x py-5">
              AI Insights: Navigating the Future of Technology
            </div>
            <div className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, mauris ut tincidunt vestibulum, ligula libero
              volutpat nisi, vitae gravida enim nisl id nisi. Duis malesuada
              erat eu risus hendrerit, sed sagittis lectus pulvinar. Proin et
              mauris et velit feugiat vestibulum.
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-col">
            <img
              src={food2}
              alt="story"
              className="rounded-md shadow-md shadow-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-x py-5">
              AI Insights: Navigating the Future of Technology
            </div>
            <div className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, mauris ut tincidunt vestibulum, ligula libero
              volutpat nisi, vitae gravida enim nisl id nisi. Duis malesuada
              erat eu risus hendrerit, sed sagittis lectus pulvinar. Proin et
              mauris et velit feugiat vestibulum.
            </div>
          </div>

          {/* Third row */}
          <div className="flex flex-col">
            <img
              src={tech3}
              alt="story"
              className="rounded-md shadow-md shadow-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-x py-5">
              AI Insights: Navigating the Future of Technology
            </div>
            <div className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, mauris ut tincidunt vestibulum, ligula libero
              volutpat nisi, vitae gravida enim nisl id nisi. Duis malesuada
              erat eu risus hendrerit, sed sagittis lectus pulvinar. Proin et
              mauris et velit feugiat vestibulum.
            </div>
          </div>

          {/* Fourth row */}
          <div className="flex flex-col">
            <img
              src={food3}
              alt="story"
              className="rounded-md shadow-md shadow-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-x py-5">
              AI Insights: Navigating the Future of Technology
            </div>
            <div className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, mauris ut tincidunt vestibulum, ligula libero
              volutpat nisi, vitae gravida enim nisl id nisi. Duis malesuada
              erat eu risus hendrerit, sed sagittis lectus pulvinar. Proin et
              mauris et velit feugiat vestibulum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
