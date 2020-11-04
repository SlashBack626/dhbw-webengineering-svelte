interface MessageData {
  username: string;
  content: string;
  timestamp: Date;
  room: string;
}

interface GetAllResponse {
  Status: string;
  Data: Message[];
}

interface Message {
  Owner: string;
  Group: string;
  Time: string;
  Text: string;
}

export { MessageData, Message, GetAllResponse };
