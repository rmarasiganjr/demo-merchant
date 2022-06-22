<template lang="html">
    <div class="table-responsive">
        <table class="table ps-table" ref="stables">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>OrderID</th>
                    <th>Description</th>
                    <th>Shipping Address</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in hh" :key="item.id">
                    <td>{{ item.id }}</td>
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
                    <td>{{ item.statuses }}</td>
                    <td>
                        <button @click="handleUpdate(item.id)">
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
        handleUpdate(id) {
            console.log(id);
        }
    },
    mounted() {
        this.$store.dispatch("orders/setNewOrders");
    },

    computed: {
        hh() {
            return this.$store.getters["orders/getOrderList"];
        }
    }
};
</script>

<style lang="scss" scoped></style>
