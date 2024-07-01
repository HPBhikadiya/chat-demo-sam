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
      <div className="max-w-xs relative">
        <div
          className={`p-2 rounded-lg  ${
            message.type === "sent"
              ? "bg-blue-500 text-white rounded-tr-none"
              : "bg-gray-100 text-gray-900 rounded-tl-none"
          } ml-4 text-sm p-2 rounded-lg inline-block w-[calc(100%-8px)]`}
        >
          <div className="flex pb-1.5 items-center">
            {message.type === "received" && (
              <span className="text-xs text-gray-500 font-bold">
                {message.name}
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
        {message.type === "sent" ? (
          <span
            aria-hidden="true"
            data-icon="tail-out"
            className={`absolute top-0 z-layer-1 block  h-13 ${
              message.type === "sent"
                ? "right-[-15px] "
                : "left-[10px] transform translate-[120deg]"
            }`}
          >
            <svg
              viewBox="0 0 8 13"
              height="13"
              width="8"
              preserveAspectRatio="xMidYMid meet"
              className=""
              version="1.1"
              x="0px"
              y="0px"
              color={"#3b82f6"}
              enable-background="new 0 0 8 13"
            >
              <title>tail-out</title>
              <path
                opacity="0.13"
                d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
              ></path>
              <path
                fill="currentColor"
                d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
              ></path>
            </svg>
          </span>
        ) : (
          <span
            aria-hidden="true"
            data-icon="tail-out"
            className={`absolute top-0 z-layer-1 block  h-13 ${
              message.type === "sent"
                ? "right-[-15px] "
                : "left-[10px] transform translate-[120deg]"
            }`}
          >
            <svg
              viewBox="0 0 8 13"
              height="13"
              width="8"
              preserveAspectRatio="xMidYMid meet"
              className=""
              version="1.1"
              color="#f3f4f6"
              x="0px"
              y="0px"
              enable-background="new 0 0 8 13"
            >
              <title>tail-in</title>
              <path
                opacity="0.13"
                fill="#0000000"
                d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
              ></path>
              <path
                fill="currentColor"
                d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
              ></path>
            </svg>
          </span>
        )}
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
