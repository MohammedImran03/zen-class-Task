class MovieRating {
    constructor(Title,Studio,Rating){
        this.Title=Title;
        this.Studio=Studio;
        this.Rating=Rating;
        if (this.Rating ==" "){
            this.Rating="PG"
        }
    }
  getPG(arr){
        let newArr= arr.filter((value)=> value.Rating=="PG");
        return newArr;
    }  
       
}

let ratings= [
    {Title:"AVENGERS",
    Studio:"RKFI",
    Rating:"PG-13"},
    {Title:"INFINITY WAR",
     Studio:"GLOBAL",
     Rating:"PG"},
     {Title:"CIVIL WAR",
     Studio:"GLOBAL",
     Rating:"PG"},
     {Title:"END GAME",
     Studio:"THEATER",
     Rating:"PG-13"},
     {Title:"WAKANDA",
     Studio:"OTT",
     Rating:"PG"},
]
let rating1= new MovieRating("Casino Royale","Eno Productions","PG13");
console.log(rating1);
