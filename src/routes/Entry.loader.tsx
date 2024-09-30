import _data from "../data.json";
import { DataJson } from "../CrawlData";

const data = _data as DataJson;

/*
interface LoaderParams {
  params: {
    id: string
  }
}*/

export default async function loader({ params }: any) {
  return { entry: data[params.id] };
}
