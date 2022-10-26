import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="app container">
            <ul className="characters-list row list-unstyled">{children}</ul>
        </div>
    );
}
