
function ManualPost(props) {
    const { manual, onBgClick } = props;
    return(   
        <div className="manual-post">
            <div className="manual-post-bg" onClick={onBgClick}/>
            <div className="manual-post-content">
                <img src={manual.thumbnailUrl}/>
            </div>
        </div>
    )
}

export default ManualPost
