import React, { useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	useEffect(() => {
		axios.post(
			'https://translation.googleapis.com/language/translate/v2',
			{},
			{
				params: {
					q: text,
					target: language.value,
					key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms',
				},
			}
		);
	}, [text, language]);

	return (
		<div>
			<h1>{language.label}</h1>
			<h1>{text}</h1>
		</div>
	);
};

export default Convert;
