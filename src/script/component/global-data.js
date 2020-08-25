class GlobalData extends HTMLElement {

    constructor() {
        super();
    }

    set countries(countries) {
        this._countries = countries;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>

        .cardGlobal {
            margin-top: 50px;
            color: black;
            padding: 20px;
            border-radius: 5px;
            background-color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        h4{
            margin: 0;
            border-bottom: 1px solid gray;
        }

        table {
            margin-top: 10px;
            border-collapse: collapse;
            border-spacing: 0;
        }
        table  tbody{
            display: block;
            width: 100%;    
            height: 500px;
            overflow-y: auto;
        }
        
        table thead tr{
            display:block;
        }
            
        th {
            font-size: 14px;
            width: 250px;
        }

        td {
            font-size: 13px;
            width: 250px;
        }

        table th,table td{
            padding: 10px;
            border-collapse: collapse;
            border: 1px solid #cfcfcf;
        }
        
        .nom {
            width: 55px;
        }


        @media screen and (max-width: 1200px) {
            table th,table td{
                padding: 1px;
            }
        }

        </style>
        <div class="cardGlobal">
            <div>
                <table>
                    <h4>Kasus Coronavirus Global</h4>
                    <thead>
                        <tr>
                            <th class="nom">NO.</th>
                            <th >NEGARA</th>
                            <th >POSITIF</th>
                            <th >SEMBUH</th>
                            <th >MENINGGAL</th>
                        </tr>
                    </thead>
                    <tbody class="Countries">
                    </tbody>
                </table>
            </div>
        </div>
        `

        const Countries = document.querySelector(".Countries");
        this._countries.forEach((flag, i = 0) => {
            const flagElement = document.createElement("tr");
            let Confirmed = flag.attributes.Confirmed.toLocaleString();
            let Recovered = flag.attributes.Recovered.toLocaleString();
            let Deaths = flag.attributes.Deaths.toLocaleString();
            flagElement.innerHTML = `
                <td class="nom">${i+1}</td>
                <td >${flag.attributes.Country_Region}</td>
                <td >${Confirmed}</td>
                <td >${Recovered}</td>
                <td >${Deaths}</td>
                `
            i++;
            Countries.appendChild(flagElement);
        });
    }
}

customElements.define("glob-data", GlobalData);