import { Home } from "react-iconly";

const main = [
  {
    header: "MAIN",
  },
  {
    id: "dashboard",
    title: "Dashboards",
    icon: <Home set="curved" className="remix-icon" />,
    children: [
      {
        id: "dashboardAdmin",
        title: "Admin Dashboard",
        navLink: "/main/dashboard",
      },
    ],
  },
];

export default main;
