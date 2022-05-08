const removeFromArray = function(array,...removeElem) {

    for (let j = 0; j<removeElem.length;j++){
        let i = 0;
     while (true){ 
        i++;
        if (array[i]==removeElem[j]){
        array.splice(i,1)
         break;
        } else if (i > array.length)
        break;{
        }
        };
   }
console.log(array);
return array;
}
module.exports = removeFromArray;
