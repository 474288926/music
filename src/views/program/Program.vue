<template>
  <div id="program">
    <div class="program">
      <program-fl :list="program" />
      <program-fr :list="djprogram" />
    </div>
  </div>
</template>

<script>
  import ProgramFl from './childComps/ProgramFl.vue'
  import ProgramFr from './childComps/ProgramFr.vue'
  
  import { getDjProgramDetail, Program, getDjProgram, DjProgram } from '../../network/program.js' 
  
  export default{
    name: 'Program',
    components:{
      ProgramFl,
      ProgramFr
    },
    data(){
      return {
        program: [],
        djprogram: []
      }
    },
    created() {
      this.getDjProgramDetail()
    },
    methods:{
      getDjProgramDetail(){
        let id = this.$route.query.id
        getDjProgramDetail(id).then(res => {
          this.program = new Program(res.program) 
          this.getDjProgram(res.program.radio.id)
          // console.log(res)
        })
      },
      getDjProgram(id){
        getDjProgram(id).then(res => {
          let list = []
          res.programs.splice(0, 5).forEach(value => {
            list.push(new DjProgram(value)) 
          })
          this.djprogram = list
          console.log(this.djprogram)
        })
      }
    }
  }
</script>

<style scoped>
  #program{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .program{
    width: 50%;
    border: #d5d5d5 1px solid;
    border-top: none;
  }
</style>
