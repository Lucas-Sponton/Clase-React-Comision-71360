const Loading = () => {
    return (
        <div className="container my-5 align-middle">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-grow text-success" style={{width: 6 + 'rem', height: 6 + 'rem'}}  role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading