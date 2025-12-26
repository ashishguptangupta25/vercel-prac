import { use } from "react";
import { dummyAsync } from "../../(lib)/actions";

function LoadingComponent({ timeout }) {
  use(dummyAsync(timeout));
  return <div>Component loaded</div>;
}

export default LoadingComponent;
