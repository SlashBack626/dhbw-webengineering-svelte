interface WikiSearchResultPage {
  description: string;
  descriptionsource: string;
  extract: string;
  index: number;
  ns: number;
  pageid: number;
  title: string;
}

interface WikiSearch {
  results: WikiSearchResultPage[];
}

interface MessageData {
  username: string;
  content: string;
  timestamp: Date;
  room: string;
}

interface RawMessage {
  Owner: string;
  Group: string;
  Time: string;
  Text: string;
}

interface UserMessage extends MessageData {
  me: boolean;
}
export type {
  WikiSearchResultPage,
  WikiSearch,
  MessageData,
  RawMessage,
  UserMessage,
};
