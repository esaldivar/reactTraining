import React, {useState, useEffect, useRef} from 'react';

const App = (props) => {
    //enter a form and hit submit on a button and then it will make a div appear with a value
    const [form, changeForm] =useState({
        inputName: "",
        submittedName: ""
    })
 
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
                Name:
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