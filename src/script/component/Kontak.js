import Pin from "./../../images/pin.png";
import Phone from "./../../images/phone.png";
import Mail from "./../../images/mail.png";

class ProvData extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        p{
            color: black;
            font-size: 16px;
            margin:auto;
        }

        .Kontak {
            display: flex;

        }
        .tips {
            margin-top: 50px;
            text-align: left;
            display: flex;
            padding-left: 100px;
        }

        img{
            height: 60px;
            padding-right: 10px;
        }

        .middle {
            display: flex;
            margin:auto;
        }

        </style>

        <div class="Kontak">
            <div class="middle">
                    <div class="tips ">
                        <img src="${Pin}" alt="test">
                        <p>Indonesia</p>
                    </div>
                    <div class="tips ">
                        <img src="${Phone}" alt="test">
                        <p>0821 2757 0303 (Bayu)</p>
                    </div>
                    <div class="tips ">
                        <img src="${Mail}" alt="test">
                        <p>bayudha.db@gmail.com</p>
                    </div>
            </div>
        </div>
        `
    }
}

customElements.define("prov-data", ProvData);