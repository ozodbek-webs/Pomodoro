import React, { useRef, useEffect } from 'react';

const GetHour = () => {
    const getHour = useRef()
    function get() {
        const Hour = new Date().getHours()
        const Minute = new Date().getMinutes()
        const Second = new Date().getSeconds()
        getHour.current.innerHTML = `${Hour}:${Minute}:${Second}`

    }
    useEffect(() => {
        setInterval(() => {
            get()
        }, 1000);
    });
    return (
        <div>
            <div className='bg-success w-50 p-5 m-5 mx-auto shadow'>
                <div className="d-flex justify-content-center shadow p-3 bg-light ">
                    <div className="bg-light" ref={getHour}>00:00:00</div>
                </div>
            </div>
        </div>
    );
};

export default GetHour;