let input = document.getElementById("input");
let API = "https://api.funtranslations.com/translate/minion.json";
let output = document.getElementById("output");
output.value = "hey"
function convert() {
    const encodedParams = new URLSearchParams();
    encodedParams.append("source", "en");
    encodedParams.append("target", "hi");
    encodedParams.append("q", `${input.value}`);
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'fc2494f35amsh5f400a78526c95ep13a7fejsn2d25a141f95d',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };
  
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response =>{
            let translatedText =  response.data.translations[0].translatedText;
            console.log( translatedText.data) 
            output.value  = translatedText
            
        })
        .catch(err => console.error(err));
}