import React, {useState} from 'react'

function Head() {
    const key = 'at_thlcm3xUn3yX6VJEmvJnNMKnNPc4B'
    const [value, setvalue] = useState('')
    const [IPdata, SetIPData] = useState({});
    let regex = /\d/

    async function getIp() {
        const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${value}`);
        const data = await response.json();
        console.log(data)
        console.log(IPdata)
        SetIPData(data)
    }

    function logg(e) {
        e.preventDefault()
        let arr = value.split('').filter(el => el.match(regex))

        if (arr.length === 0) {
            console.log('Not a valid IP Address')
        } else {
            getIp()
            setvalue('')
        }
    }

    return (
        <div className='head'>
            <h1>
                IP Address Tracker
            </h1>

            <form>
                <input value={value} onInput={e => setvalue(e.target.value)} id='ipInput' placeholder='  Search for any IP address or domain' />
                <button onClick={logg}>
                    &rarr;
                </button>
            </form>

            <div className='card'>
                <div className='content'>
                    <h3>
                        IP ADDRESS
                    </h3>
                    <p>

                    </p>
                </div>
                <div className='content'>
                    <h3>
                        LOCATION
                    </h3>
                    <p>

                    </p>
                </div>
                <div className='content'>
                    <h3>
                        TIMEZONE
                    </h3>
                    <p>
                        UTC-05:00
                    </p>
                </div>
                <div className='content'>
                    <h3>
                        ISP
                    </h3>
                    <p>
                        SpaceX, Starlink
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Head