let nameImage = document.querySelector('#nameImage')
let src = document.querySelector('#src')
let btn = document.getElementById("#btn")
async function myImage(){
    let res = await fetch("https://6657369a9f970b3b36c86599.mockapi.io/API",
    {
        method: 'POST',
        body : JSON.stringify({
        nameImage: nameImage.value,
        src : src.value,
        }),
        headers:{
            'Content-type': 'application/json; charset = UTF-8'
        },
    })
    let data = await res.json();
    image.src =src.value;

}

async function imageList(){
    let res = await fetch("https://6657369a9f970b3b36c86599.mockapi.io/API")
    let data = await res.json();
    data.forEach(e => {
        let divImage = document.createElement("div")
        let img = document.createElement("img")
        img.src = e.src;
        divImage.append(img)

        document.getElementById("all").append(divImage);
        // body.append(divImage)

    })
}
imageList()

async function DeleteI(){
    let res = await fetch("https://6657369a9f970b3b36c86599.mockapi.io/API/" + id,
    {
        method: 'DELETE',
        body : JSON.stringify({
        }),
        headers:{
            'Content-type': 'application/json; charset = UTF-8'
        },
    })
    data.forEach(e => {
        let but = document.createElement("button")
        divImage.append(but)
        divImage.append(img)
        console.log(img)


        document.getElementById("all").append(divImage);
        // body.append(divImage)

    })
}






