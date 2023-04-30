import React from 'react';
import MethodsList from "../../components/MethodsList/MethodsList";
import MethodActions from "../../components/MethodActions/MethodActions";

const HomePage = () => {
    return (
        <>
            <MethodActions/>
            <MethodsList/>
        </>
    );
};

export default HomePage;