import _data from "../data.json";
import { DataJson } from "../CrawlData";

const data = _data as DataJson;

export default async function loader() {
  return { data };
}
