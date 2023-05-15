<template>
  <StyledDialog :open="open" @close="closeDialog">
    <div class="w-screen h-screen bg-minsk-500"> 

    </div>
  </StyledDialog>
</template>

<script>
import StyledDialog from '@/components/molecules/Dialog/index.vue'

export default {
    name: 'StyledDrawer',
    components: {
        StyledDialog,
    },
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
    emits: ['close'],
    methods: {
        closeDialog() {
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>