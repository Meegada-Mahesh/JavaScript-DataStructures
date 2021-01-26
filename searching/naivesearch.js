function naivesearch(longer, shorter){
    var count = 0;
    for(var i=0; i<longer.length; i++){
        for(var j=0; j<shorter.length; j++){
            if(shorter[j] !== longer[i+j]) break;
            if(j=== shorter.length-1) count++
        }
    }
    console.log(count)
    return count;
}

naivesearch("MaheshMeegada","Mah");

