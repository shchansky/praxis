import React from "react";
import { FetchAbortController } from "./abort-controller";
import { RecursiveRequest } from "./recursive-request";

export const Api = () => {
  const [state, setstate] = React.useState<any>(null);

  React.useEffect(() => {
    const res = fetch("http://localhost:3001/users").then((res) =>
      res.json().then((res) => setstate(res))
    );
  }, []);

  console.log(state);

  return (
    <>
      <FetchAbortController />
      <hr />
      <RecursiveRequest />
      <hr />
    </>
  );
};
