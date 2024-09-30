export interface CrawlData {
  episodeNumberText: string;
  episodeTitle: string;
  text: string;
  displayText?: string;
}

export type DataJson = { [id: string]: CrawlData };
