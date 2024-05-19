import PulpFiction from "../assets/images/PulpFiction.png";
import KillBill from "../assets/images/KillBill.png";
import BohemianRhapsody from "../assets/images/BohemianRhapsody.png";
import Dogs from "../assets/images/Dogs.png";
import Avengers from "../assets/images/Avengers.png";
import Inception from "../assets/images/Inception.png"


export interface IMovie{
    imgUrl: string,
    movieName: string,
    releaseYear: number,
    relevantGenres: string[];
    rating: number,
    duration: string,
    description: string,
}

export const movies: IMovie[] = [
    {
        imgUrl: PulpFiction,
        movieName: 'Pulp Fiction',
        releaseYear: 1994,
        relevantGenres: ['Action & Adventure'],
        rating: 8,
        duration: "2h 34min",
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    },
    {
        imgUrl: BohemianRhapsody,
        movieName: 'Bohemian Rhapsody',
        releaseYear: 2003,
        relevantGenres: ['Drama', 'Music', 'Biography'],
        rating: 9.8,
        duration: "2h 10min",
        description: "Bohemian Rhapsody is a 2018 biographical musical drama film that focuses on the life of Freddie Mercury, the lead singer of the British rock band Queen, from the formation of the band in 1970 to their 1985 Live Aid performance at the original Wembley Stadium."
    },
    {
        imgUrl: KillBill,
        movieName: 'Kill Bill: Vol 2 ',
        releaseYear: 1994,
        relevantGenres: ['Oscar winning Movie'],
        rating: 9.1,
        duration: "1h 50min",
        description: "It stars Uma Thurman as the Bride, who swears revenge on a group of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader, Bill (David Carradine), after they try to kill her and her unborn child. Her journey takes her to Tokyo, where she battles the yakuza.",
    },
    {
        imgUrl: Avengers,
        movieName: 'Avengers',
        releaseYear: 2004,
        relevantGenres: ['Action & Adventure'],
        rating: 9.4,
        duration: "3h 15min",
        description: "In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
    },
    {
        imgUrl: Inception,
        movieName: 'Inception',
        releaseYear: 2003,
        relevantGenres: ['Action & Adventure'],
        rating: 7.6,
        duration: "2h 45min",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    },
    {
        imgUrl: Dogs,
        movieName: 'Reservoir dogs',
        releaseYear: 1994,
        relevantGenres: ['Oscar winning Movie'],
        rating: 6.7,
        duration: "1h 52min",
        description:  "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant. When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    },
]