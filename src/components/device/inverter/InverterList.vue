<template>
  <v-card class="mx-auto">
    <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
      <div>Inverter List</div>
    </div>
    <div class="pa-4">
      <v-text-field v-model="search" label="Search..." solo hide-details clearable
        clear-icon="mdi-close-circle-outline"></v-text-field>
    </div>
    <v-card-text class="card-height-400 py-0">
      <v-treeview :items="items" :search="search" :filter="filter" dense open-on-click>
        <template v-slot:prepend="{ item }">
          <v-icon v-if="item.children" v-text="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`"></v-icon>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [{
        id: 1,
        name: 'Nimble.co [plant Name]',
        children: [{
            id: 2,
            name: 'Block - 1',
            children: [{
                id: 201,
                name: 'Inverter - 1 : todaysEnergy',
              },
              {
                id: 202,
                name: 'Inverter - 2',
              },
              {
                id: 203,
                name: 'Inverter - 3',
              },
              {
                id: 204,
                name: 'Inverter - 4',
              },
              {
                id: 205,
                name: 'Inverter - 5',
              },
            ],
          },
          {
            id: 3,
            name: 'Block - 2',
            children: [{
                id: 301,
                name: 'Inverter - 1',
              },
              {
                id: 302,
                name: 'Inverter - 2',
              },
            ],
          },
          {
            id: 4,
            name: 'Block - 3',
            children: [{
                id: 401,
                name: 'Inverter - 1',
              },
              {
                id: 402,
                name: 'Inverter - 2',
              },
              {
                id: 403,
                name: 'Inverter - 3',
              },
            ],
          },
        ],
      }, ],
      open: [1, 2],
      search: null,
      caseSensitive: false,
    }),
    computed: {
      filter() {
        return this.caseSensitive ?
          (item, search, textKey) => item[textKey].indexOf(search) > -1 :
          undefined
      },
    },
  }
</script>