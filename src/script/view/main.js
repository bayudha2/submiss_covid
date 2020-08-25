import './../component/global-data.js';
import './../component/global-card.js';
import "./../component/indo-card.js";
import "./../component/Kontak.js";
import DataSource from '../data/source.js';

const main = () => {
    const globTable = document.querySelector("glob-data");
    const globTotal = document.querySelector("glob-card");
    const indoTotal = document.querySelector("indo-card");

    const renderGlobal = async() => {
        try {
            const globData = await DataSource.getGlobalData();
            printGlob(globData);
            const globalTotal = await DataSource.getGlobalTotal();
            printTotal(globalTotal);
        } catch {
            console.log("Not Found");
        }
    };

    const printGlob = hasilGlobal => {
        globTable.countries = hasilGlobal;
        indoTotal.IndoData = hasilGlobal;
    };

    const printTotal = hasilTotal => {
        globTotal.Total = hasilTotal;
    }

    renderGlobal();
};

export default main;