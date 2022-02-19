import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const App = (props) => {
    //enter a form and hit submit on a button and then it will make a div appear with a value
    const [form, changeForm] =useState({
        inputName: "",
        submittedName: "",
        serverResponse: ""
    })

    useEffect(()=>{
        axios.get('/api')
        .then((res)=>{
            console.log(res.data);
            changeForm({
                ...form,
                serverResponse: res.data
            })
        }).catch((err)=>{
            console.log(err);
        })

    },[])
 
    return (
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault()
                changeForm({
                    ...form,
                    submittedName: form.inputName
                })
                }}>
                <label>
                Enter
                    <input type="text" name="name" value={form.inputName} onChange={(e)=>{changeForm({
                        ...form,
                        inputName: e.target.value
                    })}}/>
                </label>
                    <input type="submit" value="Submit" />
            </form>
            {form.submittedName.length > 0 &&
            <h1>{form.submittedName}</h1>
            }
            <h1>{form.serverResponse}</h1>
        </div>
    )

};

export default App;