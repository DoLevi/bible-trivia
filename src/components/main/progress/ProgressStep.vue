<template>
  <div>
    <svg viewBox="0 0 100 10" height="2em">
      <path
        d="M 0 0 H 99 0 M 99 0 C 99 0, 99 5, 97 5 S 94 5, 94 10 H 0 V 0"
        stroke="#2b3fe3"
        stroke-width="1px"
        fill="#ccff44"
      />
      <text
        x="50%"
        y="10"
        font-size="0.5em"
        dominant-baseline="text-after-edge"
        text-anchor="middle"
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
    value: Number
  }
});
</script>
