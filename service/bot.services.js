import axios  from 'axios';
const urlBity= 'https://goo.by/api/url/add '//url de acortar el link para no mostrarlo en telegram
export async function shortLink(url) {
    try {
        const response = await axios.post(urlBity, {
            url: url
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.BIT}`,
                'Content-Type': 'application/json'
            }
        });
 
        return response.data.shorturl;
    } catch (error) {
        console.error(error);
    }
}