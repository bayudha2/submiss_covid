import Sad from './../../images/bacteria.png';


class NavBar extends HTMLElement {

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
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: inline-block;
            width: 100%;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            background-color: #2b3a42;
            overflow: hidden;
            position: fixed;
            top: 0;
            
        }
        section {
            display: flex;
            margin: 10px;
        }
        h2 {
            padding: 10px 10px 10px 5px;
            text-align: left;
            
        }
        .me {
            cursor: default;
            flex-direction: row;
            margin-top: 10px;
            margin-left: 20px;
            width: 35px;
        
        }

        a {
            outline: none;
        }
        
        .navbar-container {
            display: flex;
            text-align: center;
            padding: 5px 0 0 0;
            font-size: 0;
            flex: 1 1 auto;
            justify-content: flex-end;
        }
        
        .navbar-container ul {
            margin: 0;
            padding: 0;
            text-align: right;
            display: inline-block;
            vertical-align: middle;
        }
        
        .navbar-container ul li {
            margin-right: 15px;
            display: inline-block;
            font-size: 16px;
        }
        
        .navbar-container ul li a {
            color: #ffffff;
            text-decoration: none;
            display: inline-block;	
            padding: 10px;
            transition: color 0.5s;
        }
        
        .navbar-container ul li .underline {
            height: 3px;
            background-color: transparent;
            width: 0%;
            transition: width 0.2s, background-color 0.5s;
            margin: 0 auto;
        }
        
        .navbar-container ul li:hover .underline {
            background-color: white;
            width: 100%;
        }

        </style>
        <section>
        <a href="#"><img class="me"src="${Sad}"></a>
        <h2>InfoCovID</h2>
        <div class="navbar-container">
            <ul>
                <li class="nav-link">
                    <a href="#">Beranda</a>
                    <div class="underline"></div>
                </li>
                <li class="nav-link">
                    <a href="#glob">Global</a>
                    <div class="underline"></div>
                </li>
                <li class="nav-link">
                    <a href="#Kontak">Kontak</a>
                    <div class="underline"></div>
                </li>
            </ul>
        </div>
        </section>`;
    }
}

customElements.define("nav-bar", NavBar);