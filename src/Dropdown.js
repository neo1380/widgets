/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectionChange, label }) => {
	const [open, setOpen] = useState(false);
	const colorValue = selected.value;

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div key={option.value} className="item" onClick={() => onSelectionChange(option)}>
				{option.label}
			</div>
		);
	});

	return (
		<React.Fragment>
			<div className="ui form">
				<div className="field">
					<label className="label">{label}</label>
					<div
						onClick={() => setOpen(!open)}
						className={`ui selection dropdown ${open ? 'visible active' : ''}`}
					>
						<i className="dropdown icon"></i>
						<div className="text">{selected.label}</div>
						<div className=" visible transition" className={`menu ${open ? 'visible transition' : ''}`}>
							{renderedOptions}
						</div>
					</div>
				</div>
			</div>
			<div style={{ color: colorValue }}>this text is {selected.value}</div>
		</React.Fragment>
	);
};

export default Dropdown;
