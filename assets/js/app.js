if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration =>{
        console.log('SW Registred');
        console.log(registration);
    }).catch(error => {
        console.log(error);
    })
    
}


let url = "https://api.airtable.com/v0/app6zzkAUU3KSbxlf/Matchs?api_key=keyog5xpVkCegvagW";

async function fetchMatchs() {
    try {
        let request = await fetch(url);
        let response = await request.json();

        for (const match of response.records) {
            let fields = match.fields;
            if (fields.equipe) {
                console.log(fields);
                let div = document.createElement('div');
                div.style.marginBottom = '15px'
                div.innerHTML = 
                `<div class="card">
                    <div class="card-body p-0">
                        <div class="row justify-content-between mt-3">
                            <div class="col-6 text-center"> <p class="terrain"><span class="title-terrain">Terrain : </span>${fields.terrainNom}</p></div>
                            <div class="col-6 text-center"> <p class="date"><span class="title-date">Date : </span>${moment(fields.jour).format("DD/MM/YYYY")}</p></div>
                        </div>
                        <div class="row justify-content-center mt-2">
                            <div class="col-4 " id="equipe1" style="text-align: center;padding : 0px; margin-right: 20px;">${fields.equipe}</div>
                            <div class="col-2 text-center vs">VS</div>
                            <div class="col-4 " id="equipe2" style="text-align: center;padding : 0px">${fields.adversaireNom}</div>
                        </div>
                        <p class="text-center mt-3" id="heure">${ fields.status ==  "false" ?  fields.heure : fields.score}</p>
                    </div>
                </div>`;
    
                document.querySelector('#list-match').append(div);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

fetchMatchs();