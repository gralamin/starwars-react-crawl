import { useLoaderData } from "react-router-dom";
import CrawlEntry from "../CrawlEntry";
import { CrawlData } from "../CrawlData";

function Entry() {
  const data = useLoaderData() as {
    entry: CrawlData;
  };
  const { entry } = data;

  return <CrawlEntry crawlData={entry} />;
}

export default Entry;
