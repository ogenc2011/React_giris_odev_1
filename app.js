import axios from "axios";
async function getData (userid) {
    const {data: user} = await axios ('https://jsonplaceholder.typicode.com/users/'+ userid);
    const {data: post} = await axios ('https://jsonplaceholder.typicode.com/posts?userId='+ userid);
console.log(user); 
console.log(post); 
}
export {getData}