<template>
<a :href="'https://forbrukermakt.no/vurder/' + url_category + '/' + url_slug" target="_blank" class="no-underline">
  <div :class="[bg, cardClass]">
    <div class="flex items-center px-6 py-4">
      <svg class="h-24 w-24 absolute -m-16 fill-current" :class="[icon_color]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
      <div class="text-left ml-10">
        <div class="mb-4">
          <div class="">
            <p class="text-xl leading-tight inline-flex items-center" :class="[text_color]">{{ title }} 
              <span class="pt-1">
                <svg class="fill-current" :class="[icon_color]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </span>
            </p>
          </div>
          <p class="text-sm leading-tight" :class="sub_text_color">Ris eller ros? Skriv oss en omtale på Forbrukermakt.no</p>
        </div>
      </div>
    </div>
  </div>
</a>
</template>

<script>
export default {
  name: "item",
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
