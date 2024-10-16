import Item from "./ExploreItem";
import { ExploreImages } from "../assets";

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
                        imgSrc={ExploreImages.imgone}
                        hash={ExploreImages.imgoneHash}
                        name='Rainbow Vegetable Sandwich'
                        time='Time: 15 - 20 Minutes | Serves: 1'
                        price='$10.50'
                        comon='$11.70'
                    />
                    <Item
                        imgSrc={ExploreImages.imgtwo}
                        hash={ExploreImages.imgtwoHash}
                        name='Vegetarian Burger'
                        time='Time: 30 - 45 Minutes | Serves: 1'
                        price='$9.20'
                        comon='$10.50'
                    />
                    <Item
                        imgSrc={ExploreImages.imgthree}
                        hash={ExploreImages.imgthreeHash}
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