function linear(dataArray, value){
     for(var i=0; i< dataArray.length; i++){
         if(dataArray[i] === value) {
            console.log(i)
            return i;
         }
     }
}

linear([34,51,1,2,3,45,56,687],34)