// src/components/Feedback.jsx
import React from "react";
import gojo from "../assets/image/download.png"
const feedbacks = [
  {
    username: "NANAMI_SAN",
    time: "3 minutes ago",
    comment: "The blind guy Shion was the best",
    show: "Hell's Paradise",
  },
  {
    username: "Aishu",
    time: "3 minutes ago",
    comment: "Love it",
    show: "One Piece",
  },
  {
    username: "Ezcald",
    time: "3 minutes ago",
    comment:
      "Got myself some more Pokemon to watch! Today’s gonna be a good day!",
    show: "Pokémon Horizons: The Series",
  },
  {
    username: "CRÍMSØN RÝZÆ...",
    time: "4 minutes ago",
    comment: "Nice one",
    show: "Mom, I'm Sorry",
  },
  {
    username: "NANAMI_SAN",
    time: "3 minutes ago",
    comment: "The blind guy Shion was the best",
    show: "Hell's Paradise",
  },
  {
    username: "Aishu",
    time: "3 minutes ago",
    comment: "skip recap 4:28",
    show: "One Piece",
  },
  {
    username: "Ezcald",
    time: "3 minutes ago",
    comment:
      "Got myself some more Pokemon to watch! Today’s gonna be a good day!",
    show: "Pokémon Horizons: The Series",
  },
  {
    username: "CRÍMSØN RÝZÆ...",
    time: "4 minutes ago",
    comment: "Here",
    show: "Mom, I'm Sorry",
  },
  {
    username: "NANAMI_SAN",
    time: "3 minutes ago",
    comment: "The blind guy Shion was the best",
    show: "Hell's Paradise",
  },
  {
    username: "Aishu",
    time: "3 minutes ago",
    comment: "skip recap 4:28",
    show: "One Piece",
  },
  {
    username: "Ezcald",
    time: "3 minutes ago",
    comment:
      "Got myself some more Pokemon to watch! Today’s gonna be a good day!",
    show: "Pokémon Horizons: The Series",
  },
  {
    username: "CRÍMSØN RÝZÆ...",
    time: "4 minutes ago",
    comment: "Here",
    show: "Mom, I'm Sorry",
  },
  {
    username: "NANAMI_SAN",
    time: "3 minutes ago",
    comment: "The blind guy Shion was the best",
    show: "Hell's Paradise",
  },
  {
    username: "Aishu",
    time: "3 minutes ago",
    comment: "skip recap 4:28",
    show: "One Piece",
  },
  {
    username: "Ezcald",
    time: "3 minutes ago",
    comment:
      "Got myself some more Pokemon to watch! Today’s gonna be a good day!",
    show: "Pokémon Horizons: The Series",
  },
  {
    username: "CRÍMSØN RÝZÆ...",
    time: "4 minutes ago",
    comment: "Here",
    show: "Mom, I'm Sorry",
  },
  {
    username: "NANAMI_SAN",
    time: "3 minutes ago",
    comment: "The blind guy Shion was the best",
    show: "Hell's Paradise",
  },
  {
    username: "Aishu",
    time: "3 minutes ago",
    comment: "skip recap 4:28",
    show: "One Piece",
  },
  {
    username: "Ezcald",
    time: "3 minutes ago",
    comment:
      "Got myself some more Pokemon to watch! Today’s gonna be a good day!",
    show: "Pokémon Horizons: The Series",
  },
  {
    username: "CRÍMSØN RÝZÆ...",
    time: "4 minutes ago",
    comment: "Here",
    show: "Mom, I'm Sorry",
  },
  // Add more feedbacks here
];

const Feedback = () => {
    return (
        <div className="mt-[20px] shadow w-full max-h-[370px]">
            <div className="text-5xl font text-white font-bold flex items-center justify-center">
            <div>
                <img src={gojo} className="ml-[20px] w-[100px] object-cover h-[100px] mx-auto mt-[20px] lg:hidden" alt="" />
            </div >Our Feedback!
            </div>
            
            <div className="mt-[20px] py-4 flex flex-col items-center w-full overflow-hidden relative max-h-[350px] px-5 mx-auto">
                <div className="w-full flex p-3 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
                <div className="hidden w-[20%] lg:flex flex-col items-start justify-center">
                            <img
                                src={gojo}
                                className="w-[80%] h-[100%] rounded  object-cover"
                                alt=""
                            />
                        </div>
                    <div className="flex overflow-x-scroll w-full space-x-4 scrollbar-hide">
                        
                        <div className="w-[80%] flex">
                            {feedbacks.map((feedback, index) => (
                                <div
                                    className="bg-gray-800 rounded-lg m-2 p-4 min-w-[200px] text-white flex-shrink-0"
                                    key={index}
                                >
                                    <div className="flex flex-col h-full justify-between">
                                        <div className="mb-2">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="font-bold">{feedback.username}</span>
                                                <span className="text-gray-400">{feedback.time}</span>
                                            </div>
                                            <div className="mb-2 max-w-[200px]">{feedback.comment}</div>
                                        </div>
                                        <div className="text-xs text-gray-400">{feedback.show}</div>
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

export default Feedback;
