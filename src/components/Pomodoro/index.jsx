import React, { useRef, useEffect } from 'react';

const Pomodoro = () => {
    const Daqiqa = useRef();
    const Soniya = useRef();

    var time = 1499;
    var daq = 24;
    var intervalTimer = 0


    return (
        <div className='bg-success w-50 p-5 m-5 mx-auto shadow'>
        <h1 className='text-center bg-dark text-light'>Pomodoro</h1>
            <div style={{height:"300px",fontSize:"85px"}}  className="d-flex justify-content-center shadow p-3 bg-light rounded-circle w-50 mx-auto">
                <div className="bg-light" ref={Daqiqa}>25:</div>
                <div className="bg-light" ref={Soniya}>00</div>
            </div>
            <div className='w-50 mx-auto d-flex justify-content-around m-5 shadow p-3'>
                <button className="btn btn-info border shadow w-25 playBtn" onClick={(e) => {
                    clearInterval(intervalTimer)
                    Soniya.current.innerHTML = (time % 60);
                    Daqiqa.current.innerHTML = (`${daq}:`)
                    intervalTimer = setInterval(() => {
                        function nol() {
                            if (time === 0) {
                                time =time + 1500
                            } else if (daq === 0) {
                                daq = daq + 24
                            }
                            else {
                                time = time - 1
                                Soniya.current.innerHTML = (time % 60);
                                if (time % 60 === 0) {
                                    Daqiqa.current.innerHTML = (`${daq = daq - 1}:`);
                                }
                            }
                        }
                        nol()
                    }, 1000);
                }}>Play</button>
                <button className="btn btn-warning border shadow w-25" onClick={() => {
                    clearInterval(intervalTimer)
                }}>Stop</button>
                <button className="btn btn-primary shadow border" onClick={()=>{
                        clearInterval(intervalTimer)
                        time = 1499
                        daq = 24
                        Daqiqa.current.innerHTML = "25:"
                        Soniya.current.innerHTML = "00"
                    }}>Restart</button>
            </div>
        </div>
    );
};

export default Pomodoro;