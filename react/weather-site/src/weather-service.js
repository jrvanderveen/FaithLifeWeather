import axios from 'axios';

const Data = {
	dateTime: Date.now,
	city: '',
	description: '',
	kind: '',
	temperature: -999,
	rain: true,
	error: false,
};

var searchString = '';
export function getCurrentConditions(location, searchType) {
	if(searchType === 1){
		searchString = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=77274e0a74010d0171e3d0c49b67b97a`;
	}
	else{
		let lat = location.coords.latitude;
		let lon = location.coords.longitude;
		searchString = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=77274e0a74010d0171e3d0c49b67b97a`;
	}
	axios.get(searchString)
	.then(res => {
		Data.city = res.data.name;
		Data.description = res.data.weather[0].description
		if(res.data.weather[0].main === "Rain"){
			Data.rain = true;
		}
		else{
			Data.rain = false;
		}
		Data.temperature = res.data.main.temp;
		Data.error = false;
	})
	.catch((error) => {
			console.log(error)
			Data.city = `City ${location} not found`;
			Data.description = '0';
			Data.temperature = 0;
			Data.error = true;
	});
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Data);
		}, 2000);
	});
}
