
/*just boilerplate for get request*/

// export async function GET() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// 	const json = await res.json()
// 	return {
// 		body: {
// 			name: 'ipone',
// 			price: 123,
// 		}
// 	}
// }

//////////
// @ts-ignore
export async function POST({ request }) {
	let form = await request.formData();
	let url = form.get('post');
	// 
	let adNumber = null;
	let json;
	let error;
	if (url.startsWith("https://haraj.com.sa/11")) {
		//do the thing
		try {
			let urlBreak = url.split('/')
			var regExp = /[a-zA-Z]/g;
			adNumber = urlBreak[3].slice(2)

			if (adNumber.includes('?')) {
				//https://haraj.com.sa/1199256889?src=ios%E2%81%A9 
				//from ios device or android
				adNumber = adNumber.split('?')[0]
			}

			if (regExp.test(adNumber)) {
				throw 'contain text'
			}
			adNumber = parseInt(adNumber)
		} catch (e) {
			error = 'رابط الاعلان غير صحيح'
			return {
				status: 200,
				body: { error },
				headers: {
					location: `/`
				}
			};
		}
		const objDetails = {

			"method": "POST",
			"headers": {
				"Content-Type": "application/json; charset=UTF-8",
			},
			"body": `{\"query\":\"query($ids:[Int]) { posts( id:$ids) {\\n\\t\\titems {\\n\\t\\t\\tid status authorUsername title city postDate updateDate hasImage thumbURL authorId bodyTEXT city tags imagesList commentStatus commentCount upRank downRank geoHash\\n\\t\\t}\\n\\t\\tpageInfo {\\n\\t\\t\\thasNextPage\\n\\t\\t}\\n\\t\\t} }\",\"variables\":{\"ids\":[${adNumber},${adNumber + 1}]}}`,//BodyText does't return anything if request made for single post
		}
		const res = await fetch("https://graphql.haraj.com.sa", objDetails);

		if (res.ok) {
			json = await res.json()
			json = json.data.posts.items[0]

			return {
				status: 200,
				body: { json },
				location: `/`
			};
		} else {
			error = 'رابط الاعلان طويل بزياده, شيك عليه نفداك'
			return {
				status: 200,
				body: { error },
				headers: {
					location: `/`
				}
			};
		}


	}
	else {
		return {
			status: 400,
			body: { json: '' },
			location: `/`
		};
	}

	// let response = await fetch(`https://pokeapi.co/api/v2/post/${post}`);
	// let { name, sprites } = await response.json();
	// let artwork = sprites.other['official-artwork']['front_default'];

	// update state
	//postData = { artwork, name };

	// avoid redirect

}

/*this how you use redirect(this will chagne with v1 of svelteKit) */

// return {
// 		status: 303,//body might not ship with 303, read more about status code
// 		body: { url,json },
// 		headers:{
// 			location: `/about`}
// 	};