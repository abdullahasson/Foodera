import { BlurhashCanvas } from "react-blurhash"
import { Carousel } from 'react-bootstrap'
import img1 from '../assets/1 (1).jpg'
import img2 from '../assets/2.jpg'

export default function Testimonials() {
    return (
        <div className="testimonials" id="action4">
            <div className="container">
                <div className="heading">
                    <h1>Testimonials</h1>
                </div>
                <div className="content">
                    <Carousel slide={true}>
                        <Carousel.Item>
                            <div className="box">
                                <div className="profile-image">
                                    <BlurhashCanvas
                                        hash="LPIqls-:*09u^+RPt8IpXTkWIUxF"
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "100%",
                                            zIndex: "1"
                                        }}
                                    />
                                    <img src={img1} alt="" />
                                </div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                                <span>Simab Dave - Web Designer</span>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="box">
                                <div className="profile-image">
                                    <BlurhashCanvas
                                        hash="LgK1du-;_NR+?bM{t6ofNxkCa0t6"
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "100%",
                                            zIndex: "1"
                                        }}
                                    />
                                    <img src={img2} alt="" />
                                </div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia.</p>
                                <span>Johnthan Doe - UX Designer</span>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="box">
                                <div className="profile-image">
                                    <BlurhashCanvas
                                        hash="LPIqls-:*09u^+RPt8IpXTkWIUxF"
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "100%",
                                            zIndex: "1"
                                        }}
                                    />
                                    <img src={img1} alt="" />
                                </div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <span>Maccy Doe - Front End</span>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}