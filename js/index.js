var nameinput=document.getElementById("sitename");
var urlinput=document.getElementById("siteurl");

var addbtn=document.getElementById("addbtn");
var updatebtn=document.getElementById("updatebtn");

var container=[];

if(localStorage.getItem("content")!==null){
    container=JSON.parse(localStorage.getItem("content"));
    display();
}

function addation(){
    var content={
        name:nameinput.value,
        url:urlinput.value
    }
    container.push(content);
    localStorage.setItem("content",JSON.stringify(container));
    console.log(container);
    clear();
    display();
}

function clear(){
    nameinput.value="";
    urlinput.value="";
}

function display(){
    var cartoona="";
    for(var i=0;i<container.length;i++){
        cartoona+=
        `<tr>
            <td class="table-light">
                ${i}
            </td>
            <td class="table-light">
                ${container[i].name}
            </td>
            <td class="table-light">
                <button type="button" class="btn btn-success px-4 py-0"onclick="visit(${i})">Visit</button>
            </td>
            <td class="table-light">
                <button type="button" class="btn btn-danger px-4 py-0"onclick="deletion(${i})">Delete</button>
            </td>
            <td class="table-light">
                <button type="button" class="btn btn-warning px-4 py-0"onclick="setfordisplay(${i})">Update</button>
            </td>
        </tr>`
    }
    document.getElementById("row").innerHTML=cartoona;
}

function deletion(deletedItems){
    container.splice(deletedItems,1);
    console.log(container);
    localStorage.setItem("content",JSON.stringify(container));
    display();
}

function visit(index) {
    var url = container[index].url;
    // Ensure the URL starts with 'https://'
    if (!url.startsWith('https://')) {
        url = 'https://' + url.replace(/^https?:\/\//, '');
    }

    window.location.href = url; 
}

var i;
function setfordisplay(updatedindex){
    i=updatedindex;
    addbtn.classList.add("d-none");
    updatebtn.classList.remove("d-none");
    nameinput.value=container[updatedindex].name;
    urlinput.value=container[updatedindex].url;
}
function updateproduct(){
    container[i].name=nameinput.value;
    container[i].url=urlinput.value;
    localStorage.setItem("content",JSON.stringify(container));
    clear();
    display();
}
var regex=/^[a-z]{3,}/;
function demo(valuee){
    if(regex.test(valuee)){
        document.getElementById("sitename").classList.add("is-valid");
        document.getElementById("sitename").classList.remove("is-invalid");
    }
    else{
        document.getElementById("sitename").classList.add("is-invalid");
        document.getElementById("sitename").classList.remove("is-valid");
    }
}
var regex2=/^(www)\.+[a-z]+\.(com)$/;

function demo2(valuee2){
    if(regex2.test(valuee2)){
        document.getElementById("siteurl").classList.add("is-valid");
        document.getElementById("siteurl").classList.remove("is-invalid");
    }
    else{
        document.getElementById("siteurl").classList.add("is-invalid");
        document.getElementById("siteurl").classList.remove("is-valid");
    }
}