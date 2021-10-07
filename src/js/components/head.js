import React, {useState} from 'react'


function Head({setlat, setlng}) {
    const key = 'at_thlcm3xUn3yX6VJEmvJnNMKnNPc4B'
    const [value, setvalue] = useState()
    let regex = /\d/
    // All the variables below will be assigned values from the JSON
    let ip, city, region, timezone, code, isp, lat, lng


    async function getIp() {
        const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${value}`).then(response => 
            response.json().then(response => {
                ip = response.ip
                city = response.location.city
                region = response.location.region
                timezone = response.location.timezone
                code = response.location.postalCode
                isp = response.isp
                lat = response.location.lat
                lng = response.location.lng

                let one = document.getElementById('one')
                one.innerText = ip
                let two = document.getElementById('two')
                two.innerText = `${city}, ${region} ${code}`
                let three = document.getElementById('three')
                three.innerText = `UTC ${timezone}`
                let four = document.getElementById('four')
                four.innerText = `${isp}`

                setlat(lat)
                setlng(lng)
            }).catch(err => {
                throw new Error(err)
            })
        )
        // const response = await response.json().then(response => {
        //     ip = response.ip
        //     city = response.location.city
        //     region = response.location.region
        //     timezone = response.location.timezone
        //     code = response.location.postalCode
        //     isp = response.isp
        //     lat = response.location.lat
        //     lng = response.location.lng

        //     let one = document.getElementById('one')
        //     one.innerText = ip
        //     let two = document.getElementById('two')
        //     two.innerText = `${city}, ${region} ${code}`
        //     let three = document.getElementById('three')
        //     three.innerText = `UTC ${timezone}`
        //     let four = document.getElementById('four')
        //     four.innerText = `${isp}`

        //     setlat(lat)
        //     setlng(lng)
        // }).catch(err => {
        //     throw new Error(err)
        // })
    }

    function logg(e) {
        e.preventDefault()
        let arr = value.split('').filter(el => el.match(regex))

        if (arr.length === 0) {
            console.log('Not a valid IP Address')
            setvalue('')
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
                    <i className="fas fa-angle-right"></i>
                </button>
            </form>

            <div className='card'>
                <div className='content'>
                    <h3>
                        IP ADDRESS
                    </h3>

                    <div className='box'>
                        <p id='one'>
                            
                        </p>
                    </div>
                </div>
                <div className='content'>
                    <h3>
                        LOCATION
                    </h3>

                    <div className='box'>
                        <p id='two'>
                            
                        </p>
                    </div>
                </div>
                <div className='content'>
                    <h3>
                        TIMEZONE
                    </h3>

                    <div className='box'>
                        <p id='three'>
    
                        </p>
                    </div>
                </div>
                <div className='content'>
                    <h3>
                        ISP
                    </h3>
                    
                    <div className='box'>
                        <p id='four'>
    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head