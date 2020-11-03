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
export type { WikiSearchResultPage, WikiSearch };
