import React,{useState} from 'react'

const Time = () => {
     var time= new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const updatetime=()=>{
       time=new Date().toLocaleTimeString();
        setCtime(time);
       
      }
     
    
    
    setInterval(updatetime,1000);
    return (
        <div>
            <h3 >{ctime}</h3>
        </div>
    )
}

export default Time;
