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
                    <Item 
                        imgSrc = './src/assets/01.jpg'
                        name = 'Rainbow Vegetable Sandwich'
                        time = 'Time: 15 - 20 Minutes | Serves: 1'
                        price = '$10.50'
                        comon = '$11.70'
                    />

                    <Item 
                        imgSrc = './src/assets/02.jpg'
                        name = 'Vegetarian Burger'
                        time = 'Time: 30 - 45 Minutes | Serves: 1'
                        price = '$9.20'
                        comon = '$10.50'
                    />

                    <Item 
                        imgSrc = './src/assets/03.jpg'
                        name = 'Raspberry Stuffed French Toast'
                        time = 'Time: 10 - 15 Minutes | Serves: 1'
                        price = '$12.50'
                        comon = '$13.20'
                    />
                </div>
            </div>
        </div>
    )
}