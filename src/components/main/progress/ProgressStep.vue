<template>
  <div>
    <svg viewBox="0 0 100 10" height="2em">
      <path
        d="M 0 0 H 99 0 M 99 0 C 99 0, 99 5, 97 5 S 94 5, 94 10 H 0 V 0"
        :stroke="selected ? '#2bf0d9' : '#2b90d9'"
        stroke-width="1px"
        :fill="selected ? '#2bf0d9' : '#2b90d9'"
      />
      <text
        x="50%"
        y="10"
        font-size="0.5em"
        dominant-baseline="text-after-edge"
        text-anchor="middle"
        fill="#200080"
      >
        {{ value.toLocaleString() }}
      </text>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgressStep",
  props: {
    value: Number,
    selected: Boolean
  }
});
</script>
