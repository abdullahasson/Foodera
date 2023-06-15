import Item from "./ExploreItem";


export default function Explore() {
    return (
        <div className="explore">
            <div className="container">
                <div className="heading">
                    <h1>Explore Our Foods</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className="content">
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    )
}