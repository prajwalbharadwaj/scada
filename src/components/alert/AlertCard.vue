<template>
    <div>
        <v-container fluid class="pa-0 ma-0">
            <v-row class="pa-0 ma-0">
                <v-col md="3" v-for="items in headerData" :key="items">
                    <v-card>
                        <div class="d-flex alert-header-card pa-3 align-center">
                            <div>
                                <div class="primary-text fs-28">
                                    {{items.value}}
                                </div>
                                <div class="secondary-text">
                                    {{items.name}}
                                </div>
                            </div>
                            <v-spacer></v-spacer>
                            <div><i :class="`${items.icon} ${items.color}--text fa-2x`"></i></div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            headerData: [
                {name: 'Total', value: 9, icon: 'fas fa-chart-pie', color: 'primary'},
                {name: 'New', value: 4, icon: 'fas fa-plus-circle', color: 'error'},
                {name: 'Achknowledged', value: 3, icon: 'fas fa-chart-pie', color: 'warning'},
                {name: 'Resolved', value: 2, icon: 'fas fa-chart-pie', color: 'success'},
            ]
        }
    },
}
</script>