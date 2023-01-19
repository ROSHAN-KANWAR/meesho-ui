import React from 'react'
import { GlobalProductContext } from '../Context/Productcontext'
import ContextcartList from './ContextcartList'
const AddtocartList = () => {
	 const {name}= GlobalProductContext()
	return (
		<>
		{name}
		<ContextcartList/>
    </>
	)
}

export default AddtocartList