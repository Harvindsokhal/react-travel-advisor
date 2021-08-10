import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async (sw, ne) => {
    try{
        const { data: { data } } = await axios.get(url, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat, 
              },
              headers: {
                'x-rapidapi-key': 'dc386fea53mshbf2063c4496d1a5p1e8106jsn3efe2bec0886',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
              }
        });
        return data
    } catch (error) {
        console.log(error);
    };
};

