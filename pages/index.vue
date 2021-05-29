<template>
  <div>
    <hero />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  auth: 'guest',
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    'call-to-action': CallToAction,
  },
}
</script>
