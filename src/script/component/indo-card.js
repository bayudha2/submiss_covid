import Cry from './../../images/cry.png';
import Sad from './../../images/sad.png';
import Happy from './../../images/happy.png';

class IndoCard extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set IndoData(IndoData) {
        this._IndoData = IndoData;
        this.render();
    }

    render() {
        var result = this._IndoData.find(obj => {
            return obj["attributes"].OBJECTID === 92
        });
        let Confirmed = result["attributes"]["Confirmed"].toLocaleString();
        let Deaths = result["attributes"]["Deaths"].toLocaleString();;
        let Recovered = result["attributes"]["Recovered"].toLocaleString();

        this.shadowDOM.innerHTML = `
        <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        h2 {
            margin-top: 30px;
            text-align: center; 
        }

        .indoSection {
            display: flex;
            flex-direction: row;
            font-size: 20px;
            padding: 50px 250px 100px 250px;
            background-color: #fafafa;
            text-align: center;
            color: #2b3a42;
        } 

        .Positif p, .Recovered p, .Deaths p {
            font-size: 14px;
        }

        .Positif span, .Recovered span, .Deaths span {
            font-size: 24px;
            font-weight: bold;
        }

        .iconPos {
            text-align: center;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: auto;
            height: 60px;
        }

        .Positif, .Recovered, .Deaths {
            text-align: left;
            display: flex;
            border-radius: 10px;
            color: white;
            padding: 20px;
            flex-basis: 33%;
            margin: 20px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
        }
        
        .Positif{
            background-color: #bf0404;
        }

        .Recovered {
            background-color: #00cf78;
        }

        .Deaths {
            background-color: #8704bf;
        }

        @media screen and (max-width: 1200px) {
            .indoSection {
                padding: 50px 50px 100px 50px;
            }
        }

        </style>
        <h2>CORONA VIRUS INDONESIA</h2>
        <div class="indoSection">
                <div class="Positif">
                    <p>TOTAL POSITIF<br><span>${Confirmed}</span><br>ORANG</p>
                    <img src="${Sad}" class="iconPos" alt="test">
                </div>
                <div class="Recovered">
                    <p>TOTAL SEMBUH<br><span>${Recovered}</span><br>ORANG</p>
                    <img src="${Happy}" class="iconPos" alt="test">
                </div>
                <div class="Deaths">
                    <p>TOTAL MENINGGAL<br><span>${Deaths}</span><br>ORANG</p>
                    <img src="${Cry}" class="iconPos" alt="test">
                </div>
            </div>
        `;
    }
}
customElements.define("indo-card", IndoCard);