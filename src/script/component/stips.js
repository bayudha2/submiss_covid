class Stips extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.change();
    }

    change() {
        const active = document.querySelectorAll(".tips");
        active.forEach(button => {
            button.addEventListener("click", function() {
                active.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");
            });
        });


    }


    render() {
        this.innerHTML = `
        <style>

        .tipsSection {
            display: flex;
            flex-direction: row;
            font-size: 20px;
            padding: 50px 200px 100px 200px;
            background-color: #e8e8e8;
            text-align: center;
            color: #2b3a42;
        }

        .source {
            text-align:center;
            padding:1px;
            font-size: 16px;
            background: #e8e8e8;
        }

        .tips {
            border-radius: 10px;
            color: white;
            background-color: #2b3a42;
            padding: 50px;
            border: 1px solid black;
            flex-basis: 33%;
            margin: 0 60px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
        }

        .tips:hover, .active{
            background-color: black;
        }
        .tips h1 {
            color: #40e3b5;
        }

        .tips { 
            animation: fadeInAnimation ease 3s; 
            animation-iteration-count: 1; 
            animation-fill-mode: forwards; 
        } 
        @keyframes fadeInAnimation { 
            0% { 
                opacity: 0; 
            } 
            100% { 
                opacity: 1; 
            } 
        } 

        @media screen and (max-width: 1200px) {
            .tipsSection {
                padding: 50px 50px 100px 50px;
            }
            .tips{
                padding: 10px;
                margin: 0 20px;
            }
        }
        

        
        </style>
        <div class="source"> 
            <p>Sumber data : Kementerian Kesehatan & JHU.</p>
        </div>
        <div class="tipsSection">
                <div class="tips ">
                    <h1>Tips #1</h1>
                    <p>Mencuci tangan dengan benar adalah cara paling sederhana namun efektif untuk mencegah penyebaran virus 2019-nCoV.</p>
                </div>
                <div class="tips ">
                    <h1>Tips #2</h1>
                    <p>Menggunakan Masker pada saat bepergian keluar, sehingga mengurangi resiko penularan penyakit virus 2019-nCoV.</p>
                </div>
                <div class="tips ">
                    <h1>Tips #3</h1>
                    <p>Makan makanan bergizi dan olahraga karena daya tahan tubuh yang kuat dapat mencegah munculnya berbagai macam penyakit.</p>
                </div>
            </div>
        `;
    }
}
customElements.define("tip-sec", Stips);