import { createContext } from "react";

export default createContext<{
  workers: Array<{
    name: string;
    worker: Worker;
  }>
}>({
  workers: []
});