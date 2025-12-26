import React, { Suspense } from "react";
import LoadingComponent from "./LoadingComponent";

function Streaming() {
  return (
    <div>
      <Suspense fallback={"Component 1 loading... "}>
        <LoadingComponent timeout={1000} />
      </Suspense>
      <Suspense fallback={"Component 2 loading... "}>
        <LoadingComponent timeout={4000} />
      </Suspense>
      <Suspense fallback={"Component 3 loading... "}>
        <LoadingComponent timeout={6000} />
      </Suspense>
    </div>
  );
}

export default Streaming;
