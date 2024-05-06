import { useEffect, useState } from "react";
import fs from "node:fs/promises";
import WorkerContext from "@/contexts/worker";

export const readWorkers = async () => {
  const workerFiles = await fs.readdir(new URL("../workers", import.meta.url));

  return workerFiles;
};

type Props = {
  children: React.ReactNode;
};

export default function ({ children }: Props) {
  const [workers, setWorkers] = useState<
    Array<{
      name: string;
      worker: Worker;
    }>
  >([]);

  useEffect(() => {
    if (window !== undefined) {
      const worker = new Worker(
        new URL("../workers/task.worker.ts", import.meta.url)
      );

      setWorkers([
        ...workers,
        {
          name: "task",
          worker,
        },
      ]);
    }
  }, []);

  return (
    <WorkerContext.Provider value={{ workers }}>
      {children}
    </WorkerContext.Provider>
  );
}
