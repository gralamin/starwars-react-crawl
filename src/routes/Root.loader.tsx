import _data from "../data.json";
import { DataJson } from "../CrawlData";
import { LoaderFunction } from "react-router-dom";

const data = _data as DataJson;

const loader: LoaderFunction = async () => {
  return { data };
};
export default loader;
