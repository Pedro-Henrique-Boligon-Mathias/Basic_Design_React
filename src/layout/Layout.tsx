import Nav from "./Nav";
import Footer from "./Footer";
import { Container } from "./Container";
import { Outlet } from "react-router";



export function Layout() {
    return (
        <>
            <Nav/>

            <Container>
                <Outlet/>
            </Container>

            <Footer/>
        </>
    )
}