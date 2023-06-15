import imga from '../assets/02.jpg'

export default function Item() {
    return(
        <div className="box">
            <div className="head">
                <img src={imga} alt="" />
            </div>
            <div className="body">
                <h3>Raspberry Stuffed French Toast</h3>
                <p>Time: 30 - 45 Minutes | Serves: 1</p>

                <div className="price">
                    <span>$12.50</span>
                    <del>$13.20</del>
                </div>
            </div>
            <div className="foot">
                <button className="btn">Order Now</button>
            </div>
        </div>
    )
}