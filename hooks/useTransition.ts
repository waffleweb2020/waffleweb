import {ref} from "@vue/reactivity";

export function useTransition() {
    const isTransition = ref(false)

    function mounted() {
        setTimeout(() => {
            isTransition.value = true
        },3000)
    }

    return {transition: isTransition.value, mounted: mounted}
}