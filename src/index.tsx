import { useState } from "react";

export const useAbortController = () => useState(abortController())[0];

function abortController() {
  const abortController = { current: new AbortController() };

  function abort(reason?: string) {
    abortController["current"].abort(reason);
    abortController["current"] = new AbortController();
  }

  return {
    get abort() {
      return abort;
    },
    get controller() {
      return abortController["current"];
    },
    get signal() {
      return abortController["current"].signal;
    },
  };
}
