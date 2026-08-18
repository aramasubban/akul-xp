<template>
  <div class="text-xs md:text-header-window">
    <div class="flex w-full text-xxs md:text-xs items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🔋</span>
        <p class="font-bold">Battery</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">📐</span>
        <p class="font-bold">CAD</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🔬</span>
        <p class="font-bold">Simscape</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🌡️</span>
        <p class="font-bold">Thermal</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">⚡</span>
        <p class="font-bold">Busbar</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <span class="text-2xl">🏁</span>
        <p class="font-bold">FSAE</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>
      {{ $t('project.logma.contextFirstParagraph') }}
    </p>
    <br />
    <p>
      {{ $t('project.logma.contextSecondParagraph') }}
    </p>
    <br />
    <p>
      {{ $t('project.logma.contextThirdParagraph') }}
    </p>
    <br />
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>{{ $t('project.logma.goalFirst') }}</li>
      <li>{{ $t('project.logma.goalSecond') }}</li>
      <li>{{ $t('project.logma.goalThird') }}</li>
      <li>{{ $t('project.logma.goalFourth') }}</li>
      <li>{{ $t('project.logma.goalFifth') }}</li>
      <li>{{ $t('project.logma.goalSixth') }}</li>
    </ul>
  </div>
</template>
