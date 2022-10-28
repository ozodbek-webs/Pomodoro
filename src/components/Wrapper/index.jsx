import React from 'react';
import KattaTanaffus from '../KattaTanaffus';
import KichikTanaffus from '../KichkinaTanaffus';
import BtnType from "../btnType"
import Pomodoro from '../Pomodoro';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import GetHour from '../GetHour';

const Wrapper = () => {
    return (
        <>
        <BtnType/>
            <Routes>

                <Route path="/" element={<Pomodoro />} />
                <Route path="KichikTanaffus" element={<KichikTanaffus />} />
                <Route path="KattaTanaffus" element={<KattaTanaffus />} />
            </Routes>
        <GetHour/>
        </>

    );
};

export default Wrapper;