import React, {useState} from 'react';

const DelMethodForm = () => {
    const [methodRoute, setMethodRoute] = useState("");

    return (
        <div className="container col-5 my-4">
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Route" value={methodRoute}
                       onChange={event => setMethodRoute(event.target.value)}/>
            </div>
            <div className="mb-3 text-center">
                <button className="col-5 btn btn-danger">
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default DelMethodForm;