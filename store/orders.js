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
        /* var orderList = [];
        var ids = payload;

        ids.forEach(item => {
            //ssss//
            var axios = require("axios");

            var config = {
                method: "get",
                url: "https://qaadmin.dalasmartbox.com/api/v/orders/" + item.id + "/logs",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlclR5cGVJZCI6NCwiaWF0IjoxNjU1ODMwNTU0LCJleHAiOjE2ODczNjY1NTR9.qffGeZywK_3XJeVwsf9S7xSX0ygp2vRVB06fAPaTPiE"
                }
            };

            axios(config)
                .then(response => {
                    var datas = {
                        id: item.id,
                        orderId: item.dalaOrderId,
                        description: item.description,
                        shippingAdd: item.shippingAddress,
                        orderDate: item.createdAt,
                        status: response.data[0].actionCode
                    };
                    orderList.push(datas);
                })
                .catch(function(error) {
                    console.log(error);
                });
        });
        //--------//
*/
        state.orders = payload;
    }
};
export const actions = {
    setNewOrders({ commit, state }, payload) {
        var axios = require("axios");

        var dataId = [];

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
