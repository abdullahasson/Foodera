import { BlurhashCanvas } from "react-blurhash"

export default function Baked() {
    return (
        <div className="baked">
            <BlurhashCanvas
                hash="LDPY^++@PCdo%#h2aOiatnS$tSS%"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: "-1"
                }}
            />
            <div className="overlay"></div>
            <div className="container">
                <div className="left" data-aos="fade-right">
                    <h2>Baked fresh daily by bakers with passion.</h2>
                </div>
                <div className="right">
                    <button className="btn" data-aos="fade-left">Learn More</button>
                </div>
            </div>
        </div>
    )
}