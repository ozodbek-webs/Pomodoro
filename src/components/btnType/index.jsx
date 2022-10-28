import React from 'react';
import { NavLink } from "react-router-dom";

const BtnType = () => {
    return (
        <>
            <div className='col-6 col-md-4 mx-auto d-flex justify-content-around mt-5'>
                <NavLink
                    to="/"
                >
                    <button className="btn btn-success">Pomodoro</button>
                </NavLink>
                <NavLink
                    to="/kichikTanaffus"
                >
                    <button className="btn btn-warning">Short Break</button>
                </NavLink>
                <NavLink
                    to="/kattaTanaffus"
                >

                    <button className="btn btn-info">Long Break</button>

                </NavLink>
            </div>
        </>
    );
};

export default BtnType;