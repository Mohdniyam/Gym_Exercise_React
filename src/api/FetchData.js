export const optionsExercise = {
  method: 'GET',
  params: {limit: '100'},
  headers: {
    'X-RapidAPI-Key': 'fbd6810a0fmsh44e7e1aa371b80cp13ce62jsnd8dcb92d4cb0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async(url, options) =>{
       const response = await fetch(url, options);
       const data = await response.json();
       return data;
}
