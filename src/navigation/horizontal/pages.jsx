import {
    CloseSquare,
    PaperPlus,
} from "react-iconly";

const pages = [
    {
        header: "Pages",
        subMenu: [
            {
                id: "blank-page",
                title: "Blank Page",
                icon: <PaperPlus set="curved" className="remix-icon" />,
                navLink: "/pages/blank-page",
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
        ]
    }
];

export default pages