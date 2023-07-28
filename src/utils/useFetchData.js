import { useEffect, useState } from 'react';

const useFetchData = (url) => {
	const [jData, setJData] = useState({});

	useEffect(()=>{
		getDataByUrl();
	}, []);

	async function getDataByUrl() {
		const data = await fetch(url);
		const jsonData = await data.json();
		setJData(jsonData);
	}

  return jData;
}

export default useFetchData;
