let counter= 0;
const getdata= ()=>{
    //call an api and gets data
    console.log("fetching", counter++);

}
const debouncefn= function(fn, d){
    let timer;
    return function(){
        let context= this,
        args= arguments;
        clearTimeout(timer);
        timer= setTimeout(()=>{
            fn.apply(context, args);
        },d)
        
    }
}

const betterfunction= debouncefn(getdata, 600);