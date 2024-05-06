import { useContext } from "react";
import WorkerContext from '@/contexts/worker';

export default function useWorker(workerName: string) {
  const { workers } = useContext(WorkerContext);

  return workers.find((worker) => worker.name === workerName)?.worker;
}