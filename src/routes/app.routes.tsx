import { Navigate, Routes, Route } from "react-router-dom";
import HomePage from "../features/home/components/page/HomePage";
import TodoPage from "../features/todo/components/page/TodoPage";

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="home" element={<HomePage></HomePage>}></Route>
                <Route path="todo" element={<TodoPage></TodoPage>}></Route>
                <Route path=""></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </>
    );
}
