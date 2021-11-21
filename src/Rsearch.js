import React from "react";
const Rsearch=(props)=>{
    console.log('image',props)
    const url=`https://source.unsplash.com/400x300/?${props.name}`;
    return(
        <>
        <div>
            <img src={url}  alt="search"/>
           
        

        </div>
        
        
        
        
        </>
    )
};
export default Rsearch;