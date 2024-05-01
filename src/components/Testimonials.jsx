import { BlurhashCanvas } from "react-blurhash"
import { Carousel } from 'react-bootstrap'
import { TestimonialsImages } from "../assets"

export default function Testimonials() {
    return (
        <div className="testimonials" id="action4">
            <div className="container">
                <div className="heading" data-aos="fade-down">
                    <h1>Testimonials</h1>
                </div>
                <div className="content" data-aos="zoom-in-up">
                    <Carousel slide={true}>
                        <Carousel.Item>
                            <div className="box">
                                <div className="profile-image">
                                    <BlurhashCanvas
                                        hash={TestimonialsImages.PersonOneHash}
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "100%",
                                            zIndex: "1"
                                        }}
                                    />
                                    <img src={TestimonialsImages.PersonOne} alt="" />
                                </div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                                <span>Simab Dave - Web Designer</span>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="box">
                                <div className="profile-image">
                                    <BlurhashCanvas
                                        hash={TestimonialsImages.PersonTwoHash}
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "100%",
                                            zIndex: "1"
                                        }}
                                    />
                                    <img src={TestimonialsImages.PersonTwo} alt="" />
                                </div>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia.</p>
                                <span>Johnthan Doe - UX Designer</span>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="box">
                                <div className="profile-image">
                                    <BlurhashCanvas
                                        hash={TestimonialsImages.PersonOneHash}
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "100%",
                                            zIndex: "1"
                                        }}
                                    />
                                    <img src={TestimonialsImages.PersonOne} alt="" />
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