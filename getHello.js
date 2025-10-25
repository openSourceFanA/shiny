

fetch("http://127.0.0.1:5000/api/hello")
    .then(res => res.json())
    .then(data => {
        document.getElementById("title").innerText = data.message;
    })
    .catch(err => {
        document.getElementById("title").innerText = "Can't reach FastAPI :<";
        console.error(err);
    })