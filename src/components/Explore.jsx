import Item from "./ExploreItem";
import imgone from "../assets/01.jpg";
import imgtwo from "../assets/02.jpg";
import imgthree from "../assets/03.jpg"

export default function Explore() {
    return (
        <div className="explore" id="action3">
            <div className="container">
                <div className="heading">
                    <h1>Explore Our Foods</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className="content">
                    <Item
                        imgSrc={imgone}
                        hush="LZQ9fnt3x^V@yEi^Rkoz*0kXR5Rk"
                        name='Rainbow Vegetable Sandwich'
                        time='Time: 15 - 20 Minutes | Serves: 1'
                        price='$10.50'
                        comon='$11.70'
                    />

                    <Item
                        imgSrc={imgtwo}
                        hush="LANl-~8|1800~X%O9FIA02n4UuyD"
                        name='Vegetarian Burger'
                        time='Time: 30 - 45 Minutes | Serves: 1'
                        price='$9.20'
                        comon='$10.50'
                    />

                    <Item
                        imgSrc={imgthree}
                        hush="LIMZaj8^9Z?vnh4nELoeT}9uM_In"
                        name='Raspberry Stuffed French Toast'
                        time='Time: 10 - 15 Minutes | Serves: 1'
                        price='$12.50'
                        comon='$13.20'
                    />
                </div>
            </div>
        </div>
    )
}