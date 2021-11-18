import React from "react";
import { useState } from "react";
function Comp2() {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);
    let myRef = React.createRef();
    let handler = ()=> {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    }
    let addComment = ()=> {
        let commentValue = myRef.current.value;
        let comments = [...comment, commentValue];
        setComment(comments);
        myRef.current.value='';
    }

    return(
        <>
            <h1>State</h1>
            <div>
                <button onClick={handler}>This button change state</button>
            </div>    
           <div>
                {count % 2 === 0 ? 'even' : 'odd'}
            </div>     
            <div>
                {count}
            </div>
            <div>
                <textarea ref={myRef}></textarea>    
            </div>
            <div>
                <button onClick={addComment}>Add comment</button>
            </div>
            <div>
                <ul>
                    {comment.map((item,index)=><li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
        </>
    );
}

export default Comp2;