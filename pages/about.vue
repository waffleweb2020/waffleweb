<template>
    <swiper
        :effect="'cube'"
        :grabCursor="true"
        :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
        :pagination="false"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide>
        <Monitor>
          <InnerMonitor/>
        </Monitor>
      </swiper-slide>

      <swiper-slide>
        <Table>
          <InnerTable/>
        </Table>
      </swiper-slide>

      <swiper-slide>
        <Mobile> <InnerMobile/> </Mobile>
      </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import Monitor from '~/ui/Monitor.vue'
import Table from '~/ui/Table.vue'
import Mobile from '~/ui/Mobile.vue'
import InnerMonitor from "~/components/InnerMonitor/InnerMonitor.vue";
import InnerTable from "~/components/InnerMonitor/InnerTable.vue";
import InnerMobile from "~/components/InnerMonitor/InnerMobile.vue";
import {ref} from "@vue/reactivity";
import {useRouter} from "vue-router";

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
    Monitor,
    Table,
    Mobile,
    InnerMonitor,
    InnerTable,
    InnerMobile
  },
  setup() {
    const index = ref(0)
    const router = useRouter ()
    return {
      modules: [EffectCube, Pagination, SwiperMousewheel],
    };
  },
};
</script>

<style lang="scss">
.about {
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: linear-gradient(180deg, #F7B100 0%, #FF5858 100%);
  }
}
</style>