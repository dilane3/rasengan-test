import "@styles/index.css";
import "@rasenganjs/image/lib/styles/index.css";
import { type AppProps } from "rasengan";
import AppRouter from "@app/app.router";
import WorkerProvider from "./providers/WorkerProvider";

export default function App({ Component, children }: AppProps) {
  return (
    <WorkerProvider>
      <Component router={AppRouter}>{children}</Component>
    </WorkerProvider>
  );
}
