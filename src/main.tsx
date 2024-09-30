import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import RootLoader from "./routes/Root.loader";
import Entry from "./routes/Entry";
import EntryLoader from "./routes/Entry.loader";

const router = createBrowserRouter([
  {
    // /crawl/2020/
    path: "/",
    element: <Root />,
    loader: RootLoader,
  },
  {
    path: "/:id",
    element: <Entry />,
    loader: EntryLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
