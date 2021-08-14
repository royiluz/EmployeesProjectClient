const axios = require('axios');

export const getSpecificUser = async (email) => {
    const config = {
        method: 'get',
        url: `http://localhost:3020/${email}`,
        headers: {}
    };
    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const getAll = async () => {
    const config = {
        method: 'get',
        url: 'http://localhost:3020/',
        headers: {}
    };

    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const updateStatus = async (email, status) => {
    const config = {
        method: 'put',
        url: `http://localhost:3020/${email}?status=${status}`,
        headers: {}
    };

    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.status));
        return response.status;
    } catch (err) {
        console.log(err);
    }
}

export const addNewUser = async (email, name, status) => {
    const config = {
        method: 'post',
        url: `http://localhost:3020/${email}?name=${name}&status=${status}`,
        headers: {}
    };
    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.status));
        return response.status;
    } catch (err) {
        console.log(err);
    }
}

