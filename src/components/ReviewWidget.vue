<template>
<div class="flex flex-wrap">
  <div v-for="review in data.reviews" :key="review.id">
  <div class="w-64">
    <div class="scrolling-touch overflow-auto h-64">
      <div class="mb-8">
        <div class="text-center">
            <svg fill="#1F9D55" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle cx="15.5" cy="9.5" r="1.5"/>
            <circle cx="8.5" cy="9.5" r="1.5"/>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"/>
        </svg>
        </div>
        <p class="text-grey-darker text-base">{{ review.body }}</p>
      </div>
    </div>
  </div>
  </div>
</div>

</template>
<script>
export default {
  name: 'ReviewWidget',
  props: ['score'],
  data () {
    return {
      data: {},
      backgroundColor: '#EEE',
      borderColor: '#DDD',
      textColor: '#000',
      url_category: '',
      url_slug: ''
    }
  },
  mounted(){
    this.url_category = this.$route.params.category,
    this.url_slug = this.$route.params.slug,
    this.fetchItem() 
  },
  methods:{
    fetchItem () {
      axios.get('https://forbrukermakt.no/api/item/' + this.url_category + '/' + this.url_slug, {
        params: {
          score: this.score
        }
      })
      .then(response => {
        this.data = response.data.data
      })
    },
  }  
}
</script>
<style>
  .input{
    width: 100%;
    padding: 2px 4px;
  }
</style>