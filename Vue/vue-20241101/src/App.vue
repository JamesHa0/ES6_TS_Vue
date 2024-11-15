<template>

  <body>
    <div id="app">
      <p v-for="book in bookArr" :key="book.bookId">
        ​{{ book.bookId }},{{ book.bookName }},{{ book.author }}<br>
      </p>
    </div>
  </body>
</template>
<script src="https://unpkg.com/vue@next"></script>
<script>
const bookArr = reactive([
      {
        bookId: 1,
        bookName: '《三国演义》',
        author: '罗贯中'
      },
      {
        bookId: 2,
        bookName: '《西游记》',
        author: '吴承恩'
      },
      {
        bookId: 3,
        bookName: '《水浒传》',
        author: '施耐庵'
      }
    ]);
</script>
