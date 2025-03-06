import "./Chat.css";
import { useUser } from "@clerk/clerk-react";

const ChatComponent = () => {
  const { user } = useUser();

  return (
    <>
    <div className="chat">
      <div className="message">
        <div className="messagecontent">
          <div className="message-profile">
            {user && <img src={user.imageUrl} alt="Profile" className="profile-pic" />}
          </div>
          <div className="message-details">
            <h1>{user ? user.firstName : "Sender"}</h1> 
            <p>anandisdodjflkodjflkdsjlfksjldkjsdlkfnslkdfodjflkdsjlfksjldkjsdlkfnslkdfdsjlfksjldkjsdlkfnslkdfnskdjfhdiv</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className="chatinput">
      
    </div>
    </>
  );
};

export default ChatComponent;
