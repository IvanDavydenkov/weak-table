import React, { useState } from 'react'
import '../styles.css'
import Item from './Item'
import Editor from './Editor'

export default function App() {
	const [data, setData] = useState({})
	const [selectedCell, setSelectedCell] = useState(null)
	const [rows, setRows] = useState([0])
	const [columns, setColumns] = useState([0])
	
	const handleColumnAdd = () => {
		setColumns([...columns, columns.length])
	}
	
	const handleRowAdd = () => {
		setRows([...rows, rows.length])
	}
	
	const handleCellClick = (cell) => {
		setSelectedCell(cell)
	}
	
	const handleSave = (value) => {
		if (selectedCell) {
			const updatedData = { ...data }
			updatedData[selectedCell] = value
			setData(updatedData)
			setSelectedCell(null)
		}
	}
	
	return (
		<div className='App'>
			<h1>Таблица</h1>
			<Editor text={selectedCell ? data[selectedCell] : ''} onSave={handleSave} />
			<div className='list'>
				<div className='header'>
					{columns.map((j) => (
						<div className='column' key={j}>
							{j}
						</div>
					))}
					<button className='column-add' onClick={handleColumnAdd}>
						+
					</button>
				</div>
				{rows.map((i) => (
					<div className='row' key={i}>
						<div className='row-index'>{i}</div>
						{columns.map((j) => (
							<Item
								key={`${i}-${j}`}
								selected={selectedCell === `${i}-${j}`}
								onClick={() => handleCellClick(`${i}-${j}`)}
								value={data[`${i}-${j}`] || ''}
							/>
						))}
					</div>
				))}
				<div className='row'>
					<button className='row-add' onClick={handleRowAdd}>
						+
					</button>
				</div>
			</div>
		</div>
	)
}
