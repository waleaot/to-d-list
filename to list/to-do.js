function addTask(){
	var task = document.getElementById("tasks").value;
	//var task = prompt("Enter task");
	var list = document.createElement("li");
	list.id="button";

	var btn = document.createElement("span");
	btn.class="btn btn-success";
	btn.onclick="removeTask()";


	var node = document.createTextNode(task);
	list.appendChild(node);

	var element = document.getElementById("list");
	element.appendChild(list);
	element.innerHTML += '<span class="btn btn-success" onclick="removeTask()">Done</span>';
}

 
function removeTask(){
	var parent = document.getElementById("list");
	var child = document.getElementById("button");
	parent.removeChild(child);
}

var btns = document.querySelectorAll('#list-holder .btn-success');
btns.addEventlistener('click',function(e){
	const li = e.target.parentElement;
	li.parentNode.removeChild(li);
});