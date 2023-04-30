import React, {useState} from 'react';
import classes from "./MethodActions.module.css";
import AddMethodForm from "../UI/Forms/AddMethodForm";
import DelMethodForm from "../UI/Forms/DelMethodForm";

const MethodActions = () => {
    const [showAddMethodForm, setShowAddMethodForm] = useState(false);
    const [showDelMethodForm, setShowDelMethodForm] = useState(false);

    return (
        <>
            <div className="container mt-4 d-flex justify-content-end">
                <button className={`${classes.method_button} btn btn-info mx-2`}
                        onClick={() => {
                            if (showDelMethodForm) setShowDelMethodForm(!showDelMethodForm);
                            setShowAddMethodForm(!showAddMethodForm);
                        }}>+
                </button>
                <button className={`${classes.method_button} btn btn-danger`}
                        onClick={() => {
                            if (showAddMethodForm) setShowAddMethodForm(!showAddMethodForm);
                            setShowDelMethodForm(!showDelMethodForm);
                        }}>x
                </button>
            </div>
            {
                showAddMethodForm
                    ?
                    <AddMethodForm/>
                    :
                    null
            }
            {
                showDelMethodForm
                    ?
                    <DelMethodForm/>
                    :
                    null
            }
        </>
    );
};

export default MethodActions;