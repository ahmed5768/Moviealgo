import { Outlet, useNavigation } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./header"
import { Loading } from "./Loading"

const Applayout = () => {

    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <Loading />
    }

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Applayout