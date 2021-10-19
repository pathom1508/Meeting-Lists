function Duration() {
    return(
        <div className="col-75">
            <div>
                <select className="duration-gap">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                    <option value="3">7</option>
                    <option value="3">8</option>
                    <option value="3">9</option>
                    <option value="3">10</option>
                    <option value="3">11</option>
                    <option value="3">12</option>
                </select>
                <a>Hr</a>
                <select className="duration-gap">
                    <option value="1">0</option>
                    <option value="1">5</option>
                    <option value="2">10</option>
                    <option value="3">15</option>
                    <option value="3">20</option>
                    <option value="3">25</option>
                    <option value="3">30</option>
                    <option value="3">35</option>
                    <option value="3">40</option>
                    <option value="3">45</option>
                    <option value="3">50</option>
                    <option value="3">55</option>
                </select>
                <a>min</a>
            </div>
       
        </div>
    )
}

export default Duration