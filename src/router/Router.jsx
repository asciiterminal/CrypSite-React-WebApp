import { Suspense, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../redux/customise/customiseActions";

// Router
import {
    BrowserRouter,
    Route,
    Switch,
    useHistory,
} from "react-router-dom";

// Routes
import { Routes } from "./routes";

// Layouts
import VerticalLayout from "../layout/VerticalLayout";
import HorizontalLayout from "../layout/HorizontalLayout";
import FullLayout from "../layout/FullLayout";

// Components
import HomePage from "../view/home";
import Error404 from "../view/pages/error";

export default function Router() {
    // Redux
    const customise = useSelector(state => state.customise)
    const dispatch = useDispatch()

    // Location
    const location = useHistory()

    // Dark Mode
    useEffect(() => {
        document.querySelector("body").classList.add(customise.theme)
        dispatch(theme(customise.theme))
    }, [])

    // RTL
    useEffect(() => {
        if (customise.direction == "ltr") {
            document.querySelector("html").setAttribute("dir", "ltr");
        } else if (customise.direction == "rtl") {
            document.querySelector("html").setAttribute("dir", "rtl");
        }
    }, [])

    // Default Layout
    const DefaultLayout = customise.layout; // FullLayout or VerticalLayout

    // All of the available layouts
    const Layouts = { VerticalLayout, HorizontalLayout, FullLayout };

    // Return Filtered Array of Routes & Paths
    const LayoutRoutesAndPaths = (layout) => {
        const LayoutRoutes = [];
        const LayoutPaths = [];
        if (Routes) {
            // Checks if Route layout or Default layout matches current layout
            Routes.filter(route => (route.layout === layout) && (
                LayoutRoutes.push(route),
                LayoutPaths.push(route.path)
            ));
        }

        return { LayoutRoutes, LayoutPaths };
    };

    // Return Route to Render
    const ResolveRoutes = () => {
        return Object.keys(Layouts).map((layout, index) => {
            const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

            let LayoutTag;
            if (DefaultLayout == "HorizontalLayout") {
                if (layout == "VerticalLayout") {
                    LayoutTag = Layouts["HorizontalLayout"];
                } else {
                    LayoutTag = Layouts[layout];
                }
            } else {
                LayoutTag = Layouts[layout];
            }

            return (
                <Route path={LayoutPaths} key={index}>
                    <LayoutTag>
                        <Switch>
                            {LayoutRoutes.map((route) => {
                                return (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        exact={route.exact === true}
                                        render={(props) => {
                                            return (
                                                <Suspense fallback={null}>
                                                    <route.component {...props} />
                                                </Suspense>
                                            );
                                        }}
                                    />
                                );
                            })}
                        </Switch>
                    </LayoutTag>
                </Route>
            );
        });
    };

    return (
        <BrowserRouter>
            <Switch>
                {ResolveRoutes()}

                {/* Home Page */}
                <Route
                    exact
                    path={'/'}
                    render={() => {
                        return (
                            DefaultLayout == "HorizontalLayout" ? (
                                <Layouts.HorizontalLayout>
                                    <HomePage />
                                </Layouts.HorizontalLayout>
                            ) : (
                                <Layouts.VerticalLayout>
                                    <HomePage />
                                </Layouts.VerticalLayout>
                            )
                        )
                    }}
                />

                {/* NotFound */}
                <Route path='*'>
                    <Error404 />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};