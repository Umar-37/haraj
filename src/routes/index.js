
export async function GET(){
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json=await res.json()
    return{
        body:{
            name:'ipone',
            price:123,
            json
        }
    }
}

//////////
// @ts-ignore
export async function POST({ request }) {
	let form = await request.formData();
	let url = form.get('pokemon');
// 
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json=await res.json()
	// let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	// let { name, sprites } = await response.json();
	// let artwork = sprites.other['official-artwork']['front_default'];

	// update state
	//pokemonData = { artwork, name };

	// avoid redirect
	return {
		status: 200,
		body: { url,json },
			location: `/`
	};
}
/*this who you redirect(this will chagne with v1) */

// return {
// 		status: 303,//body might not ship with 303, read more about status code
// 		body: { url,json },
// 		headers:{
// 			location: `/about`}
// 	};