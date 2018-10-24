<template>
    <div id="show-blogs">
        <h2>All Blogs</h2> <input type="text" v-model="search" placeholder="Search Blogs">

        <div v-for="blog in filteredBlogs" class="single-blog">
            <article>{{blog.content | snip }} </article>

        </div>

    </div>
</template>
<script>
export default {
    data() {
        return{
            blogs:[],
            search:''
        }
    },
    created(){
        this.$http.get('https://vue-project-e3c7c.firebaseio.com/posts.json').then(data => {
            return data.json()
        }).then(data => {
            var blogsArray = [];
            for(let key in data){
                data[key].id = key
                blogsArray.push(data[key])
            }
            this.blogs = blogsArray;
        })
    },
    computed:{
       filteredBlogs(){
           return this.blogs.filter(blog => blog.title.match(this.search))
       }
    }
}
</script>
 <style scoped>
   #show-blogs{
       max-width: 800px;
       margin: 0 auto
   }
   .single-blog{
       padding: 20px;
       margin: 20px 0;
       box-sizing: border-box;
       background: #58d68d
   }
 </style>
 
 