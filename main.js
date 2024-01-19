
const base_api = "https://api.genderize.io";

function showResult(name,gender,probability) {
    const predictElement = document.getElementById("prediction");
    const probabilityPercents = probability*100
    let genderDecode;
    if (gender == "male") {
        genderDecode = "Laki-laki"
    }else{
        genderDecode = "Perempuan"
    }


    const predictionText = `Halo ${name}, jenis kelamin kamu kemungkinan adalah ${genderDecode} dengan probabilitas sebesar ${probabilityPercents}%`

    predictElement.textContent = predictionText;
}
async function predict(event) {
    if (event.key === "Enter") {
        const name = event.target.value
        const queryUrl = `${base_api}/?name=${name}&country_id=ID`

        const response = await fetch(queryUrl)
        const result = await response.json()
        showResult(result.name, result.gender, result.probability)
        
    }
}