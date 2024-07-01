import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { getRandomImageUrl } from "../imageData";

const messages = [
  {
    id: 1,
    name: "Jav",
    role: "Engineering",
    time: "7:35 AM",
    text: "I'm down! Any ideas??",
    type: "received",
    avatar: getRandomImageUrl(),
  },
  {
    id: 2,
    name: "You",
    role: "",
    time: "11:31 AM",
    text: "Hi team 👋",
    type: "sent",
  },
  {
    id: 3,
    name: "You",
    role: "",
    time: "11:31 AM",
    text: "Anyone on for lunch today",
    type: "sent",
  },
  {
    id: 4,
    name: "You",
    role: "",
    time: "11:36 AM",
    text: "I am down for whatever!",
    type: "sent",
  },
  {
    id: 5,
    name: "Aubrey",
    role: "Product",
    time: "11:45 AM",
    text: "I was thinking the cafe downtown",
    type: "received",
    avatar: getRandomImageUrl(),
  },
  {
    id: 6,
    name: "Aubrey",
    role: "Product",
    time: "11:46 AM",
    text: "But limited vegan options @Janet!",
    type: "received",
    avatar: getRandomImageUrl(),
  },
  {
    id: 7,
    name: "You",
    role: "",
    time: "11:52 PM",
    text: "Agreed",
    type: "sent",
  },
  {
    id: 8,
    name: "Janet",
    role: "Engineering",
    time: "12:03 PM",
    text: "That works- I was actually planning to get a smoothie anyways 👍",
    type: "received",
    avatar: getRandomImageUrl(),
  },
  {
    id: 9,
    name: "Janet",
    role: "Product",
    time: "12:04 PM",
    text: "On for 12:30 PM then ?",
    type: "received",
    avatar: getRandomImageUrl(),
  },
];

const ChatBody = () => {
  return (
    <div className="h-chatBodyHeight overflow-scroll overflow-x-hidden p-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center mb-4">
          <div className="text-sm text-gray-600">8/20/2020</div>
        </div>
      </div>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBody;

const ChatMessage = ({ message }: { message: any }) => {
  return (
    <div
      className={`flex ${
        message.type === "sent" ? "justify-end" : "justify-start"
      } mb-4`}
    >
      {message.type === "received" && (
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={message.avatar}
          alt={`${message.name} avatar`}
        />
      )}
      <div className="max-w-xs">
        <div
          className={`p-2 rounded-lg ${
            message.type === "sent"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-900"
          } ml-4 text-sm p-2 rounded-lg inline-block`}
          style={{
            // transformOrigin: "top left",
            // transform: "skew(-10deg)",
          }}
        >
          <div className="flex pb-1.5 items-center">
            {message.type === "received" && (
              <span className="text-xs text-gray-500 font-bold">
                {message.name}{" "}
                <span className="font-normal">{message.role}</span>
              </span>
            )}
          </div>
          <div className="flex justify-between">
            <span>{message.text}</span>
            <span
              className={`text-xs pt-5 pl-2 flex items-center ${
                message.type === "sent" ? "text-white" : "text-gray-500"
              }`}
            >
              {message.time}
              {message.type === "sent" && (
                <IoCheckmarkDoneSharp className="text-white text-xs ml-1" />
              )}
            </span>
          </div>
        </div>
      </div>
      {message.type === "sent" && (
        <img
          className="w-10 h-10 rounded-full ml-4"
          src={getRandomImageUrl({ number: 0 })}
          alt="Your avatar"
        />
      )}
    </div>
  );
};
