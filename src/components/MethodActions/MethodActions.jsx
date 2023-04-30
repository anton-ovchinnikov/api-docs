import React, {useState} from 'react';
import classes from "./MethodActions.module.css";
import AddMethodForm from "../UI/Forms/AddMethodForm";

const MethodActions = () => {
    const [showAddMethodForm, setShowAddMethodForm] = useState(false);
    const [showDelMethodForm, setShowDelMethodForm] = useState(false);

    return (
        <>
            <div className="container mt-4 d-flex justify-content-end">
                <button className={`${classes.method_button} btn btn-info mx-2`}
                        onClick={() => setShowAddMethodForm(!showAddMethodForm)}>+
                </button>
                <button className={`${classes.method_button} btn btn-danger`}
                        onClick={() => setShowDelMethodForm(true)}>x
                </button>
            </div>
            {
                showAddMethodForm
                    ?
                    <AddMethodForm/>
                    :
                    null
            }
            {/*{*/}
            {/*    showDelMethodForm*/}
            {/*        ?*/}
            {/*        <DelMethodModal/>*/}
            {/*        :*/}
            {/*        null*/}
            {/*}*/}
        </>
    );
};

export default MethodActions;