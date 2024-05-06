import React from "react";
import { Outlet, LayoutComponent } from "rasengan";
import { readWorkers } from "@/providers/WorkerProvider";

const AppLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;