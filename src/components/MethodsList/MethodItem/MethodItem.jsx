import React from 'react';
import classes from "./MethodItem.module.css";

const MethodItem = ({method, id}) => {
    return (
        <div className="accordion mb-3">
            <div className="accordion-item">
                <h2 className={`${classes.header} accordion-header`}>
                    <div className="accordion-button collapsed" itemType="button"
                         data-bs-toggle="collapse" data-bs-target={`#flush-${id}`}
                         aria-expanded="false"
                         aria-controls={`flush-${id}`}>
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
                <div id={`flush-${id}`} className="accordion-collapse collapse">
                    <div className="accordion-body p-0 m-0">
                        <div className={`${classes.description} row p-4 py-3 m-0`}>
                            {method['description']}
                        </div>
                        <div className={`${classes.description} row p-4 py-3 m-0`}>{method['parameters']}</div>
                        <div className="row p-4 py-3 m-0">Body</div>
                        <div className={`${classes.code} row p-5 py-4 m-0`}>
                            {method['body']}
                        </div>
                        <div className="row p-4 py-3 m-0">Response</div>
                        <div className={`${classes.code} row p-5 py-4 m-0`}>
                            {method['response']}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MethodItem;