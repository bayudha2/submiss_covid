import Medical from './../../images/medical.png';

class GlobalCard extends HTMLElement {

    constructor() {
        super();
    }

    set Total(total) {
        this._total = total;
        this.render();
    }

    render() {
        let Confirmed = this._total.confirmed.value.toLocaleString();
        let Recovered = this._total.recovered.value.toLocaleString();
        let Deaths = this._total.deaths.value.toLocaleString();
        this.innerHTML = `
        <style>

        .cardTotal {
            color: black;
            padding: 20px;
            border-radius: 5px;
            background-color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        p {
            font-size: 20px;
            line-height: 180%;
        }

        .cardTotal h1, .cardTotal p {
            margin: 0;
        }

        .flag{
            width: 60px;
            margin-left: 100px;
        }

        .top {
            display: flex;
            margin: 0 0 10px 0;
        }

        span{
            font-weight: bold;
        }
        .Jumlah {
            padding-top: 8px;
            border-top: 1px solid black;
        }
        </style>
        <div class="cardTotal">
            <div class="top">
                <h1>Global Data</h1>
                <img class="flag"src="${Medical}">
            </div>
            <div class="Jumlah">
                <p>Total Positif<span style="float:right; color:red">${Confirmed}</span></p>
                <p>Total Sembuh<span style="float:right; color:green">${Recovered}</span></p>
                <p>Total Meninggal<span style="float:right; color:purple">${Deaths}</span></p>
            </div>
        </div>
        `;
    }
}

customElements.define("glob-card", GlobalCard);