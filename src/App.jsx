import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const App = (props) => {
    //enter a form and hit submit on a button and then it will make a div appear with a value
    const [form, changeForm] =useState({
        inputName: "",
        submittedName: ""
    })

    useEffect(()=>{
        axios.get('/api/axiosTrial')
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

    },[])

    const axiosTrial = () => {
        axios.get('/api/axiosTrial')
    }


 
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
        </div>
    )

};

export default App;