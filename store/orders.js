export const state = () => ({
    orders: []
});

export const getters = {
    getOrderList: state => {
        return state.orders;
    }
};

export const mutations = {
    setOrders(state, payload) {
        console.log(payload);
        state.orders = payload;
    }
};
export const actions = {
    setNewOrders({ commit, state }, payload) {
        var axios = require("axios");

        var config = {
            method: "get",
            url: process.env.QAADMIN_URL + "/api/v/ecomm-orders?merchantUserId=9",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlclR5cGVJZCI6NCwiaWF0IjoxNjU1ODMwNTU0LCJleHAiOjE2ODczNjY1NTR9.qffGeZywK_3XJeVwsf9S7xSX0ygp2vRVB06fAPaTPiE"
            }
        };

        axios(config)
            .then(response => {
                commit("setOrders", response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
};
