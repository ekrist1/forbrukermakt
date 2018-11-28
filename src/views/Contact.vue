<template>
<div>
<main class="container mx-auto px-4 md:px-0 pt-8">
    <form class="w-full max-w mx-auto" name="forbrukermakt" method="POST" data-netlify="true" netlify-honeypot="bot-field" netlify>
        <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="firstName">Fornavn</label>
    <input type="text" name="firstName" class="appearance-none focus:no-outline block w-full bg-grey-lighter text-grey-darker rounded border focus:border-teal py-3 px-4 mb-3" placeholder="Ola" value="">
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="lastName">Etternavn</label>
    <input type="text" name="lastName" class="appearance-none focus:no-outline block w-full bg-grey-lighter text-grey-darker rounded border focus:border-teal py-3 px-4 mb-3" placeholder="Normann" value="">
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">E-post adresse</label>
    <input type="email" name="email" class="appearance-none focus:no-outline block w-full bg-grey-lighter text-grey-darker rounded border focus:border-teal py-3 px-4 mb-3" placeholder="ola.normann@eksempel.no" value=""></div>
    <div class="w-full md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="company">Firma (ikke påkrevd)</label>
    <input type="text" name="company" class="appearance-none focus:no-outline block w-full bg-grey-lighter text-grey-darker rounded border focus:border-teal py-3 px-4 mb-3" placeholder="Firma as" value=""></div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full px-3 h-48">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="message">Beskjed</label>
                <textarea name="message" class="appearance-none focus:no-outline block w-full bg-grey-lighter text-grey-darker rounded border focus:border-teal py-3 px-4 mb-3 resize-none" placeholder="Beskjed til forbrukermakt" style="height: calc(100% - 23px);"></textarea>
                </div>
                </div>
                <div class="flex flex-col">
                    <button class="w-full md:w-auto self-end mb-6 bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded" type="submit">Send</button>
                    </div>
    </form>
    </main>
</div>
</template>

<script>
export default {
  name: "contact"
};
</script>
