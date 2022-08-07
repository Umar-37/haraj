
export async function GET() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const json = await res.json()
	return {
		body: {
			name: 'ipone',
			price: 123,
		}
	}
}

//////////
// @ts-ignore
export async function POST({ request }) {

	let form = await request.formData();
	let url = form.get('pokemon');
	// 
	let adNumber = null;
	let json;
	if (url.startsWith("https://haraj.com.sa/11")) {
		//do the thing

		let urlBreak = url.split('/')
		adNumber = urlBreak[3].slice(2)

		const objDetails = {

			"method": "POST",
			"headers": {
				"Content-Type": "text/plain; charset=utf-8",
			},
			"body": `{\"query\":\"query($ids:[Int]) { posts( id:$ids) {\\n\\t\\titems {\\n\\t\\t\\tid status authorUsername title city postDate updateDate hasImage thumbURL authorId bodyTEXT city tags imagesList commentStatus commentCount upRank downRank geoHash\\n\\t\\t}\\n\\t\\tpageInfo {\\n\\t\\t\\thasNextPage\\n\\t\\t}\\n\\t\\t} }\",\"variables\":{\"ids\":[${adNumber}]}}`,
		}
		const res = await fetch("https://graphql.haraj.com.sa", objDetails);
		json = await res.json()
		json = json.data.posts.items[0]

		return {
		status: 200,
		body: { json },
		location: `/`
	};

	}
	else {
		//console.log("worng url:", url);
		return {
		status: 400,
		body: { json:''},
		location: `/`
	};
	}

	// let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	// let { name, sprites } = await response.json();
	// let artwork = sprites.other['official-artwork']['front_default'];

	// update state
	//pokemonData = { artwork, name };

	// avoid redirect
	
}

/*this who you redirect(this will chagne with v1) */

// return {
// 		status: 303,//body might not ship with 303, read more about status code
// 		body: { url,json },
// 		headers:{
// 			location: `/about`}
// 	};