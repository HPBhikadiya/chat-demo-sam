import { HiDotsHorizontal } from "react-icons/hi";
import { FaEllipsisH } from "react-icons/fa";
import { GiUnicorn } from "react-icons/gi";
import { getRandomImageUrl } from "../imageData";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b ">
      <div className="flex items-center w-full justify-between">
        <div className="flex -space-x-2">
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src={getRandomImageUrl()}
            alt="avatar 1"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src={getRandomImageUrl()}
            alt="avatar 2"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src={getRandomImageUrl()}
            alt="avatar 3"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src={getRandomImageUrl()}
            alt="avatar 4"
          />
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <GiUnicorn className="mr-2 text-purple-500" />
            <span className="font-bold text-gray-900">Team Unicorns</span>
          </div>
          <div className="text-gray-500 text-sm">last seen 45 minutes ago</div>
        </div>
        <FaEllipsisH className="text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
