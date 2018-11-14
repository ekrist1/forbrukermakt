<template>
  
    <review-widget :score="score"></review-widget>
  
</template>

<script>
import ReviewWidget from "@/components/ReviewWidget.vue";
export default {
  // @ is an alias to /src
  components: {
    ReviewWidget
  },
  props: 
  {
    bg: {
      default: 'bg-white',
      type: String
    },
    text_color: {
      default: 'text-grey-darkest',
      type: String
    },
    sub_text_color: {
      default: 'text-grey-darkest',
      type: String
    },
    icon_color: {
      default: 'text-teal',
      type: String
    },
    initial_title: {
      default: 'Skriv oss en omtale',
      type: String
    },
    score: {
      default: 5,
      type: String
    }
  },
  data () {
    return {
     url_category: '' ,
     url_slug: '',
     title: this.initial_title,
     cardClass: 'm-1 max-w-sm shadow-md rounded overflow-hidden relative'
    }
  },
  mounted() {
    this.url_category = this.$route.params.category,
    this.url_slug = this.$route.params.slug

  }

}
</script>
