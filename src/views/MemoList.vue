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

/* デスクトップ用スタイル */
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

@media screen and (max-width: 1023px) {
  /* タブレット・スマートフォン用スタイル */
  ul {
    margin-right: 20px;
    margin-left: 20px;
  }

  li {
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
}

/* タブレット・スマートフォン用スタイル */
ul {
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 0;
}

li {
  list-style: none;
  border-bottom:  3px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 5px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}

@media screen and (min-width: 1024px) {
  /* デスクトップ用スタイル */
  ul {
    margin-right: 300px;
    margin-left: 300px;
  }

  li {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
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