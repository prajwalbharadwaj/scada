<template>
    <div>
        <v-card>
            <div class="pt-2 p-x-20 pb-2 d-flex align-center">
                <div class="cus-title">SCB</div>
                <v-spacer></v-spacer>
                <div>
                    <v-select v-model="invitem" :items="invitems" :menu-props="{ bottom: true, offsetY: true }"
                        label="Select Inv" placeholder="Select Inv" clearable outlined dense hide-details></v-select>
                </div>
                <v-spacer></v-spacer>
                <div>
                    <!-- <v-select :items="items" label="Outlined style" outlined dense hide-details></v-select> -->
                    <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
                        <template v-slot:activator="{ on }">
                            <v-text-field :value="computedDateFormattedMomentjs" clearable placeholder="Select Date"
                                label="" v-on="on" prepend-icon="event" @click:clear="date = null" outlined dense
                                hide-details></v-text-field>
                        </template>
                        <v-date-picker v-model="date" @change="menu1 = false"></v-date-picker>
                    </v-menu>
                </div>
                <v-spacer></v-spacer>
                <div>
                    <v-select v-model="invitem" :items="blockitems" :menu-props="{ bottom: true, offsetY: true }" label="Select Block" outlined dense hide-details></v-select>
                </div>
                <v-spacer></v-spacer>
                <div>
                    <v-btn small class="indigo white--text">Avg</v-btn>
                    <!-- <v-spacer></v-spacer> -->
                    <!-- <v-btn small class="indigo white--text">Download</v-btn> -->
                </div>
                <v-spacer></v-spacer>
                <div>
                    <!-- <v-btn small class="indigo white--text">Avg</v-btn> -->
                    <!-- <v-spacer></v-spacer> -->
                    <v-btn small class="indigo white--text">Download</v-btn>
                </div>
            </div>
        </v-card>
    </div>
</template>
<script>
import moment from 'moment'
// import format from 'date-fns/format'
export default {
    data: () => ({
        invitems: ['All', 'Inv - 1', 'Inv - 2', 'Inv - 3'],
        blockitems: ['All', 'Block - 1', 'Block - 2', 'Block - 3'],
        invitem: "All",
        date: new Date().toISOString().substr(0, 10),
        menu1: false,
        menu2: false,
    }),
    computed: {
        computedDateFormattedMomentjs() {
            // return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
            return this.date ? moment(this.date).format('MMMM Do YYYY') : ''
        },
        //   computedDateFormattedDatefns () {
        //     return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
        //   },
    },
}
</script>