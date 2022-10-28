import React,{useRef} from 'react';

const KattaTanaffus = () => {
    const Daqiqa = useRef();
    const Soniya = useRef();

    var time = 1799;
    var daq = 29;
    var intervalTimer = 0


    return (
        <div className='bg-info w-50 p-5 m-5 mx-auto'>
        <h1 className='text-center bg-dark text-light'>Long Break</h1>
            <div style={{height:"300px",fontSize:"85px"}} className="d-flex justify-content-center shadow bg-light border p-3 rounded-circle w-50 mx-auto">
                <div className="bg-light" ref={Daqiqa}>30:</div>
                <div className="bg-light" ref={Soniya}>00</div>
            </div>
            <div className='w-50 mx-auto d-flex justify-content-around m-5 shadow p-3 '>
                <button className="btn btn-warning border w-25 shadow" onClick={() => {
                    clearInterval(intervalTimer)
                    Soniya.current.innerHTML = (time % 60);
                    Daqiqa.current.innerHTML = (`${daq}:`)
                    intervalTimer = setInterval(() => {
                        function nol() {
                            if (time === 0) {
                                time = time + 1800
                            } else if (daq === 0) {
                                daq = daq + 30
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
                <button className="btn btn-success w-25 shadow border" onClick={() => {
                    clearInterval(intervalTimer)
                }}>Stop</button>
                <button className="btn btn-primary shadow border" onClick={()=>{
                        clearInterval(intervalTimer)
                        time = 1799
                        daq = 29
                        Daqiqa.current.innerHTML = "30:"
                        Soniya.current.innerHTML = "00"
                    }}>Restart</button>
            </div>
        </div>
    );
};

export default KattaTanaffus;