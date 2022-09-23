// packages
import React from "react";
import { useRoutes } from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";
import CreateEvent from "./pages/createEvent/CreateEvent";
import EventPage from "./pages/eventPage/EventPage";
import LandingPage from "./pages/landingPage/LandingPage";

// pages
function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "create", element: <CreateEvent /> },
        { path: "event", element: <EventPage /> },
      ],
    },
  ]);
}

export default Router;
