import React from 'react';
import {getAllUsers} from './actions.js'


const Header=()=>{
    
     getKeyword=(event)=>
 { 
       let keyword=event.target.value
     
 }
 
    return(
        <div>
        <div>
        enter username
        </div>
        <input type='text' onChange={this.getKeyword}/>
        
        </div>
    )
}
export default Header;