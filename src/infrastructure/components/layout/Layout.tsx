import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
