import moment from "moment";


const isDateAPrecedenteDateB = (dateA, dateB = '2023-06-20') => {
	const momentA = moment(dateA);
	const momentB = moment(dateB);
	
	return momentA.isBefore(momentB);
}


const getRandomImage = () => {
	const fileNames = [
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg',
		'4.jpg',
		'5.jpg',
	];
	const randomIndex = Math.floor(Math.random() * fileNames.length);
	const imageName = fileNames[randomIndex];
	
	return imageName;
};

const getSobstituteImage = (content) => {
	
	let immagineSostitutiva = content.data.immagine_principale[0].immagine.url;
	
	let categoria = content.data.categoria.slug;
	let dataUltimaPubblicazione = content.last_publication_date;
	
	console.log('dataUltimaPubblicazione', dataUltimaPubblicazione)
	
	console.log('categoria', categoria)
	
	
	if (content && isDateAPrecedenteDateB(dataUltimaPubblicazione)){
		let imageName = getRandomImage();
		
		let imagePath = '/images/' + categoria + '/' + imageName;
		
		immagineSostitutiva = 'https://img.gs/wvftzjtfrz/1000x500,crop=auto/https://www.burocraziafacile.it/' + imagePath;
		
		//immagineSostitutiva = imagePath;
			
	}
	
	console.log('immagineSostitutiva', immagineSostitutiva)
	
	
	return immagineSostitutiva;
	
}

export {isDateAPrecedenteDateB, getRandomImage, getSobstituteImage};