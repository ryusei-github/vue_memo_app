<template>
    <h1>Edit your Memo</h1>
    <div>
        <MemoForm v-if="memo" :memo="memo"/>
        <p v-else>指定されたメモはありません</p>
    </div><br>
    <div>
        <router-link to="/list">メモ一覧</router-link>
    </div>
    <div>
        <router-link to="/memo">メモ新規作成</router-link>
    </div>
</template>


<script>
import MemoForm from '@/components/MemoForm.vue';
export default {
    name: 'EditVue',
    components: {
        MemoForm
    },
    computed: {
        memo() {
            const id = parseInt(this.$route.params.id)
            return this.$store.getters.getMemoById(id)
        }
    }
}
</script>