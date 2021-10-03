function Head() {
    return (
        <div className='head'>
            <h1>
                IP Address Tracker
            </h1>

            <form>
                <input id='ipInput' placeholder='  Search for any IP address or domain' />
                <button>
                    &rarr;
                </button>
            </form>

            <div className='card'>
                <div className='content'>
                    <h3>
                        IP ADDRESS
                    </h3>
                    <p>
                        112.233.222.121
                    </p>
                </div>
                <div className='content'>
                    <h3>
                        LOCATION
                    </h3>
                    <p>
                        Queens, NY 11377
                    </p>
                </div>
                <div className='content'>
                    <h3>
                        TIMEZONE
                    </h3>
                    <p>
                        UTC-500
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