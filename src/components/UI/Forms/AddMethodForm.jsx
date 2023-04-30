import React, {useState} from 'react';
import {addNewMethod} from "../../../database/methods";

const AddMethodForm = () => {
    const initialState = {
        route: "",
        parameters: "",
        name: "",
        description: "",
        body: "",
        response: "",
        section: "",
        type: "POST"
    };
    const [formInfo, setFormInfo] = useState(initialState);

    return (
        <div className="container col-5 my-4">
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Route" value={formInfo['route']}
                       onChange={event => setFormInfo({...formInfo, route: event.target.value})}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Parameters" value={formInfo['parameters']}
                       onChange={event => setFormInfo({...formInfo, parameters: event.target.value})}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" value={formInfo['name']}
                       onChange={event => setFormInfo({...formInfo, name: event.target.value})}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Description" value={formInfo['description']}
                       onChange={event => setFormInfo({...formInfo, description: event.target.value})}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Body" value={formInfo['body']}
                       onChange={event => setFormInfo({...formInfo, body: event.target.value})}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Response" value={formInfo['response']}
                       onChange={event => setFormInfo({...formInfo, response: event.target.value})}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Section" value={formInfo['value']}
                       onChange={event => setFormInfo({...formInfo, section: event.target.value})}/>
            </div>
            <div className="mb-3">
                <select className="form-select" aria-label="Default select example" value={formInfo['type']}
                        onChange={event => setFormInfo({...formInfo, type: event.target.value})}>
                    <option value="POST">POST</option>
                    <option value="GET">GET</option>
                </select>
            </div>
            <div className="mb-3 text-center">
                <button className="col-5 btn btn-primary" onClick={async () => await addNewMethod(formInfo)}>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default AddMethodForm;