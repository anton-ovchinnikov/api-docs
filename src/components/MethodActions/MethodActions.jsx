import React, {useState} from 'react';
import classes from "./MethodActions.module.css";
import AddMethodForm from "../UI/Forms/AddMethodForm";

const MethodActions = () => {
    const [showAddMethodForm, setShowAddMethodForm] = useState(false);

    return (
        <>
            <div className="container mt-4 d-flex justify-content-end">
                <button className={`${classes.method_button} btn btn-info`}
                        onClick={() => setShowAddMethodForm(!showAddMethodForm)}>+
                </button>
            </div>
            {
                showAddMethodForm
                    ?
                    <AddMethodForm/>
                    :
                    null
            }
        </>
    );
};

export default MethodActions;