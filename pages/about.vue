<template>
  <div @wheel.self="transition($event)" class="about">
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
  </div>
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
    InnerMobile,
  },
  setup() {
    const index = ref(0)
    const router = useRouter ()
    const isTransition = ref(false)

    function transition(event) {
      if(event.deltaY > 0 && isTransition.value){
        router.push('/create')
      }
      else if(event.deltaY < 0 && isTransition.value) {
        router.push('/')
      }
      else {
        return
      }
    }

    onMounted(() => {
      setTimeout(() => {
        isTransition.value = true
      },1000)
    })
    return {
      modules: [EffectCube, Pagination, SwiperMousewheel],
      transition
    };
  },
};
</script>

<style lang="scss">
@keyframes show {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.about {
  position: relative;
  height: 100%;
  animation-name: show;
  animation-duration: 1s;
}
</style>