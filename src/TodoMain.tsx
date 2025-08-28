import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoHome from "./Component/TodoHome";
import {ContextProvider} from "./ContextFol/AppCont";





createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ContextProvider>
            <TodoHome />
        </ContextProvider>
    </StrictMode>
)