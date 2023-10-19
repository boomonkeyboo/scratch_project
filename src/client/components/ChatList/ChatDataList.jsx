import React, { useContext } from "react";
import { SocketContext } from "../../Context";

export function ChatDataList({ categories }) {
  const { socket } = useContext(SocketContext);
  console.log("ChatDataList Categories");
  console.log(categories);

  const generateRoomList = (rooms) => {
    if (rooms) {
      return rooms.map((r, i) => <option value={r} key={i}></option>);
    }
    return <option value="lobby"></option>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomForm = document.getElementById("roomName");
    const selectedRoom = roomForm.value;
    console.log("Selected room ", selectedRoom);
    socket.emit("joinRoom", selectedRoom);
    roomForm.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="chatroom-choice">Choose or create a topic:</label>
        </div>
        <div>
          <input list="browsers" id="roomName" name="Room" />
          <input id="joinRoomButton" type="submit" value="Join"></input>
        </div>
      </form>
      <datalist id="browsers">{generateRoomList(categories)}</datalist>
    </div>
  );
}
