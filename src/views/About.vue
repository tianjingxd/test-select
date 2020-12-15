<template>
  <div class="form-body">
    <a-form
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      layout="horizontal"
    >
      <a-form-item class="form-row" label="选择日志" v-bind="validateInfos.logKey">
        <a-select v-model:value="form.logKey" placeholder="日志类型必选" @change="logNameChange">
          <a-select-option
            v-for="(label, name) in logNames"
            :key="name"
            :value="name"
          >
            <p>
              <span class="select-option-key">{{ label }}</span>
              <span>{{ name }}</span>
            </p>
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment-timezone'
import { useForm } from '@ant-design-vue/use'
function useSearchForm () {
  const store = useStore()
  const logNames = computed(() => {
    return store.getters.logNames
  })
  const form: Record<string, any> = reactive({
    time: [moment().format('YYYY-MM-DD HH:mm'), moment().endOf('day').format('YYYY-MM-DD HH:mm')],
    logKey: ''
  })
  const rules = reactive({
    logKey: [
      { required: true, message: '请选择日志类型' }
    ]
  })

  function logNameChange (val: string) {
    console.log(val)
  }

  const { validate, validateInfos } = useForm(form, rules)

  return {
    form,
    rules,
    validateInfos,
    validate,
    logNames,
    logNameChange
  }
}
export default defineComponent({
  components: {
  },
  props: {
    query: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const formInfo = useSearchForm()
    const { validate, form } = formInfo
    return {
      ...formInfo
    }
  }
})

</script>
<style lang="scss" scoped>
.form-body {
  max-width: 600px;
  min-width: 400px;
}
.form-row {
  margin: 0;
}
.select-option-key{
  float: right;
}
</style>
