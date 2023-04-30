import React, {useEffect, useState} from 'react';
import MethodItem from "./MethodItem/MethodItem";
import {getAllMethods} from "../../database/methods";

const MethodsList = () => {
    const [methods, setMethods] = useState({});

    useEffect(() => {
        getAllMethods(setMethods);
    }, []);

    return (
        <div className="container my-4">
            {methods ? Object.keys(methods).map(key => <MethodItem key={key} method={methods[key]}
                                                                   methodId={key}/>) : null}
        </div>
    );
};

export default MethodsList;