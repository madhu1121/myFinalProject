import React, { useState } from 'react'
import './AddProperty.scss'
import AddPropertyForm from '../AddPropertyForm/AddPropertyForm'
const AddProperty = () => {

    const [showAddProperty,setShowAddProperty] = useState(false);

    const showAddPropertyForm = () => {
        setShowAddProperty(!showAddProperty)
    }


    return (
        <>
        <div className="addProperty" onClick={showAddPropertyForm}>
            Host Your Property
        </div>

        {
            showAddProperty && <AddPropertyForm />
        }
        </>
    )
}

export default AddProperty
