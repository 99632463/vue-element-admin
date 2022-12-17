<template>
  <div>
    <button @click="addCourse">新增</button>
    <choose-course ref="chooseCourse"></choose-course>
  </div>
</template>

<script>
import chooseCourse from '@/components/ChooseCourse'

export default {
  components: {
    chooseCourse
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    addCourse(){
      this.$refs.chooseCourse.open((val) => {
        console.log(123, val);
      }, 50)
    }
  },
};
</script>

<style lang="scss" scoped>

</style>