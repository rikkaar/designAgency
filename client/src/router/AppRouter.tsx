import {Route, Routes, useLocation} from "react-router-dom";
import {routes} from "./routes";

export const AppRouter = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            {routes.map(route => {
                return (<Route key={route.path} path={route.path} element={route.element}/>)
            })}
        </Routes>
    );
};

