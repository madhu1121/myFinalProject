import React, { useState } from 'react'
import './AddProperty.scss'
import AddPropertyForm from '../AddPropertyForm/AddPropertyForm'
import { Link } from 'react-router-dom'

const AddProperty = () => {

    return (
        <>
            <Link className="addProperty" to="/addproperty">
                <div>
                    Host Your Property
                </div>
            </Link>
        </>
    )
}

export default AddProperty
