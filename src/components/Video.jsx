import { BlurhashCanvas } from "react-blurhash"


export default function Video() {
    return (
        <div style={{ position: "relative" }}>
            <BlurhashCanvas
                hash="LNQJTK%gt5IU_ND$kDxuRjt7WBa}"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: "-2"
                }}
            />
            <div className="video">
                <div className="container">
                    <div className="info">
                        <h2>When a mans stomach is full it makes no difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <a href="#"><i className="fa fa-play"></i>  Watch Our Story</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
