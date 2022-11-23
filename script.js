let form = document.getElementById("note")
let noteText = document.getElementById("note-text")
let list = document.getElementById("list")

let arr 
if(localStorage.getItem("my-notes")){
  arr=JSON.parse(localStorage.getItem("my-notes"))
}else{
  arr = [] 
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let text = noteText.value
  arr.push(text)


  let store = JSON.stringify(arr)
  localStorage.setItem("my-notes", store)

  noteText.value = ""

  let noteItem = document.createElement("div")
  noteItem.setAttribute("id",arr.length)

  let del = document.createElement("button")
  del.setAttribute("id","del" + arr.length)
  del.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>"
  del.classList.add("delete")
  list.appendChild(del)
  del.addEventListener("click",(e)=>{
    arr.splice(arr.length,1)
    let store = JSON.stringify(arr)
    localStorage.setItem("my-notes",store)

    listAllNotes()
  })

  list.appendChild(del)

  noteItem.classList.add("note-item")
  noteItem.innerHTML = text
  list.appendchild(noteItem)
  
})
  function listAllNotes(){
    list.innerHTML=""
  for(let i=0;i<arr.length;i++){
    let noteItem = document.createElement("div")
noteItem.setAttribute("id",i)

    
    let del = document.createElement("button")
    del.setAttribute("id","del" + i)
    del.innerHTML = "<i class = 'fa fa-trash' aria-hidden='true'></i>"
    del.classList.add("delete")
    del.addEventListener("click",(e)=>{
      arr.splice(i,1)
      let store = JSON.stringify(arr)
      localStorage.setItem("my-notes",store)

      listAllNotes()
    })
    list.appendChild(del)

    noteItem.classList.add("note-item")
    noteItem.innerHTML = arr[i]
    list.appendChild(noteItem)
  }
}
listAllNotes()

