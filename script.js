    let ip = document.getElementById("ip")
    let ip2 = document.getElementById("ip2")
    let btn = document.getElementById("btn")
    let op1 = document.getElementById("op1")
    let op2 = document.getElementById("op2")
    let op3 = document.getElementById("op3")

    function serchdata(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${ip.value}`)
    .then( (apidata) => {
    return apidata.json();
    })
    .then( (actualdata) => {
    // console.log(actualdata[0]);
    ip2.innerText = ip.value
    op1.innerText = "Part Of Speech: " + actualdata[0].meanings[0].partOfSpeech;

    op2.innerText = "Example: " + actualdata[0].meanings[0].definitions[0].example;
    op3.innerText = "Definition: " + actualdata[0].meanings[0].definitions[0].definition;
    })

    .catch((error) => {
        alert(error);
    });
    }

    btn.addEventListener("click",serchdata);
    