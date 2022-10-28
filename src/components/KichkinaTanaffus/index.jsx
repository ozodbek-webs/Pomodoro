import React, { useRef } from 'react';

const KichikTanaffus = () => {

    const Daqiqa = useRef();
    const Soniya = useRef();
    const audioddd =useRef();
    var time = 299;
    var daq = 4;
    var intervalTimer = 0
    return (
        <div>
            <div className='bg-warning w-50 p-5 m-5 mx-auto'>
                <h1 className='text-center bg-dark text-light'>Short Break</h1>
                <div style={{height:"300px",fontSize:"110px"}} className="rounded-circle w-50 mx-auto d-flex justify-content-center p-3 shadow bg-light">
                    <div className="bg-light" ref={Daqiqa}>5:</div>
                    <div className="bg-light" ref={Soniya}>00</div>
                </div>
                <div className='w-50 mx-auto d-flex justify-content-around m-5 shadow p-3'>
                    <button className="btn btn-info border w-25 shadow" onClick={() => {
                        clearInterval(intervalTimer)
                        Daqiqa.current.innerHTML = daq+":";
                        Soniya.current.innerHTML = (time % 60);
                        intervalTimer = setInterval(() => {
                            function nol() {
                                if (time === 0) {
                                    time = time + 300;
                                } else if (daq === 0) {
                                    daq = daq + 5;
                                }
                                else {
                                    time = time - 1
                                    Soniya.current.innerHTML = (time % 60);
                                    if (time % 60 === 0) {
                                        Soniya.current.innerHTML = ("59");
                                        Daqiqa.current.innerHTML = (`${daq -= 1}:`);
                                    }
                                }
                            }
                            nol()
                        }, 1000);
                    }}>Play</button>
                    <button className="btn btn-success w-25 border shadow" onClick={() => {
                        clearInterval(intervalTimer)
                    }}>Stop</button>
                    <button className="btn btn-primary shadow border" onClick={()=>{
                        clearInterval(intervalTimer)
                        time = 299
                        daq = 4
                        Daqiqa.current.innerHTML = "5:"
                        Soniya.current.innerHTML = "00"
                    }}>Restart</button>
                </div>
                <div className="audio"  ref={audioddd}>
                </div>
            </div>
        </div>
    );
};

export default KichikTanaffus;