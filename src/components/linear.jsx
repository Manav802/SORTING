export function linearSearch(array, key){
    const animation = [];
    for(let i = 0; i < array.length; i++){

        if(array[i] == key){   // == will be used because we donot know the data types( === req datatypes to be exactly same )

            animation.push([i,'true']);
            break;
          
        }
        else{
            animation.push([i,'false']);
        }
    }
    // If results array is empty, return -1
    let size=animation.length;
    if(!size){
        animation.push([-1,-1]);
    }

    return animation;
}