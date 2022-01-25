// const BASE_URL = 'http://thatcopy.pw/catapi/rest/';
// const catBtn = document.getElementById('change-cat');

// const getCats = async () => {
//     try {

//         const data = await fetch(BASE_URL);
//         const jason = await data.jason();

//         return jason.webpurl;
        
//     } catch (error) {
//         console.log(error.mensage)
//     }
// };

// const loadImg = async () => {
//     const catImg = document.getElementById('cat')
//     catImg.src = await getCats();
    
// };

// catBtn.addEventListener('click', loadImg);

// loadImg();

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName("cat")[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById("change-cat");
btn.addEventListener("click", loadImg);