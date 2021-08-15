import React, {useState} from 'react'

export const LinkForm = (props) => {

    const initialStateValues = {
        url:'',
        name:'',
        description:''
    }

    const [values, setValues] = useState(initialStateValues)

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({...initialStateValues})
    }

    const handleInputChange = e =>{
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }

    return (
        <form onSubmit={handleSubmit} className="card card-body">
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input 
                    type="text" 
                    name="url" 
                    className="form-control"
                    placeholder="https://someurl.com"
                    onChange={handleInputChange}
                    values={values.url}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="website name"
                    onChange={handleInputChange}
                    values={values.name}
                />
            </div>
            <div className="form-group">
                <textarea 
                    name="description"                      
                    className="form-control" 
                    rows="3"
                    placeholder="Escribe una descripción"
                    onChange={handleInputChange}
                    values={values.description}>              
                </textarea>
            </div>
            <button className="btn btn-primary btn-block">Guardar</button>
        </form>                
    )
}
