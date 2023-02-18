//For given JSON iterate over for loop(fro, for in, for of, for each)

// for loop
let div=document.createElement("div");
document.body.appendChild(div);
var fruits=[{name: "Orange", color: "Orange"},
{name: "Banaan", color: "Yellow"},{name: "Apple", color: "Red"},{name: "Grapes", color: "Purple"}];
for(let i=0;i<fruits.length;i++){
    let p = document.createElement("p");
        p.innerText =`${i+1}. ${fruits[i].name} `
        p.setAttribute("style", `color:${fruits[i].color}`);
        
        div.appendChild(p);
}
//Output:
// 1. Orange

// 2. Banaan

// 3. Apple

// 4. Grapes


// for of
for(let i of fruits){
    let p = document.createElement("p");
        p.innerText =`${i.name}`
        p.setAttribute("style", `color:${i.color}`);
        div.appendChild(p);
}
// Otput:
// Orange

// Banaan

// Apple

// Grapes

//for in
for(let i in fruits){
    let p = document.createElement("p");
    p.innerText =`${parseInt(i)+1}. ${fruits[i].name} `;
        p.setAttribute("style", `color:${fruits[i].color}`);
        div.appendChild(p);
}

//Output:
// 1. Orange

// 2. Banaan

// 3. Apple

// 4. Grapes


//for each

fruits.forEach((value, index)=>{
    let p = document.createElement("p");
    p.innerText =`${parseInt(index)+1}. ${value.name} `;
        p.setAttribute("style", `color:${value.color}`);
        div.appendChild(p);
});
// Output:
// 1. Orange

// 2. Banaan

// 3. Apple

// 4. Grapes