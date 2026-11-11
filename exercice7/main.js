const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];
courses.push("Café");
console.log(courses[0]);
console.log(courses[courses.length-1]);
console.log(courses.length);


const total=document.querySelector("#total")
const list =document.querySelector("#liste")
total.textContent=`${courses.length} articles`
// for (let i=0;i<courses.length;i++){
// const li =document.createElement("li")
// li.textContent=courses[i]
// list .appendChild(li)

// }
courses.forEach(function(course,index){
    const li =document.createElement("li")
    li.textContent=`${course}.${index+1}`
   list.appendChild(li)

    
})
