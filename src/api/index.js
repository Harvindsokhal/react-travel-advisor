import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try{
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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

