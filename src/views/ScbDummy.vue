<template>
	<div>
		<HeaderCard />
		<v-container fluid class="pa-0 ma-0">
			<v-row class="pa-0 ma-0">
				<v-col class="pt-0">
					<SCBTitle/>
				</v-col>
			</v-row>
			<v-row class="pa-0 ma-0">
				<v-col class="pt-0">
					<SCBLegend/>
				</v-col>
			</v-row>
			<v-row class="pa-0 ma-0">
				<v-col md="9" class="pt-0">
					<!-- <SCBDashboard/> -->
					<div v-for="item in scbList.header" :key="item">
						<!-- {{item}} -->
						{{assetMap[item.name].name}}
					</div>

					<hr>
					{{this.assetMap}}


				</v-col>
				<v-col md="3" class="pt-0">
					<SCBSelected/>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import HeaderCard from '../components/scbdummy/HeaderCard.vue'
import SCBTitle from '../components/scbdummy/SCBTitle.vue'
import SCBDashboard from '../components/scbdummy/SCBDashboard.vue'
import SCBSelected from '../components/scbdummy/SCBSelected.vue'
import SCBLegend from '../components/scbdummy/SCBLegend.vue'

import moment from 'moment'
export default {
    components: {
        HeaderCard,
				SCBTitle,
				SCBDashboard,
				SCBSelected,
				SCBLegend
		},
		data() {
			return {
				scbList: [
					{name: 'item1', header: ['Plant Total', 'DC Power']},
					{name: 'item2', header: ['Plant Total', 'AC Power']},
					{name: 'item3', header: ['Plant Total', 'DC Power']},
				],
				assetMap: {
					'item1': {
						name: 'i1'
					},
					'item2': {
						name: 'i2'
					},
					'item3': {
						name: 'i3'
					},
				}
			}
		},
}
</script>