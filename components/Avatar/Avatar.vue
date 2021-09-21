<template>
  <div
    class="
      flex
      items-center
      justify-center
      rounded-full
      w-6
      h-6
      p-6
      border border-gray-300
      relative
      overflow-hidden
    "
  >
    <nuxt-img
      v-if="user.imageSrc"
      class="absolute"
      width="60"
      :src="user.imageSrc"
      :alt="imgAlt"
    />
    <span v-else>{{ userAcronym }}</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
  toRefs,
} from '@nuxtjs/composition-api'
import { User } from 'types/user-types'

export function getUserAcronym(user: User) {
  return (
    user.firstName.charAt(0).toUpperCase() +
    user.lastName.charAt(0).toUpperCase()
  )
}

export function getFullName(user: User) {
  return `${user.firstName} ${user.lastName}`
}

export default defineComponent({
  props: {
    user: {
      required: true,
      type: Object as PropType<User>,
    },
  },
  setup(props) {
    const { user } = toRefs(props)

    const userAcronym = computed(() => {
      return getUserAcronym(user.value)
    })
    const fullName = computed(() => {
      return getFullName(user.value)
    })
    const imgAlt = computed(() => {
      return `Avatar with image of ${fullName.value}`
    })

    return { userAcronym, fullName, imgAlt }
  },
})
</script>
