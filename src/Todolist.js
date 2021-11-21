import React, { useState } from "react";
const Todolist=()=>{
    const[inputlist,setinputlist]=useState([]);
    const[item,setitem]=useState([]);
    const[togglesubmit,settogglesubmit]=useState(false);
    const[edititemm,setedititem]=useState(null);


    const Event=(event)=>{
     setinputlist(event.target.value);
    };
    const listofitem=()=>{
       if(inputlist&&!togglesubmit) {

     setitem([...item,inputlist]) 
      setinputlist('')
       }
       else if(inputlist&&togglesubmit){

        console.log("inputlist",inputlist);
         setitem(item.map((elem,id)=>{
           if(id===edititemm){
            
             return[...elem,inputlist]

           }
          //  return elem;
         }))
         settogglesubmit(true);


        }
        };
        
       
      


const deleteitem=(index)=>{

const deleteditem=item.filter((val,imdex)=>{
    return index!==imdex
})
setitem(deleteditem);
}
const edititem=(id)=>{
    let newedit=item.find((val,index)=>{
        return index===id
      });
      console.log(newedit,"ram")
      settogglesubmit(true);
      setinputlist(newedit);
      setedititem(id);

    }


const passs =(e)=>{
    console.log('code',e.which)
 const eventKey = e.which ? e.which : e.keyCode;
  // check if input contains only letters after Enter was pressed
    if (eventKey === 13) {
        console.log('hh')
      setitem([...item,inputlist]) 
        console.log('inputliust',item)
         setinputlist('')
    }
    }
    return(<>
    <div className="main-div">
        <div className="centre-div"><br/>
        <h1>TODO LIST</h1><br/>
        <input type="text" value={inputlist} onKeyPress={passs}placeholder="add a item"onChange={Event} />
        {  togglesubmit ? <button className="editbtn"onClick={listofitem}>Edit</button> :<button onClick={listofitem}>+</button>} 
        {/* <button onClick={listofitem}>+</button> */}

        <ol>{item.map((val,id)=>{
            return ( 
            <div key={id}>
            <li >{val}</li>
        
            <button className="delbtn" onClick={()=>deleteitem(id)}>del</button>
                <button className="editbtn"onClick={()=>edititem(id)}>Edit</button> 
            </div>
         ) })}
         
        </ol>
        <button className="clrbtn" onClick={()=>(setitem([]))}>clear all</button>
       
        </div>
    </div>
    
    
    
    
    </>

    )
};
export default Todolist;