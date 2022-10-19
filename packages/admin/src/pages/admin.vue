<script setup lang="ts">
const router = useRouter()
const home = () => {
  router.push('/')
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <Counter :initial="0" />

    <div>
      <button
        btn m-3 text-sm
        @click="home"
      >
        {{ t('button.home') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
