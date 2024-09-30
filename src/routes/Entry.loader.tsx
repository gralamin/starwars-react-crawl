import _data from "../data.json";
import { DataJson } from "../CrawlData";
import { ActionFunctionArgs, Params, ParamParseKey, LoaderFunction } from "react-router-dom";

const data = _data as DataJson;

const PathNames = {
  entry: "/:id",
} as const;

interface LoaderParams extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.entry>>;
}

const loader: LoaderFunction = async ({ params }: LoaderParams) => {
  return { entry: data[params.id ?? ""] };
};

export default loader;
