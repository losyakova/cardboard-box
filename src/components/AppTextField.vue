<template>
  <div class="mb-3">
    <label :for="idInput" class="form-label">{{ title }}</label>
    <input
      required
      :type="type"
      class="form-control"
      :class="!valid ? (valid !== null ? 'is-invalid' : '') : 'is-valid'"
      :id="idInput"
      :placeholder="placeholder"
      :value="modelValue"
      @input="change"
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isValid: null,
    };
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    idInput: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    title: {
      type: String,
      default: 'Текст',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    checkValid(isValid) {
      this.isValid = isValid;
    },
  },
  computed: {
    valid() {
      return this.isValid;
    },
  },
};
</script>

<style scoped>
input {
  border-color: #432818;
  border-radius: 0px;
  padding: 10px 20px;
  font-size: 20px;
}
.form-control:focus {
  border-color: #432818;
  box-shadow: 0 0 0 0.1rem #8b8b8b;
}
label {
  font-size: 20px;
}
</style>
