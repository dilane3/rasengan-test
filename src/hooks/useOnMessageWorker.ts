import { useEffect } from "react";

export default function useOnmessageWorker(
  worker: Worker | undefined,
  handler: (w: Worker) => void
) {
  useEffect(() => {
    if (!worker) return;

    handler(worker);
  }, [worker]);
}
