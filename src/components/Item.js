import React, { useRef } from 'react'

const Item = ({ selected, onClick, value }) => {
	const itemRef = useRef(null)
	
	const handleClick = () => {
		onClick()
	}
	
	const handleItemClick = () => {
		itemRef.current.focus()
	}
	
	return (
		<div
			className={`item ${selected ? 'item_selected' : ''}`}
			onClick={handleClick}
			tabIndex={0}
			ref={itemRef}
			onFocus={handleItemClick}
		>
			{value}
		</div>
	)
}

export default Item
