import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LoaderFunction, RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import RootLoader from "./routes/Root.loader";
import Entry from "./routes/Entry";
import EntryLoader from "./routes/Entry.loader";
import RouteMap from "./routes/Routemap";

const router = createBrowserRouter([
  {
    // /crawl/2020/
    path: RouteMap.root,
    element: <Root />,
    loader: RootLoader as LoaderFunction,
  },
  {
    path: RouteMap.entry,
    element: <Entry />,
    loader: EntryLoader as LoaderFunction,
  },
], { basename: "/crawl/2020/"});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
