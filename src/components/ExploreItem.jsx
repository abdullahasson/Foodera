export default function Item(Props) {
    return(
        <div className="box">
            <div className="head">
                <img src={Props.imgSrc} alt="" />
            </div>
            <div className="body">
                <h3>{Props.name}</h3>
                <p>{Props.time}</p>

                <div className="price">
                    <span>{Props.price}</span>
                    <del>{Props.comon}</del>
                </div>
            </div>
            <div className="foot">
                <button className="btn">Order Now</button>
            </div>
        </div>
    )
}