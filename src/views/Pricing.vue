<template>
  <div class="">
    <v-container>
      <v-row>
        <v-col>
          <div class="text-center">
            <div class="fs-34 font-weight-light primary-text">
              Choose a plan that's right for your plant
            </div>
            <div class="secondary-text">
              We have plans and prices that fit your business perfectly. Make your client site a success with our
              products.
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- START - PRICING CARD DETAILS -->
      <v-row class="pa-0 ma-0">
        <v-col v-for="(items,index) in pricingContent" :key="index">
          <v-card>
            <!-- START - PRICING CARD TITLE AND TAGS -->
            <div class="pa-5 text-center bb-1 border-normal pricing-card-title">
              {{items.name}}
              <v-chip small label v-if="items.tag" class="mx-2 white--text" color="#EC5096">
                {{items.tag}}
              </v-chip>
            </div>
            <!-- END - PRICING CARD TITLE AND TAGS -->

            <div class=" py-3 text-center border-radius-img-50">
              <img :src="items.priceImage" alt="" srcset=""> <!-- PRICING IMAGE / ILLUSTRATOR -->
            </div>
            <div>
              <v-row class="pa-0 ma-0" v-for="item in items.content" :key="item.content">
                <v-col md="1">
                  <div class="text-center pricing-icon">
                    <i class="fas fa-check fs-10"></i>
                  </div>
                </v-col>
                <v-col md="11">
                  <div>
                    {{item}}
                  </div>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <div class="text-center pa-4">
                <v-btn small color="primary">Submit</v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- END - PRICING CARD DETAILS -->
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pricingContent: [
        {
          name: "Basic",
          priceImage: 'https://dummyimage.com/128x128/eeeeee/000000',
          content: [
            "Ullamco et mollit irure nulla dolore. Erunt sit ullamco qui do nost. Excepteur aliquip aute eiusmod. ",
            "Nisi dolor cillum quis proident. Anim sint cupidatat et in. Laboris qui pariatur excepteur magna do ea aute velit. Velit proident sunt ea mollit dolor ex ipsum.Elit proident nulla nulla velit elit. Non ex et eiusmod velit voluptate consequat pariatur enim ut occaecat aliquip et elit. Eu nulla labore eu occaecat officia consectetur anim Lorem minim elit ad sit excepteur. Non cillum minim eu cillum non fugiat ex. Cillum id proident consequat."
          ]
        },
        {
          name: "Premium",
          priceImage: 'https://dummyimage.com/128x128/eeeeee/000000',
          tag: 'popular',
          content: [
            "Nulla duis officia esse aliqua ex pariatur proident elit aliquip qui irure in ullamco cupidatat.",
            "Ullamco nisi aute nulla ut sit. Id et amet voluptate nulla minim mollit exercitation sit. Cillum minim ad non et nisi aute excepteur et id velit. Dolor labore enim irure anim reprehenderit dolore incididunt.Elit deserunt sit aliqua excepteur velit eu cillum adipisicing nisi reprehenderit culpa ut do labore. Aliqua in officia cillum reprehenderit duis anim do qui officia cupidatat esse nostrud. In aute duis ut nulla sunt pariatur esse mollit."
          ]
        },
        {
          name: "Enterprise",
          priceImage: 'https://dummyimage.com/128x128/eeeeee/000000',
          content: [
            "Sit cillum veniam labore deserunt sit ullamco qui do nostrud aliqua est tempor aliquip.",
            "Voluptate commodo sunt velit excepteur aliquip aute eiusmod. Quis do nostrud ullamco esse proident ea ad voluptate deserunt dolore irure ullamco Lorem. Incididunt ipsum duis excepteur cillum sunt nisi magna incididunt id. Proident excepteur ipsum ex est irure non ullamco. Sunt pariatur do ea enim ipsum quis nulla. Nulla sunt id cillum consequat adipisicing dolore velit minim ullamco fugiat mollit pariatur nisi.Esse ex aute."
          ]
        },
      ]
    }
  },
}
</script>