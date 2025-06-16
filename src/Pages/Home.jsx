import MovieCard from "../Components/MovieCard";
import { useState } from "react";
import "../CSS/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: "1994",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption",
      rating: "9.3",
      genre: "Drama",
      poster:
        "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      id: 2,
      title: "The Godfather",
      year: "1972",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rating: "9.2",
      genre: "Crime, Drama",
      poster:
        "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: "2008",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      rating: "9.0",
      genre: "Action, Crime, Drama",
      poster:
        "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 4,
      title: "Inception",
      year: "2010",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given a task to plant an idea.",
      rating: "8.8",
      genre: "Action, Adventure, Sci-Fi",
      poster:
        "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    },
    {
      id: 5,
      title: "Fight Club",
      year: "1999",
      description:
        "An insomniac office worker forms a fight club that evolves into something much more.",
      rating: "8.8",
      genre: "Drama",
      poster:
        "https://image.tmdb.org/t/p/original/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },
    {
      id: 6,
      title: "Forrest Gump",
      year: "1994",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, and more from the perspective of a man with a low IQ.",
      rating: "8.8",
      genre: "Drama, Romance",
      poster:
        "https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },
    {
      id: 7,
      title: "Interstellar",
      year: "2014",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      rating: "8.6",
      genre: "Adventure, Drama, Sci-Fi",
      poster:
        "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
    {
      id: 8,
      title: "The Matrix",
      year: "1999",
      description:
        "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
      rating: "8.7",
      genre: "Action, Sci-Fi",
      poster:
        "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      id: 9,
      title: "Pulp Fiction",
      year: "1994",
      description:
        "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in tales of violence and redemption.",
      rating: "8.9",
      genre: "Crime, Drama",
      poster:
        "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    },
    {
      id: 10,
      title: "Gladiator",
      year: "2000",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
      rating: "8.5",
      genre: "Action, Adventure, Drama",
      poster:
        "https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      id: 11,
      title: "The Lord of the Rings: The Return of the King",
      year: "2003",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam.",
      rating: "8.9",
      genre: "Adventure, Drama, Fantasy",
      poster:
        "https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    },
    {
      id: 12,
      title: "The Lion King",
      year: "1994",
      description:
        "Lion prince Simba flees his kingdom after the murder of his father and learns the meaning of responsibility.",
      rating: "8.5",
      genre: "Animation, Adventure, Drama",
      poster:
        "https://image.tmdb.org/t/p/original/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    },
    {
      id: 13,
      title: "The Silence of the Lambs",
      year: "1991",
      description:
        "A young FBI cadet must confide in an incarcerated cannibal killer to catch another serial killer.",
      rating: "8.6",
      genre: "Crime, Drama, Thriller",
      poster:
        "https://image.tmdb.org/t/p/original/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    },
    {
      id: 14,
      title: "Saving Private Ryan",
      year: "1998",
      description:
        "Following the Normandy Landings, a group of soldiers go behind enemy lines to retrieve a paratrooper.",
      rating: "8.6",
      genre: "Drama, War",
      poster:
        "https://image.tmdb.org/t/p/original/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
    },
    {
      id: 15,
      title: "Parasite",
      year: "2019",
      description:
        "Greed and class discrimination threaten the relationship between two families.",
      rating: "8.6",
      genre: "Comedy, Drama, Thriller",
      poster:
        "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    },
    {
      id: 16,
      title: ",Whiplash",
      year: "2014",
      description:
        "A young drummer enrolls at a cut-throat music conservatory where he is mentored by an abusive instructor.",
      rating: "8.5",
      genre: "Drama, Music",
      poster:
        "https://image.tmdb.org/t/p/original/oPxn9TWwLQpvO2VY1F5r2z2UacJ.jpg",
    },
    {
      id: 17,
      title: "Joker",
      year: "2019",
      description:
        "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.",
      rating: "8.4",
      genre: "Crime, Drama, Thriller",
      poster:
        "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
      id: 18,
      title: "Avengers: Endgame",
      year: "2019",
      description:
        "After the devastating events of Infinity War, the Avengers assemble once more in order to reverse Thanos's actions.",
      rating: "8.4",
      genre: "Action, Adventure, Drama",
      poster:
        "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
      id: 19,
      title: "Titanic",
      year: "1997",
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious RMS Titanic.",
      rating: "7.9",
      genre: "Drama, Romance",
      poster:
        "https://image.tmdb.org/t/p/original/6VmFfGJgkScQsZMyRUHLkWBcuVC.jpg",
    },
    {
      id: 20,
      title: "Coco",
      year: "2017",
      description:
        "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather.",
      rating: "8.4",
      genre: "Animation, Adventure, Family",
      poster:
        "https://image.tmdb.org/t/p/original/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    },
    {
      id: 21,
      title: "UP",
      year: "2009",
      description:
        "78-year-old Carl sets out to fulfill his lifelong dream to see the wilds of South America.",
      rating: "8.2",
      genre: "Animation, Adventure, Comedy",
      poster:
        "https://image.tmdb.org/t/p/original/nk11pvocdb5zbFhX5oq5YiLPYMo.jpg",
    },
    {
      id: 22,
      title: "WALL·E",
      year: "2008",
      description:
        "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey.",
      rating: "8.4",
      genre: "Animation, Adventure, Family",
      poster:
        "https://image.tmdb.org/t/p/original/9cJETuLMc6R0b9A5rL2KIXy43YQ.jpg",
    },
    {
      id: 23,
      title: "The Green Mile",
      year: "1999",
      description:
        "The lives of guards on Death Row are affected by one of their charges: a man accused of murder who has a mysterious gift.",
      rating: "8.6",
      genre: "Crime, Drama, Fantasy",
      poster:
        "https://image.tmdb.org/t/p/original/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
    },
    {
      id: 24,
      title: "Toy Story",
      year: "1995",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him.",
      rating: "8.3",
      genre: "Animation, Adventure, Comedy",
      poster:
        "https://image.tmdb.org/t/p/original/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    },
    {
      id: 25,
      title: "Brave heart",
      year: "1995",
      description:
        "Scottish warrior William Wallace leads his countrymen in a rebellion against English tyranny.",
      rating: "8.3",
      genre: "Biography, Drama, History",
      poster:
        "https://image.tmdb.org/t/p/original/or1gBugydmjToAEq7OZY0owwFk.jpg",
    },
    {
      id: 26,
      title: "Django Unchained",
      year: "2012",
      description:
        "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife.",
      rating: "8.4",
      genre: "Drama, Western",
      poster:
        "https://image.tmdb.org/t/p/original/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    },
    {
      id: 27,
      title: "The Truman Show",
      year: "1998",
      description:
        "An insurance salesman discovers his whole life is actually a reality TV show.",
      rating: "8.2",
      genre: "Comedy, Drama",
      poster:
        "https://image.tmdb.org/t/p/original/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
    },
    {
      id: 28,
      title: "The Social Network",
      year: "2010",
      description:
        "The story of the founders of the social-networking website, Facebook.",
      rating: "7.7",
      genre: "Biography, Drama",
      poster:
        "https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    },
  ];

  const handleSearch = () => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && ( //when search films only appear same names starting with searchQuery
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
