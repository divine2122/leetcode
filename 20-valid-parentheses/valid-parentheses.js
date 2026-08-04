/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let array = s.split("")
let temp=[]
let key={
    ")":"(",
    "}":"{",
    "]":"["
}

for (x of array){

if (x === "("||x==="["||x==="{"){
     temp.push(x)
     }
    else 
    {
    //found closing parenthesis, checks if prev char is corresponding parenthesis
        if (temp[temp.length-1]==key[x]){
        temp.pop()} else {return false}
            console.log("te")

         }


}
console.log(temp)
if (temp.length==0){return true}
else {return false}

};

//({(}{{}}))