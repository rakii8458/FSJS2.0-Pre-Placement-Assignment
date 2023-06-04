let p= fetch("https://jsonplaceholder.typicode.com/posts");




// const div= document.getElementsByClassName("article-blog");


p.then((response)=>{
    console.log(response.status)
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
    


}).then((value2)=>{
    console.log(value2)
    let articleblog=  document.querySelector(".article-blog");

    

    value2.forEach(element => {
        let div= document.createElement("div");
       div.classList.add("blog-card");



        div.innerHTML= 
         `<h3 class='blog-title'>${element.title}</h3>
         <p class='blog-text'>${element.body}</p>
         <span class="post-no">${element.id}</span>
         <button class= "delete">Delete </button>`

       articleblog.appendChild(div);
});

    
})




// // POST data in api

 const submitbtn= document.querySelector('.formofblog');
 submitbtn.addEventListener('submit', event=>{
    event.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("blog").value;


  const postData = {
    title,
    body
    
  };


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST' ,
        headers: {
            "Content-Type": "application/json",
          },
          
       
        body: JSON.stringify(postData),
    }).then(res=> res.json())
    .then((data) => {
            const articleblog = document.querySelector(".article-blog");
            const div = document.createElement("div");
            div.classList.add("blog-card");
            div.innerHTML = `<h3 class='blog-title'>${data.title}</h3>
            <p class='blog-text'>${data.body}</p>
            <span class="post-no">${data.id}</span>
            <button class="delete" data-id="${data.id}">Delete</button>`;
           articleblog.appendChild(div);
         
            document.querySelector(".formofblog").reset();
           
            

          })

    });

    //Delete functionality
    document.addEventListener("click", (e)=>{
      if(e.target.classList.contains("delete")){
        const deletebtn= e.target.getAttribute("data-id");

        fetch(`https://jsonplaceholder.typicode.com/posts/${deletebtn}`,{
          method: "DELETE",
        }).then(()=>{
          e.target.parentElement.remove();
        })

        }
      })
   

