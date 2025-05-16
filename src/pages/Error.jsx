import { useNavigate, useRouteError } from "react-router"

export const Error = () => {
    const errorpage = useRouteError()
    const navigate = useNavigate()
    if (errorpage.status === 404) {
        return (
            <section className="error-section">
                <div className="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                            alt="404 page" />
                    </figure>
                </div>

                <div className="text-center">
                    <p className="p-a">
                        The page you were looking for could not be found
                    </p>
                    <p className="p-b">Back to previous page</p>
                </div>
                {/* <NavLink to="/" className="btn">Go back to Home page</NavLink> */}
                <button className="btn" onClick={() => navigate(-1)}>Go back</button>
            </section>
        )
    }
    console.log(errorpage);

    return (
        <h1>This page you are looking does not exist</h1>
    )

}