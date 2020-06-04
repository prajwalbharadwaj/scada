<template>
    <div>
        <v-card class="ma-3">
            <v-container fluid class="pa-0 ma-0">
                <v-row class="pa-0 ma-0">
                    <v-col  cols="3" v-for="(item,index) in headerData" :key="index" class="pa-0 ma-0 text-center border-right-divider">
                        <div :class="`primary-text fs-28 ${item.textClass}--text`">{{item.value}}</div>
                        <div :class="`secondary-text ${item.textClass}--text`">{{item.name}}</div>                        
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            headerData: [
                {name: 'Total', value: 9, icon: 'fas fa-chart-pie', color: 'primary', textClass: 'primary'},
                {name: 'New', value: 4, icon: 'fas fa-plus-circle', color: 'error', textClass: 'error'},
                {name: 'Ack', value: 2, icon: 'fas fa-chart-pie', color: 'warning', textClass: 'warning'},
                {name: 'Resolved', value: 2, icon: 'fas fa-chart-pie', color: 'success', textClass: 'success'},
            ]
        }
    },
}
</script>
<style scoped>
.theme--light .border-right-divider {
    margin: 10px 0 !important;
}
.theme--dark .border-right-divider {
    margin: 10px 0 !important;
}
.theme--light .border-right-divider:not(:last-child) {
    border-right: 1px solid #eee !important;
}
.theme--dark .border-right-divider:not(:last-child) {
    border-right: 1px solid #282D4D !important;
}
</style>