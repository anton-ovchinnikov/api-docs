import React from 'react';
import classes from "./MethodItem.module.css";
import {delMethod} from "../../../database/methods";

const MethodItem = ({method, methodId}) => {
    return (
        <div className="accordion mb-3">
            <div className="accordion-item">
                <h2 className={`${classes.header} accordion-header`}>
                    <div className="accordion-button collapsed" itemType="button"
                         data-bs-toggle="collapse" data-bs-target={`#flush-${methodId}`}
                         aria-expanded="false"
                         aria-controls={`flush-${methodId}`}>
                        {method['type'] === 'POST' ? <span className="btn btn-success" itemType="alert">POST</span> :
                            <span className="btn btn-success" itemType="alert">POST</span>}
                        &emsp;
                        <span className={classes.header_info}>
                            <b>{method['route']}</b>
                            &emsp;
                            <span className={classes.title}>{method['name']}</span>
                        </span>
                    </div>
                </h2>
                <div id={`flush-${methodId}`} className="accordion-collapse collapse">
                    <div className="accordion-body p-0 m-0">
                        <div
                            className={`${classes.description} row p-4 py-3 m-0 align-items-center d-flex justify-content-between`}>
                            {method['description']}
                            <button className="col-1 btn btn-outline-danger"
                                    onClick={async () => await delMethod(methodId)}>DEL
                            </button>
                        </div>
                        <div className={`${classes.description} row p-4 py-3 m-0`}>{method['parameters']}</div>
                        <div className="row p-4 py-3 m-0">Body</div>
                        <div className={`${classes.code} row p-4 py-4 m-0`}>
                            <pre>{JSON.stringify(JSON.parse(method['body']), null, 2)}</pre>
                        </div>
                        <div className="row p-4 py-3 m-0">Response</div>
                        <div className={`${classes.code} row p-4 py-4 m-0`}>
                            <pre>{JSON.stringify(JSON.parse(method['response']), null, 2)}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MethodItem;