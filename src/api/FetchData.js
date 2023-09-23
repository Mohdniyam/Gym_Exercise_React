export const optionsExercise = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bf4a0c2e3bmsh31d6b482c4b2c68p198eb7jsnaabe9da95e0e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
 
export const optionsPart = {
  method: 'GET',
  params : {limit : '10'},
  headers: {
    'X-RapidAPI-Key': 'bf4a0c2e3bmsh31d6b482c4b2c68p198eb7jsnaabe9da95e0e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fbd6810a0fmsh44e7e1aa371b80cp13ce62jsnd8dcb92d4cb0',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async(url,options) =>{
       const response = await fetch(url,options);
       const data = await response.json();
       return data;
}
