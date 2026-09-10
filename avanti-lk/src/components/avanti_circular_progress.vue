<script setup>
defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (v) => v >= 0 && v <= 100,
  },
  size: {
    type: Number,
    default: 66,
  },
  stroke: {
    type: Number,
    default: 4.125,
  },
  label: {
    type: String,
    default: '',
  },
})

const TWO_PI = 2 * Math.PI
</script>

<template>
  <div
    class="avanti-circular"
    :style="{ width: `${size}px`, height: `${size}px` }"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <svg :width="size" :height="size" viewBox="0 0 66 66">
      <circle
        cx="33"
        cy="33"
        r="30"
        fill="none"
        class="avanti-circular__track"
        :stroke-width="stroke"
      />
      <circle
        cx="33"
        cy="33"
        r="30"
        fill="none"
        class="avanti-circular__arc"
        :stroke-width="stroke"
        :stroke-dasharray="TWO_PI * 30"
        :stroke-dashoffset="TWO_PI * 30 * (1 - value / 100)"
        transform="rotate(-90 33 33)"
      />
    </svg>
    <span v-if="label" class="avanti-circular__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.avanti-circular {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.avanti-circular__track {
  stroke: var(--avanti-track);
}

.avanti-circular__arc {
  stroke: var(--avanti-primary);
  stroke-linecap: round;
  transition: stroke-dashoffset 0.6s ease;
}

.avanti-circular__label {
  position: absolute;
  font-size: 13px;
  font-weight: 600;
  color: var(--avanti-text-dark);
  text-transform: uppercase;
}
</style>