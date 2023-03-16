<template>
  <h1>Your Memo List Page</h1>
  <div class="list">
    <ul class="memo" v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <routerLink :to="{name: 'edit', params: {id: memo.id}}">
          {{ memo.title }}
        </routerLink>
      </li>
      <router-link to="/memo">メモ新規作成</router-link>
    </ul>
    <div v-else>
      <p>現在メモはありません</p>
        <router-link to="/memo">メモ新規作成</router-link>
    </div>
  </div>
</template>

<style scoped>

ul {
  margin-right: 300px;
  margin-left: 300px;
}

li {
  list-style: none;
  border-bottom:  3px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  name: 'MemoList',
  computed: {
    hasMemos() {
      return this.$store.getters.getCount
    },
    memos() {
      return this.$store.getters.getAll
    }
  }
}
</script>