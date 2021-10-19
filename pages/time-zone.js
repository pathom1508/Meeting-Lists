function TimeZone() {
    return(
        <div className="col-75">
            <select className="duration-gap">
            <option value="1">Select your time zone</option>
            <option value="2">(GMT-7) California Time-Los Angeles</option>
            <option value="2">(GMT-4) United States Time-New York</option>
            <option value="3">(GMT+1) United Kingdom Time-London</option>
            <option value="4">(GMT+2) France Time-Paris</option>
            <option value="">(GMT+3) Russia Time-Moscow</option>
            <option value="">(GMT+7) Indochina Time-Bangkok</option>
            <option value="6">(GMT+8) China  Time-Beijing</option>
            <option value="">(GMT+9) Japan Time-Tokyo</option>
        </select>
        </div>
    )
}

export default TimeZone