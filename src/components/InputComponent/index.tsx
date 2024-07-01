import { FaAt, FaPaperPlane } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { VscSend } from "react-icons/vsc";

const InputComponent = () => {
  return (
    <div className="flex items-center border-t-2  p-2">
      <CiFaceSmile className="text-gray-500 mx-2" />
      <input
        type="text"
        placeholder="Start typing..."
        className="flex-grow border-none focus:outline-none"
      />
      <div className="flex items-center">
        <FaAt className="text-gray-500 mx-2" />
        <VscSend className="text-gray-500 mx-2" />
      </div>
    </div>
  );
};

export default InputComponent;
