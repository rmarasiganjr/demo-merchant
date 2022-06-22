<template lang="html">
    <div class="table-responsive">
        <table class="table ps-table" ref="stables">
            <thead>
                <tr>
                    <th>ID</th>

                    <th>Description</th>
                    <th>Shipping Address</th>
                    <th>Order Date</th>
                    <th>Courier</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in hh" :key="item.id">
                    <td>
                        {{ item.dalaOrderId }}
                    </td>
                    <td>
                        {{ item.description }}
                    </td>
                    <td>
                        {{ item.shippingAddress }}
                    </td>
                    <td>
                        {{ item.createdAt }}
                    </td>
                    <td>{{ item.status }}</td>
                    <td>
                        <button @click="handleUpdate(item.id, item.courierId)">
                            <i class="icon-pencil mr-2"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TableOrderItems",

    methods: {
        handleUpdate(id, cid) {
            console.log(id);
            console.log(cid);
        }
    },
    mounted() {
        this.$store.dispatch("orders/setNewOrders");
    },

    computed: {
        hh() {
            var items = [];
            var out = this.$store.getters["orders/getOrderList"];
            out.forEach(item => {
                if (item.courierId != null && item.dalaOrderId != null) {
                    var axios = require("axios");

                    var config = {
                        method: "get",
                        url:
                            "https://qaadmin.dalasmartbox.com/api/v/orders/" +
                            item.dalaOrderId +
                            "/logs",
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlclR5cGVJZCI6NCwiaWF0IjoxNjU0NTAzMDE5LCJleHAiOjE2ODYwMzkwMTl9.glbT0fQSXq0gX1wgNSML0qG-Xd_UGTuuv3tPXTjflD4"
                        }
                    };

                    axios(config)
                        .then(response => {
                            // console.log(JSON.stringify(response.data));
                            item.status = response.data[0].actionCode;
                        })
                        .catch(function(error) {
                            console.log(error);
                        });

                    items.push(item);
                }
            });
            console.log(items);
            return items;
        }
    }
};
</script>

<style lang="scss" scoped></style>
