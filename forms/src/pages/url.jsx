import React, { useState } from 'react';

const Url = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const urlShortening = async () =>{
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
        const result = await response.text()
        setShortUrl(result)
    }
    return (
        <div style={{textAlign:'center'}}>
            <label htmlFor="#s" style={{marginRight:'20px', fontSize:'20px'}}>Enter Url: </label>
            <input type="text" placeholder='http//www.skjdh' style={{borderRadius:"5px"}}  value={url} onChange={(item) => setUrl(item.target.value)}/><br/>
            <button onClick={urlShortening} style={{marginTop:'20px', background:'#8d979c', fontSize:'15px', border:"0px", borderRadius:"4px", width:'260px', height:'35px'}}>Make it short</button>
            <div>
                {shortUrl}
            </div>
        </div>
    );
}

export default Url;