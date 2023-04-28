import React from 'react';
import classes from "./MethodItem.module.css";

const MethodItem = () => {
    return (
        <div className="accordion mb-3">
            <div className="accordion-item">
                <h2 className={`${classes.header} accordion-header`}>
                    <div className="accordion-button collapsed" itemType="button"
                         data-bs-toggle="collapse" data-bs-target="#flush-Авторизация_мерча" aria-expanded="false"
                         aria-controls="flush-Авторизация_мерча">
                        <span className="btn btn-success" itemType="alert">POST</span>
                        &emsp;
                        <span className={classes.header_info}>
                            <b>https://merch-api.yooyo.ru/auth</b>
                            &emsp;
                            <span className={classes.title}>Авторизация мерча</span>
                        </span>
                    </div>
                </h2>
                <div id="flush-Авторизация_мерча" className="accordion-collapse collapse">
                    <div className="accordion-body p-0 m-0">
                        <div className={`${classes.description} row p-4 py-3 m-0`}>
                            Авториазция мерча. В ответе получаем куки с токенами и сохраняем их
                        </div>
                        <div className={`${classes.description} row p-4 py-3 m-0`}>Передать device-id</div>
                        <div className="row p-4 py-3 m-0">Body</div>
                        <div className={`${classes.code} row p-5 py-4 m-0`}>
                            bodyyy
                        </div>
                        <div className="row p-4 py-3 m-0">Response</div>
                        <div className={`${classes.code} row p-5 py-4 m-0`}>
                            resp
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MethodItem;