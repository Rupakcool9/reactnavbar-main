import React, { useEffect, useState } from "react";
import axios from "axios";
const Data=()=>{
    const[num,setnum]=useState();
    const[name,setname]=useState();
    const[move,setmove]=useState('');
    useEffect(()=>{
        // alert("hiii")
        async function getData(){
            console.log('inside',num)
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.moves[0].move.name);
            setname(res.data.name);
            setmove(res.data.moves.length);
            };
        getData();
       
    
    });

    return(<>
    
    <h1>you chose {num} value</h1>
    <h2>my name is {name} name</h2>
    <h1>i have total {move} moves</h1>
    <select value= {num} onChange= {(event) => {setnum(event.target.value);}}>
             <option value="1">1</option>
             <option value="25">25</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>


    </select>
    
    
    
    
    
    
    </>
        
    )
};
export default Data;