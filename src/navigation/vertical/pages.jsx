import { CloseSquare } from "react-iconly";

const pages = [
  {
    header: "PAGES",
  },
  {
    id: "errors",
    title: "Error Pages",
    icon: <CloseSquare set="curved" className="remix-icon" />,
    children: [
      {
        id: "error-page",
        title: "404",
        navLink: "/pages/error-page",
      },
    ],
  },
];

export default pages;
