var axios = require('axios');

export const getSpecificUser = async (email) => {
    var config = {
        method: 'get',
        url: `http://localhost:3020/${email}`,
        headers: {}
    };

    const data = await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    return data;
}

export const getAll = async () => {
    var config = {
        method: 'get',
        url: 'http://localhost:3020/',
        headers: {}
    };

    const data = await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    return data;
}

export const updateStatus = async (email, status) => {
    var config = {
        method: 'put',
        url: `http://localhost:3020/${email}?status=${status}`,
        headers: {}
    };

    await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.status));
            return response.status;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const addNewUser = async (email, name, status) => {
    var config = {
        method: 'post',
        url: `http://localhost:3020/${email}?name=${name}&status=${status}`,
        headers: {}
    };

    await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.status));
            return response.status;
        })
        .catch(function (error) {
            console.log(error);
        });
}

