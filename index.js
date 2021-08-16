// 'use strict';
// console.log("hello");
// console.log('my Name is ----');
// let fContainer = document.querySelector('.foodContainer');
// let searchFood = document.querySelector('#searchFood');

// const fetchData = async function(){
//     try{
//     const res =await fetch('https://forkify-api.herokuapp.com/api/get?rId=35109');
//     const data = await res.json();
//     // console.log(res);
//     // console.log(res.status);
//         if(!res.ok) throw new Error(`Image not found Error :  ${res.status}`);
//         let {recipe } = data;
//         console.log(recipe)
//         recipe = {
//             image: recipe.image_url,
//             ingredients: recipe.ingredients,
//             publisher: recipe.publisher,
//             recipe_id: recipe.recipe_id,
//             social_rank: recipe.social_rank,
//             source_url: recipe.source_url,
//             title: recipe.title,
//         }
//         let imgUrl = `<img src="${recipe.image}" alt= "TOmato"/>`
//         fContainer.insertAdjacentHTML("afterbegin",imgUrl);
        
//         console.log(recipe);
//         //console.log(res,data)
//     }
//     catch(err)
//     {
//             alert(err.message);
//     }
// }
// fetchData();
// document.querySelector('#searchFoodBtn').addEventListener('click',async function(){
//     console.log(searchFood.value)
//     const res=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchFood.value}`);
//     const data = await res.json();
//     console.log(data)


// })

// let a ='abhay';
// const rename = function(){
// console.log(a);
// // let a = "anuj";
// console.log(a);
// }
// rename()

'use strict';
// const day = new Date('');
// console.log(day);
// Date.prototype.lastyear = function(){
//     const year = new Date;
//     return year.getFullYear() - 1;
// }
// console.log(day.lastyear())

// const countPopulation = async function()
// {
//     const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     const data = await res.json();
//     console.log(data);
//     let newData=data.data
//     let newData2 = newData.map(function(res){
//         return {year : res.Year,population :res.Population};
//     })
//     console.log(newData2)

// }

// countPopulation()
// // years.forEach(function)

// const animals=['dog','cat','lion','tiger'];
// console.log(animals)
// animals.forEach(function(name,index){
//     console.log(name,index+1)
// })

// const numbers = [1,5,9,81,10,45,2];
// let sumNum=0;
// numbers.forEach(function(num){
//     sumNum+=num;
// })
// console.log(sumNum);
// const doublesNum = numbers.map(number => number * 2)
// console.log(doublesNum);
'use strict';
// const leavings = [
//     {name:'Abhay',type:'human'},
//     {name:'Lion',type:'animal'},
//     {name:'Tiger',type:'animal'},
//     {name:'Owl',type:'bird'},
//     {name:'Perrot',type:'bird'},
//     {name:'Kishan',type:'human'},
// ]
// const animals = leavings.filter(entry => entry.type==='animal')
// console.log(animals)

// const leavingTypes = leavings.reduce(function(all,entry){
//     all.push(entry.type)
//     return all
// },[]);
// console.log(leavingTypes);
// for(let {name,type} of(leavings)){
//     console.log(name,type)
// }
// function *greet(){
//     console.log('Welcome')
//     yield 'hyy';
//     console.log('I m abhay')
//     yield 'hello';
//     yield 'namaste';
//     yield 'hello there';
// }
// const gret = greet();
// console.log(gret.next());
// console.log(gret.next('hello there'));
// console.log(gret.next());
// console.log(gret.next());
// console.log(gret.next());

const animals = ['cat','dog','monkey','dog','monkey','cat','tiger','dog'];
const petsCount = animals.reduce((obj,animal)=>{
    if(!obj[animal]) obj[animal] = 1;
    else obj[animal]+=1
    return obj;
},{})
console.log(petsCount);