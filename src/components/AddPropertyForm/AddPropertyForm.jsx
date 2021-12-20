import React from 'react'
import './AddPropertyForm.scss'

const AddPropertyForm = () => {

    const handleOnSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8080/addProperty`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
           
            body: JSON.stringify({
                
                    "title": "property2",
                    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, sint neque alias dolorem beatae veniam doloribus inventore aliquid ipsam enim sequi tempore aperiam similique quidem, repudiandae minima ipsum. Necessitatibus, enim!",
                    "type": "townhouse",
                    "bedrooms": 2,
                    "bathrooms": 2,
                    "preference": "family",
                    "place": "beach",
                    "areaInSqFt": 647.9,
                    "price": 6000.00,
                    "pool": true,
                    "petFriendly": true,
                    "hotTub": true,
                    "childrenPark": true,
                    "wifi": true,
                    "breakfast": true,
                    "dinner": true,
                    "country": "India",
                    "state": "Odisha",
                    "city": "Sambalpur",
                    "address": "test hgfdd udfd 12345",
                    "photoUrl": "https://photos.app.goo.gl/G5R1sjUNvCKkHXSw8"
                
            })
          })
          .then((response) => response.json())
          .then((text => console.log(text)))
          .catch(err => console.log(err))
        } 

    
    return (
        <div className="add">
            <form action="submit" className="addForm" onSubmit={handleOnSubmit}>
                <p className="addForm__child">List you Property</p>
                <div className="addForm__child">
                <label htmlFor="title">Add a title to your property</label>
                <input type="text"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Give your property description here..."></textarea>
                </div>

                <div className="addForm__child">
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
                </div>

                <div className="addForm__child">
                <label htmlFor="noOfRooms">No. of Bedrooms</label>
                <select name="noOfRooms" id="noOfRooms">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                </select>
                </div>

                <div className="addForm__child">
                <label htmlFor="noOfBathrooms">No. of Bathrooms</label>
                <select name="noOfBathrooms" id="noOfBathrooms">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                </select>
                </div>

                <div className="addForm__child">
                <label htmlFor="preference">Preference</label>
                <select name="preference" id="preference">
                    <option value="family">Family</option>
                    <option value="couple">Couple</option>
                    <option value="single">Single</option>
                </select>
                </div>

                <div className="addForm__child">
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
                </div>

                <div className="addForm__child">
                <label htmlFor="title">Area</label>
                <input type="text"/>
                </div>
                

                <div className="addForm__child">
                <label htmlFor="title">Price per Night(INR)</label>
                <input type="text"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="title">Swimming Pool</label>
                <input type="checkbox" name="swimmingpool" id="swimmingpool"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="title">Pet Friendly</label>
                <input type="checkbox" name="pet" id="pet"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="title">Hot tubs</label>
                <input type="checkbox" name="hottubs" id="hottubs"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="title">Children Park</label>
                <input type="checkbox" name="park" id="park"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="title">Wifi</label>
                <input type="checkbox" name="wifi" id="wifi"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="title">Breakfast Included</label>
                <input type="checkbox" name="breakfast" id="breakfast"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="title">Dinner Included</label>
                <input type="checkbox" name="dinner" id="dinner"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="country">Country</label>
                <select name="country" id="country">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="australia">Australia</option>
                </select>
                </div>

                <div className="addForm__child">
                <label htmlFor="state">State</label>
                <select name="state" id="state">
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="australia">Australia</option>
                </select>
                </div>

                <div className="addForm__child">
                <label htmlFor="city">city</label>
                <input type="text"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="address">Address</label>
                <input type="text"/>
                </div>

                <div className="addForm__child">
                <label htmlFor="photos">Add photos</label>
                <input type="file" name="photo" id="photo"/>
                </div>

                <div className="addForm__child">
                <button onClick={handleOnSubmit}>Add your property</button>
                <button>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddPropertyForm
