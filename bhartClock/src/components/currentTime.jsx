let time = new Date()
let CurrentTime = () => {

    return <p className="lead">Current date and time is here -: {time.toLocaleTimeString()} - {time.toLocaleDateString()}  </p>
}

export default CurrentTime;
