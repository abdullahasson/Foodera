export default function Form() {
    return(
        <div className="form">
            <div className="container">
                <div className="content">
                    <h1>Hurry up! Subscribe our newsletter and get 25% Off</h1>
                    <p>Limited time offer for this month. No credit card required.</p>
                    <form action="">
                        <input type="email" placeholder="Email Address here"/>
                        <button className="btn" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
