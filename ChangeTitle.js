import React, { useState, useEffect } from 'react'

function ChangeTitle() {
    const [newnum, setnewnum] = useState(0);

    useEffect(() => {
        // alert('hello')
        document.title = `Click Me ${newnum} times nice`
      })
    return (
        <>
            <button style={{fontSize:'xx-large'}} onClick={
                () => {
                    setnewnum(newnum + 1)
                }
            }>Click Me {newnum}</button>
        </>
    )
}

export default ChangeTitle
