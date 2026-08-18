<script setup>
import { ref } from 'vue'
import Button from '../Buttons/Button.vue'

const EMAIL_ADDRESS = 'akul.ramasubban@gmail.com'
const PHONE_NUMBER = '6503137267'
const PHONE_DISPLAY = '(650) 313-7267'
const LINKEDIN_URL = 'https://www.linkedin.com/in/akulramasubban/'

const selectedMethod = ref(null) // 'email' | 'text' | 'linkedin' | null
const copied = ref(false)

const methods = {
  email: {
    icon: '/img/icons/contact/email-icon-lg.webp',
    labelKey: 'windows.contact.email',
    value: EMAIL_ADDRESS,
    copyValue: EMAIL_ADDRESS
  },
  text: {
    icon: '/img/icons/contact/mailto-icon.webp',
    labelKey: 'windows.contact.text',
    value: PHONE_DISPLAY,
    copyValue: PHONE_NUMBER
  },
  linkedin: {
    icon: '/img/icons/side-menu/linkedin-icon.webp',
    labelKey: 'windows.contact.linkedin',
    value: LINKEDIN_URL,
    copyValue: LINKEDIN_URL,
    siteUrl: LINKEDIN_URL
  }
}

const selectMethod = (method) => {
  copied.value = false
  selectedMethod.value = method
}

const goBack = () => {
  selectedMethod.value = null
}

const copyValue = async () => {
  await navigator.clipboard.writeText(methods[selectedMethod.value].copyValue)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<template>
  <div class="relative right-0 h-full flex flex-col h-content-headless-toolbox bg-white">
    <!-- Selection view -->
    <div v-if="!selectedMethod" class="flex flex-col items-center justify-center h-full gap-6 font-trebuchet-pixel p-4 text-center">
      <p class="text-xs">{{ $t('windows.contact.chooseMethod') }}</p>
      <div class="flex gap-8">
        <button
          type="button"
          @click="selectMethod('email')"
          class="flex flex-col items-center gap-2 cursor-pointer px-4 py-3 rounded-sm hover:bg-window-menu-card hover:shadow-header-tools"
        >
          <img :src="methods.email.icon" :alt="$t(methods.email.labelKey)" class="w-12 h-12" />
          <p class="text-xs">{{ $t(methods.email.labelKey) }}</p>
        </button>
        <button
          type="button"
          @click="selectMethod('text')"
          class="flex flex-col items-center gap-2 cursor-pointer px-4 py-3 rounded-sm hover:bg-window-menu-card hover:shadow-header-tools"
        >
          <img :src="methods.text.icon" :alt="$t(methods.text.labelKey)" class="w-12 h-12" />
          <p class="text-xs">{{ $t(methods.text.labelKey) }}</p>
        </button>
        <button
          type="button"
          @click="selectMethod('linkedin')"
          class="flex flex-col items-center gap-2 cursor-pointer px-4 py-3 rounded-sm hover:bg-window-menu-card hover:shadow-header-tools"
        >
          <img :src="methods.linkedin.icon" :alt="$t(methods.linkedin.labelKey)" class="w-12 h-12" />
          <p class="text-xs">{{ $t(methods.linkedin.labelKey) }}</p>
        </button>
      </div>
    </div>

    <!-- Detail view -->
    <div v-else class="flex flex-col items-center justify-center h-full gap-4 font-trebuchet-pixel p-4 text-center">
      <img :src="methods[selectedMethod].icon" :alt="$t(methods[selectedMethod].labelKey)" class="w-12 h-12" />
      <label class="w-full max-w-xs flex gap-2 items-center">
        <div class="flex gap-1 items-center cursor-default whitespace-nowrap">
          <p class="font-trebuchet-pixel">{{ $t(methods[selectedMethod].labelKey) }} :</p>
        </div>
        <input
          type="text"
          class="w-full h-6 border border-input-blue p-1.5 text-xs outline-none text-center"
          :value="methods[selectedMethod].value"
          readonly="readonly"
        />
      </label>
      <div class="flex items-center gap-2">
        <Button layout="small" @submit="copyValue">{{ $t('windows.contact.copy') }}</Button>
        <Button v-if="methods[selectedMethod].siteUrl" layout="small" :href="methods[selectedMethod].siteUrl" blank>
          {{ $t('windows.contact.goToSite') }}
        </Button>
        <Button layout="small" @submit="goBack">{{ $t('windows.contact.back') }}</Button>
      </div>
      <p class="text-xs text-green-600 font-medium" v-show="copied">{{ $t('windows.contact.copied') }}</p>
    </div>
  </div>
</template>
