
let div = document.createElement("div");
document.body.appendChild(div);
let Result = new XMLHttpRequest();
Result.open("GET", "https://restcountries.com/v3.1/all");
Result.send();
Result.onload = function () {
 
//a.Get all the countries from the Asia continent /region using the Filter function
let Rest=JSON.parse(Result.response)
let Result1=Rest.filter(({region}) =>
   region==="Asia"
);
 console.log(Result1);

//  b.Get all the countries with a population of less than 2 lakhs using Filter function
let Result2=Rest.filter(({population}) =>
population<200000
);
 console.log(Result2);

// c.Print the following details name, capital, flag using forEach function

Rest.forEach(({name,capital,flag}) => {
    let {common}=name;
 let p = document.createElement("p");
p.innerHTML=`Country Name:-<b>${common}</b>,Capital:-<b>${capital}</b>, Flag:-<b>${flag}</b>.`;
div.appendChild(p);
});

// d.Print the total population of countries using reduce function
let Result3=Rest.reduce((initial,total) =>initial+total.population,0);
console.log("Total Population:"+Result3);

//e. Print the country which uses US Dollars as currency.
let answer = Rest.filter((dummy) => (dummy.currencies !== undefined))
console.log(answer.length);
let realanswer = answer.filter((data) =>  {
for (let key in data.currencies) {
    if(data.currencies[key].name === "United States dollar"){
  return data.currencies;
  }
}
})
console.log(realanswer[0].name);


}


