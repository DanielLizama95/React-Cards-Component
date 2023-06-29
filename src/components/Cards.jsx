import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import SingleCard from "./SingleCard";

const cards = [
  {
    id: 1,
    title: "Super Mario Bros. The Movie",
    image: image1,
    url: "https://www.youtube.com/watch?v=TnGl01FkMMo",
    text: "Two plumber brothers, Mario and Luigi, fall through the sewers and arrive in a magical underground world where they must confront the evil Bowser to rescue Princess Peach, who has been forced to agree to marry him."
  },
  {
    id: 2,
    title: "Spider-Man: Across the Spider-Verse",
    image: image2,
    url: "https://www.youtube.com/watch?v=shW9i6k8cB0",
    text: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero."  
  },
  {
    id: 3,
    title: "John Wick: Chapter 4",
    image: image3,
    url: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    text: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <SingleCard imageSource={image} title={title} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
