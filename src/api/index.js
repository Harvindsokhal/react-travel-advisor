import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    method: 'GET',
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',

    },
    headers: {
      'x-rapidapi-key': 'dc386fea53mshbf2063c4496d1a5p1e8106jsn3efe2bec0886',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };
  


export const getPlacesData = async () => {
    try{
        const { data: { data } } = await axios.get(url, options);
        return data
    } catch (error) {
        console.log(error);
    };
};

