

let addbtn = document.getElementById("add-btn");
let addtitle = document.getElementById("notes-title");
let addtext = document.getElementById("notes-text");

addbtn.addEventListener('click', (e) =>{
    if(addtitle.value == null || addtext.value == null){
        return alert("Please add notes title and text");
    }
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = []
    }
    else{
        notesobj = JSON.parse(notes);
    }
    
    let myobj = {
        title:addtitle.value,
        text:addtext.value
    }
    notesobj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtext.value = "";
    addtitle.value = "";
    shownotes();
})

function shownotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = []
    }
    else{
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function(element, index){
        html += ` <div id="notes" class="insnote">
        <div id="note">
            <p class="notes-count">your ${index + 1}</p>
            <h3 class="notes-title">${element.title}</h3>
            <p class="notes-para">${element.text}</p>
            <button id="${index}" onclick = "editnote(this.id)">Edit</button>
            <button id="${index}" onclick = "deletnote(this.id)">Delete</button>
        </div>
    </div>`

    let noteelem = document.getElementById("notes");
    if(notesobj.length != 0){
        noteelem.innerHTML = html
    }
    else{
        noteelem.innerHTML = "note notes yet! add a note using add btn"
    }
    });
}

shownotes();

function deletnote(){
    let confirmdel = confirm("are you sure to delet this?");
    if(confirmdel == true){
        if(notes == null){
            notesobj = []
        }
        else{
            notesobj = JSON.parse(notes);
        } 
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes",stringify(notesobj));
    shownotes();
}

function editnote(){
    if(addtext.value !== "" || addtitle.value !== ""){
        if(notes == null){
            notesobj = []
        }
        else{
            notesobj = JSON.parse(notes);
        } 
        
        notesobj.findIndex((element, index)=>{
            addtitle.value = element.title;
            addtext.value = element.text;
        });
        notesobj.splice(index, 1);
        localStorage.getItem("notes", JSON.stringify(notesobj));
    }
}