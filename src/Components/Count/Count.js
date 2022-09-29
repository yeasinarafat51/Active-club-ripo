import React from 'react';
import { useState } from 'react';

const Count = () => {
    const [handlee, sethandlee] = useState(0);
    const handle = (numhandie)=> {
        sethandlee(numhandie);
        const prebook = localStorage.getItem("Bookmark");
        const oldBookmark = JSON.parse(prebook);
        
        if (oldBookmark) {
            localStorage.setItem("Bookmark", JSON.stringify([...oldBookmark,numhandie]));
            console.log('aci')

        }else {
            localStorage.setItem("Bookmark", JSON.stringify([numhandie]));
        }
    }
    
   
    
    return (
        <div>
            <button onClick={()=> handle(10)} value="10">10s</button>
                <button onClick={()=> handle(20)} value='20'>20s</button>
                <button onClick={()=> handle(30)} value ="30">30s</button>
                <button onClick={()=> handle(40)} value ='40'>40s</button>
            <p>Timer Break:{handlee}</p>
            
        </div>
    );
};

export default Count;