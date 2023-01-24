<template>
  <div>23</div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import Monitor from '~/ui/Monitor.vue'
import Table from '~/ui/Table.vue'
import Mobile from '~/ui/Mobile.vue'
import InnerMonitor from "~/components/InnerMonitor/InnerMonitor.vue";
import InnerTable from "~/components/InnerMonitor/InnerTable.vue";
import InnerMobile from "~/components/InnerMonitor/InnerMobile.vue.vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";

import '~/assets/css/normalize.css'

// import required modules
import { EffectCube, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination, SwiperMousewheel],
    };
  },
};
</script>
