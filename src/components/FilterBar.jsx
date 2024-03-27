
export default function FilterBar() {

    return (

        <div className="filterBar">
            <input className='searchInput' type="text" name='location' placeholder='title..'/>
            <select className="locationInput">
                <option value="false">Filter by location…</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Russia">Russia</option>
                <option value="Singapore">Singapore</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
            </select>
            <label className='timeCheckInput'>
                <input type="checkbox" name="fulltime"/>
                <span>Full Time Only</span>
            </label>
            <button className="filterBtn">
                <span>Search</span>
            </button>

        </div>


    )
}