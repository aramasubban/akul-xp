<template>
  <div class="text-xs md:text-header-window">
    <div class="flex text-xxs md:text-xs w-full items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/vuejs.svg" :alt="$t('common.icon') + ' vuejs'" class="w-9 h-9" />
        <p class="font-bold mt-px">Vue.js</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/tailwind.svg" :alt="$t('common.icon') + ' tailwind'" class="w-9 h-9" />
        <p class="font-bold mt-px">Tailwind</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/shadcn.svg" :alt="$t('common.icon') + ' shadcn'" class="w-6 h-9" />
        <p class="font-bold mt-px">shadcn/ui</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>{{ $t('project.clench.contextFirstParagraph') }}</p>
    <p>{{ $t('project.clench.contextSecondParagraph') }}</p>
    <p>{{ $t('project.clench.contextThirdParagraph') }}</p>
    <p>{{ $t('project.clench.contextFourthParagraph') }}</p>
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.clench.goalFirst') }}</li>
      <li>{{ $t('project.clench.goalSecond') }}</li>
      <li>{{ $t('project.clench.goalThird') }}</li>
      <li>{{ $t('project.clench.goalFourth') }}</li>
      <li>{{ $t('project.clench.goalFifth') }}</li>
      <li>{{ $t('project.clench.goalSixth') }}</li>
    </ul>
  </div>
</template>
