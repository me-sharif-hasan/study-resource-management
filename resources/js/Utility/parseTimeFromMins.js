let parseTimeFromMins=(time)=>{
    if(time<=60){
        return time+" Minutes";
    }else{
        time/=60;
        if(time>=24){
            return parseFloat(time/24+"").toFixed(2)+" Days";
        }else{
            return parseFloat(time+"").toFixed(2)+" Hours";
        }
    }
}

export default parseTimeFromMins;
