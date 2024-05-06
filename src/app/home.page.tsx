import { PageComponent } from "rasengan";
import { useState } from "react";
import useWorker from "@/hooks/useWorker";
import useOnmessageWorker from "@/hooks/useOnMessageWorker";

const Home: PageComponent = () => {
  const [count, setCount] = useState(0);

  // Getting worker from its name
  let worker = useWorker("task");

  // Handle incoming message from worker
  useOnmessageWorker(worker, (w) => {
    w.onmessage = (event: any) => {
      setCount(event.data);
    }
  })

  // Start heavy task
  const handleHeavyTask = () => {
    worker?.postMessage("start");
  }

  return (
    <section className="main">
      <p>Count: {count}</p>

      <input />

      <button onClick={handleHeavyTask}>Heavy task</button>
    </section>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Rasengan",
  description: "Rasengan is a modern web framework for building web applications with React."
};

export default Home;

