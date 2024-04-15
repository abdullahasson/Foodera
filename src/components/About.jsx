import { BlurhashCanvas } from "react-blurhash";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'

export default function About() {
    return (
        <div className="about" id="action2">
            <div className="container">
                <div className="content one">
                    <div className="left">
                        <BlurhashCanvas
                            hash="LEKUJ=.mlCvfgbS6xAt,5;RPMIx^"
                            style={{
                                position: "absolute",
                                width: "95%",
                                height: "100%",
                                borderRadius: "20px",
                                zIndex: "1"
                            }}
                        />
                        <img src={img1} alt="" />
                    </div>
                    <div className="right">
                        <h3>We pride ourselves on making real food from the best ingredients.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
                <div className="content two">
                    <div className="left">
                        <h3>We make everything by hand with the best possible ingredients.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li><i className='fa fa-check'></i> Etiam sed dolor ac diam volutpat.</li>
                            <li><i className='fa fa-check'></i> Erat volutpat aliquet imperdiet.</li>
                            <li><i className='fa fa-check'></i> purus a odio finibus bibendum.</li>
                        </ul>
                        <button className='btn'>Learn More</button>
                    </div>
                    <div className="right">
                        <BlurhashCanvas
                            hash="LOKKQH~VT0bv%fOYobbaTeENslw^"
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                zIndex: "1"
                            }}
                        />
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}