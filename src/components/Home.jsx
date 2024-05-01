import { BlurhashCanvas } from "react-blurhash"

export default function Home() {
    return (
        <>
            <BlurhashCanvas
                hash="LPSY:P?wt8I9%gMxozaf%hMxRix]"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: "1"
                }}
            />
            <div className="home" id="action1">
                <div className="container">
                    <div className="left" data-aos="zoom-out-right">
                        <h1>Good food choices are good investments.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>

                        <div className="buttos">
                            <button className="btn">Order Now <i className="fa-solid fa-basket-shopping fa-bounce"></i></button>
                            <button className="btn-second">Learn More <i className="fa-solid fa-angle-right fa-fade"></i></button>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    );
}