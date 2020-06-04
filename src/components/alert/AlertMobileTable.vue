<template>
    <div>
        <v-container fluid class="ma-0 pa-0">
            <v-row class="ma-0 pa-0">
                <v-col>
                    <v-card>
                        <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
                            <div>Alert</div>
                            <v-spacer></v-spacer>
                            <div class="hidden-md-and-up text-right">
                                <FilterDialog/>
                                <!-- <v-btn color="primary" text small><i class="fas fa-filter pr-1"></i> Filter</v-btn> -->
                            </div>
                        </div>
                        <div class="card-max-height-450">
                            <!-- <v-row v-for="(item, index) in alertData" class="divider pa-0 ma-0" :key="index">
                                <v-col cols="6" xs="6" sm="6" md="3" class="pb-0">
                                    <span class="text-capitalize">
                                        {{item.logicLevel}}
                                    </span>
                                    <v-chip :class="`ma-2 pa-0 px-2 text-uppercase font-weight-bold alert-${item.status}`" x-small label>
                                        {{item.status}}
                                    </v-chip>
                                </v-col>
                                <v-col cols="6" xs="6" sm="6" md="3" class="pb-0 text-right text-md-left">
                                    {{item.alertTime}}
                                </v-col>
                                <v-col cols="6" xs="6" sm="6" md="3" class="py-0">
                                    {{item.alertMessage}}
                                </v-col>
                                <v-col cols="6" xs="6" sm="6" md="3" class="py-0 text-right text-md-left">
                                    {{item.alertLevel}}
                                </v-col>
                            </v-row> -->




                            <v-row justify="center" class="pa-0 ma-0">
                                <v-expansion-panels accordion focusable>
                                    <v-expansion-panel v-for="(item,i) in alertData" :key="i">
                                        <v-expansion-panel-header class="pa-0 ma-0 pr-2">
                                            <div class=d-block>
                                                <v-row class="pa-0 ma-0 d-flex align-center">
                                                    <v-col class="pb-0">
                                                        <span class="text-capitalize primary-text font-weight-medium">
                                                            {{item.alertName}}
                                                        </span>
                                                        <v-chip :class="`ma-2 pa-0 px-2 text-uppercase font-weight-bold alert-${item.status}`" x-small label>
                                                            {{item.status}}
                                                        </v-chip>
                                                    </v-col>
                                                </v-row>
                                                <v-row class="pa-0 ma-0">
                                                    <v-col class="pt-1 pb-2">
                                                        <div>
                                                            {{item.alertTime}}
                                                        </div>
                                                    </v-col>
                                                    <v-col class="pt-1 pb-2">
                                                        <div class="text-right">
                                                            {{item.alertTime}}
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                                <v-row class="pa-0 ma-0">
                                                    <v-col class="pt-0 fw-100">
                                                        {{item.alertMessage}}
                                                    </v-col>
                                                </v-row>
                                            </div>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-row>




                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import FilterDialog from '../alert/FilterDialog'
export default {
    data() {
        return {
            alertData: [
                {
                    alertName: 'Data Logger',
                    alertTime: '17 Mar, 18:30',
                    alertLevel: 'B1-R1-I1',
                    alertMessage: 'Missing data: Communication problems with memory interface, FTP server or sensor. Verify data acquisition chain.',
                    logicLevel: 'primary',
                    status: 'new'
                },
                {
                    alertName: 'Production Inverters',
                    alertTime: '17 Mar, 18:31',
                    alertLevel: 'B1-R1-I2',
                    alertMessage: 'The gap between total inverter production and energy meter is : 2.2554 %.',
                    logicLevel: 'secondary',
                    status: 'acknowledge'
                },
                {
                    alertName: 'No Data',
                    alertTime: '17 Mar, 18:32',
                    alertLevel: 'B1-R1-I3',
                    alertMessage: 'Equipment WebdynSun - MODBUS (WithGo) has not posted data in time.',
                    logicLevel: 'primary',
                    status: 'resolved'
                },
                
            ]
        }
    },
    components: {
        FilterDialog
    }
}
</script>