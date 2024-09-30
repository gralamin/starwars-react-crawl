import "./root.css";
import { NavLink, useLoaderData } from "react-router-dom";

function Root() {
  const { data } = useLoaderData();
  const sortedKeys = Object.keys(data).sort((entryA, entryB) => {
    const keyA = data[entryA].displayText || entryA;
    const keyB = data[entryB].displayText || entryB;
    return keyA.localeCompare(keyB);
  });

  return (
    <>
      <div className="card">
        <div className="card-inner">
          <h1>Crawls</h1>
          <ul>
            {sortedKeys.map((entry) => {
              return (
                <li key={entry}>
                  <NavLink to={`/${entry}`}>{data[entry].displayText || entry}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Root;
