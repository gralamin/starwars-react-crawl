import { useLoaderData } from "react-router-dom";
import CrawlEntry from "../CrawlEntry";

function Entry() {
  const { entry } = useLoaderData();

  return <CrawlEntry crawlData={entry} />;
}

export default Entry;
