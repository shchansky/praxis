import { FetchAbortController } from "./abort-controller";
import { RecursiveRequest } from "./recursive-request";

export const Api = () => (
  <>
    <FetchAbortController />
    <hr />
    <RecursiveRequest />
    <hr />
  </>
);
