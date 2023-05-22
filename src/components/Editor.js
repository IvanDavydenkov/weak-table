import React, { useEffect, useRef, useState } from 'react'

const Editor = ({ text, onSave }) => {
	const [inputValue, setInputValue] = useState('')
	
	const inputRef = useRef(null)
	
	useEffect(() => {
		setInputValue(text)
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [text])
	
	const handleInputChange = (event) => {
		setInputValue(event.target.value)
	}
	
	const handleSaveClick = (event) => {
		event.preventDefault()
		onSave(inputValue)
		setInputValue('')
		setTimeout(() => {
			inputRef.current.blur()
		}, 10)
	}
	
	return (
		<form className='editor' onSubmit={handleSaveClick}>
			<input ref={inputRef} value={inputValue || ''} onChange={handleInputChange} />
			<button>Сохранить</button>
		</form>
	)
}

export default Editor
