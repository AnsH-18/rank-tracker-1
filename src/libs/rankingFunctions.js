const axios = require('axios');

export async function doGoogleSearch(keyword) {
  const data = {'country': 'us','query':{'q':keyword,num:100},num:100};
  const url = "https://api.brightdata.com/unblocker/req?customer=hl_7799d4b1&zone=serp_api1";
  const headers = {'Authorization': 'Bearer a56158e3-fee0-4a0b-ad57-cec24bd542a6'}; 
  const response = await axios.post(url, data, {headers});
  console.log(keyword);
  if (!response?.headers) {
    console.error('no header in response '+url);
    console.error(data);
    return null;
  } else {
    console.log('responseId:'+response?.headers.get('x-response-id'));
    return response?.headers.get('x-response-id');
  }
}
