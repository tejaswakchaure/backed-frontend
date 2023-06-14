async function addData(){
    let inputData = document.querySelector("#id1");
    let existingData = inputData.value;

    let uri =`http://127.0.0.1:4000/add?message=${existingData}`;
    await fetch(uri);

    inputData.value ="";
    readData();

}

async function readData(){
    let uri = "http://127.0.0.1:4000/read";
    let res = await fetch(uri);
    let list = await res.json();
    console.log(list);

    for(let item of list){
        let parentData = document.querySelector("#id2");
        let extValue = parentData.innerHTML;

        let newValue = `<h1>${item.message}</h1>`;

        parentData.innerHTML= extValue + newValue;

    }
}