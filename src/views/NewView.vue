<template>
    <h1>Add your Memo</h1>
    <MemoForm memo="" />
</template>

<script>
import MemoForm from '@/components/MemoForm.vue';

export default {
    name: 'NewView',
    components: {
        MemoForm
    }
}
</script>

