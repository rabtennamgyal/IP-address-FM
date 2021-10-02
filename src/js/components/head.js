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
                
            </div>
        </div>
    )
}

export default Head