let jokeBtn=document.getElementById("jokeBtn");
    async function getJoke(){
    try{
        let response=await fetch("https://official-joke-api.appspot.com/random_joke");
        let data=await response.json();
        document.getElementById("setup").innerText=data.setup;
        document.getElementById("punchline").innerText=data.punchline;
        }
        catch(error){
        document.getElementById("setup").innerText="failed to load joke 😢";
        document.getElementById("punchline").innerText="";
    }
}
    jokeBtn.addEventListener("click",getJoke);