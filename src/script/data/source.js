class DataSource {

    static getGlobalData() {
        return fetch(`https://api.kawalcorona.com/`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return responseJson;
            })
    }

    static getGlobalTotal() {

        return fetch(`https://covid19.mathdro.id/api`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return responseJson;
            })
    }
}

export default DataSource;