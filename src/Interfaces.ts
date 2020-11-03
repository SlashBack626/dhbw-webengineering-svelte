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
  me: boolean;
  content: string;
}
export type { WikiSearchResultPage, WikiSearch, MessageData };
