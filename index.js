// parent class for card
const taskContainer= document.querySelector(".task_container");
const newCard=({id,imageUrl,taskTitle,taskDescription,taskType})=>`<div class="col-md-6 col-lg-4' id=${id}>
    <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
    </div>
    <img src=${imageUrl} 
    class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${taskTitle}</h5>
      <p class="card-text">${taskDescription}</p>
      <span class="badge bg-primary">${taskType}</span>

    </div>
    <div class="card-footer text-muted"><button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
  </div>
</div>`;
const saveChanges=()=>{
    const taskdata={
        id:`${Date.now()}`, //unique number for card id
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskDescription:document.getElementById("taskdesc").value,
        taskType:document.getElementById("tasktype").value,
    };

    const createNewcard= newCard(taskdata);
    taskContainer.insertAdjacentHTML("beforeend",createNewcard);
};