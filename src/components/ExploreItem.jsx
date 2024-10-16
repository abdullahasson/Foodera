import { BlurhashCanvas } from "react-blurhash"

export default function Item(Props) {
    return (
        <div className="box">
            <div className="head">
                <BlurhashCanvas
                    hash={Props.hash}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        zIndex: "1"
                    }}
                />
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