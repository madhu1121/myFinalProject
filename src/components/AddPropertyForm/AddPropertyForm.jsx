import React from 'react'

const AddPropertyForm = () => {
    return (
        <div>
            <form action="">
                <p>List you Property</p>
                <label htmlFor="title">Add a title to your property</label>
                <input type="text"/>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Give your property description here..."></textarea>
                <label htmlFor="accomodationtype">Accomodation Type</label>
                <select name="accomodationtype" id="accomodationtype">
                    <option value="boat">Boat</option>
                    <option value="cruise">Cruise</option>
                    <option value="hut">Hut</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="condo">Condo</option>
                    <option value="treehouse">Tree House</option>
                </select>
                <label htmlFor="noOfRooms">No. of Bedrooms</label>
                <select name="noOfRooms" id="noOfRooms">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                </select>
                <label htmlFor="noOfBathrooms">No. of Bathrooms</label>
                <select name="noOfBathrooms" id="noOfBathrooms">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                </select>
                <label htmlFor="preference">Preference</label>
                <select name="preference" id="preference">
                    <option value="family">Family</option>
                    <option value="couple">Couple</option>
                    <option value="single">Single</option>
                </select>
                <label htmlFor="kindOfPlace">Kind Of Place</label>
                <select name="kindOfPlace" id="kindOfPlace">
                    <option value="beach">beach</option>
                    <option value="mountain">mountain</option>
                    <option value="barn">barn</option>
                    <option value="river">river</option>
                    <option value="desert">desert</option>
                    <option value="backwater">backwater</option>
                    <option value="temples">temples</option>
                    <option value="snow">snow</option>
                    <option value="adventure">adventure</option>
                </select>

                <label htmlFor="title">Area</label>
                <input type="text"/>

                <label htmlFor="title">Price per Night(INR)</label>
                <input type="text"/>

                <label htmlFor="title">Swimming Pool</label>
                <input type="checkbox" name="swimmingpool" id="swimmingpool"/>
                <label htmlFor="title">Pet Friendly</label>
                <input type="checkbox" name="pet" id="pet"/>
                <label htmlFor="title">Hot tubs</label>
                <input type="checkbox" name="hottubs" id="hottubs"/>
                <label htmlFor="title">Children Park</label>
                <input type="checkbox" name="park" id="park"/>
                <label htmlFor="title">Wifi</label>
                <input type="checkbox" name="wifi" id="wifi"/>
                <label htmlFor="title">Breakfast Included</label>
                <input type="checkbox" name="breakfast" id="breakfast"/>
                <label htmlFor="title">Dinner Included</label>
                <input type="checkbox" name="dinner" id="dinner"/>

                <label htmlFor="country">Country</label>
                <select name="country" id="country">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="australia">Australia</option>
                </select>

                <label htmlFor="state">State</label>
                <select name="state" id="state">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="australia">Australia</option>
                </select>

                <label htmlFor="city">city</label>
                <input type="text"/>

                <label htmlFor="address">Address</label>
                <input type="text"/>

                <label htmlFor="photos">Add photos</label>
                <input type="file" name="photo" id="photo"/>

                <button>Add your property</button>
                <button>Cancel</button>

            </form>
        </div>
    )
}

export default AddPropertyForm
