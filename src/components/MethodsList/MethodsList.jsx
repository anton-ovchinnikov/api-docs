import React from 'react';
import MethodItem from "./MethodItem/MethodItem";

const MethodsList = () => {
    const methods = {
        "-NU7n4bPEPmzPjczsDrC": {
            "body": "{\"email\": \"1\",\"password\": \"2\",}",
            "description": "description",
            "name": "name",
            "parameters": "parameters",
            "response": "{\"code\": 200,\"message\": \"Успех!\",}",
            "route": "https://route.ru",
            "section": "section",
            "type": "POST"
        },
        "-NU7nLEI_hzRET9V4pK6": {
            "body": "{\"login\": \"1\",\"password\": \"2\",}",
            "description": "description",
            "name": "name",
            "parameters": "parameters",
            "response": "{\"code\": 200,\"message\": \"Успех!\",}",
            "route": "https://route.com",
            "section": "section",
            "type": "GET"
        }
    }
    let method_ids = Object.keys(methods);

    return (
        <div className="container my-4">
            {method_ids.map(key => <MethodItem key={key} method={methods[key]} id={key}/>)}
        </div>
    );
};

export default MethodsList;