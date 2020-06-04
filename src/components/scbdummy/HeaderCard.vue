<template>
    <div>
        <v-container fluid class="pa-0 ma-0">
            <v-row class="pa-0 ma-0">
                <v-col v-for="item in headerData" >
                    <v-card class="text-center py-2" outlined>
                        <div class="primary-text"> 
                            <span class="fs-24"> {{item.value}} </span> 
                            <span class="fs-12"> {{item.unit}} </span> 
                        </div>
                        <div class="secondary-text"> {{item.name}} </div>
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
                { name: 'Gen', value: '7959.00', unit: 'kWh' },
                { name: 'PR', value: '83.27', unit: '%' },
                { name: 'GHI Insolation', value: '3.25', unit: 'kWh/m' },
                { name: 'Wind Speed', value: '3.74', unit: 'km/h' },
                { name: 'Temperature', value: '35.5', unit: '°C' },
                { name: 'PoA Insolation', value: '3.31', unit: 'kmh/m' }
            ]
        }
    },
}
</script>