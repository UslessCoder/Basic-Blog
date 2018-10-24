<template>
    <div id="app">
        <div v-if="!submitted">
      <h1>Add New Blog</h1>
      <h3>Title :</h3>
      <input type="text" placeholder="Title" v-model.lazy="blog.title">
      <h3>Blog Content :</h3>
      <textarea placeholder="Content" v-model.lazy="blog.content"></textarea>
      <h3>Categories :</h3>
      <div id="checkboxes">
          <label>Ukoly</label><input type="checkbox" value="ukoly" v-model="blog.categories">
          <label>Videa</label><input type="checkbox"  value="videa" v-model="blog.categories">
          <label>Prezentace</label><input type="checkbox" value="prezentace " v-model="blog.categories">
         <label>Dokumenty</label> <input type="checkbox" value="hovna" v-model="blog.categories">
      </div>
      <h3>Author :</h3>
      <select v-model="blog.author">
          <option v-for="author in authors">{{author}} </option>
      </select>

      <button v-on:click.prevent="post">Add blog</button>
        </div>
        <h1 v-if="submitted">Thanks for adding a blog</h1>
       
      <div id="preview">
        <h2>- Blog Preview -</h2>
        <h2>{{blog.title}} </h2>
        <h4>{{blog.content}} </h4>
        <h3>{{blog.category}} </h3>
            <h4 v-for="category in blog.categories">{{category}} </h4>
            <h3>{{blog.author}} </h3>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            blog:{
                title:'',
                content:'',
                categories:[],
                author:""
            },
            authors:['Franta','Josef','Jarda','Richard' ,'Bramborak'],
            submitted:false
        }
     
    },
    methods:{
      post(){
          this.$http.post("https://vue-project-e3c7c.firebaseio.com/posts.json",this.blog).then(data => {
              console.log(data),
              this.submitted = true
          } )
      }
    }
}
</script>
<style scoped>
 #app *{
     box-sizing: border-box
 }
 #app{
     margin: 20px auto;
     max-width: 500px;
 }
 label{
     display: block;
     margin: 20px 0 10px
 }
 input[type='text'],textarea{
     display: block;
     width: 100%;
     padding: 8px;
 }
 #preview{
     padding: 10px 20px;
     border: 5px dotted #ccc;
     margin: 30px 0
 }
 h2{
     margin-top:10px
 }
 #checkboxes input{
     display: inline-block;
     margin-right: 10px
 }
 #checkboxes label{
     display: inline-block
 }
 #checkboxes select{
     display: inline-block;
     margin-right: 10px
 }
</style>


