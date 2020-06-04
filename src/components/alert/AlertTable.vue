<template>
    <div>
        <v-container fluid class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
                <v-col>
                    <v-card>
                        <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
                            <div>Alert</div>
                        </div>
                        <div class="card-max-height-400">
                            <v-row v-for="(item, index) in alertData" class="divider pa-0 ma-0" :key="index">
                                <v-col cols="6" xs="6" sm="6" md="3" class="pb-0">
                                    <span class="text-capitalize">
                                        {{item.logicLevel}}
                                    </span>
                                    <v-chip :class="`ma-2 pa-0 px-2 text-uppercase font-weight-bold alert-${item.status}`" x-small label>
                                        {{item.status}}
                                    </v-chip>
                                </v-col>
                                <v-col cols="6" xs="6" sm="6" md="3" class="text-right text-md-left">
                                    {{item.alertTime}}
                                </v-col>
                                <v-col cols="6" xs="6" sm="6" md="3" class="">
                                    {{item.alertMessage}}
                                </v-col>
                                <v-col cols="6" xs="6" sm="6" md="3" class="text-right text-md-left">
                                    {{item.alertLevel}}
                                </v-col>
                            </v-row>
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
            alertData: [
                {
                    alertTime: '17 Mar, 18:32',
                    alertLevel: 'B1-R1-I1',
                    alertMessage: 'Veniam magna sunt ',
                    logicLevel: 'primary',
                    status: 'new'
                },
                {
                    alertTime: '17 Mar, 18:32',
                    alertLevel: 'B1-R1-I1',
                    alertMessage: 'Connection Error',
                    logicLevel: 'primary',
                    status: 'acknowledge'
                },
                {
                    alertTime: '17 Mar, 18:32',
                    alertLevel: 'B1-R1-I1',
                    alertMessage: 'Connection Error',
                    logicLevel: 'primary',
                    status: 'resolved'
                },
                
            ]
        }
    },
}
</script>