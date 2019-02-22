//show form to add task
function addTask() {
		var showForm = document.getElementById('form-holder');
		showForm.style.display = 'block';
	}

//To make the form disappear
function discardTask() {
		var showForm = document.getElementById('form');
		showForm.style.display = 'none';
	}

//show table 
function viewTask() {
		var showForm = document.getElementById('table');
		showForm.style.display = 'block';
	}

//To make the form disappear
function closeTable() {
		var showForm = document.getElementById('table');
		showForm.style.display = 'none';
	}

// Changes form behaviour
var form = document.getElementById('form');
form.addEventListener('submit', saveTask);
var i = 1;

	
//Adds Task
	function saveTask(e) {
		e.preventDefault();
		//getting input value
		var task = document.getElementById("task").value;
		var date = document.getElementById("date").value;
		var time = document.getElementById("time").value;
		var location = document.getElementById("location").value;
		var activity = document.getElementById("activity").value;
		console.log(task,date,time,location,activity);

		//Create a tr element
		var tr = document.createElement('tr');
		tr.id = "tabRow";
		console.log(tr);
		
				//Create a td element
		var td = document.createElement('td');
		//add text node with input value
		td.appendChild(document.createTextNode(++i));
		//adding it to the tr 
		tr.appendChild(td);

		//Create a td element
		var td1 = document.createElement('td');
		//add text node with input value
		td1.appendChild(document.createTextNode(task));
		//adding it to the tr 
		tr.appendChild(td1);

		//Create a td element
		var td2 = document.createElement('td');
		//add text node with input value
		td2.appendChild(document.createTextNode(date));
		//adding it to the tr 
		tr.appendChild(td2);

		//Create a td element
		var td3 = document.createElement('td');
		//add text node with input value
		td3.appendChild(document.createTextNode(time));
		//adding it to the tr 
		tr.appendChild(td3);

		//Create a td element
		var td4 = document.createElement('td');
		//add text node with input value
		td4.appendChild(document.createTextNode(location));
		//adding it to the tr 
		tr.appendChild(td4);

		//Create a td element
		var td5 = document.createElement('td');
		//add text node with input value
		td5.appendChild(document.createTextNode(activity));
		//adding it to the tr 
		tr.appendChild(td5);

		//Create a delete button element
		var td6 = document.createElement('td');
		//Creating a button
		var deletebtn = document.createElement('button');
		deletebtn.className = 'btn btn-danger delete';
		//adding text to button
		deletebtn.appendChild(document.createTextNode('Done'));
		//adding the button to the td
		td6.appendChild(deletebtn);
		//adding td it to the tr 
		tr.appendChild(td6);

		//getting our table
		var table = document.getElementById('maintable');
		table.appendChild(tr);
		alert('Task added Successfully');

	}

		//removing Task
var tabRow = document.getElementById('tabRow');
tabRow.addEventListener('click', removeTask);


function removeTask(e) {
	if (e.target.classList.contains('delete')) {
		console.log('hello');
		if(confirm('Are sure?')){

			var ek = this.parentElement.parentElement;
			ek.style.display="none";
			// var trow = e.target.parentElement.parentElement; 
			// console.log(trow); 
			// var table = document.getElementById('maintable');
			// table.removeChild(trow);
		}
	}
	
}

//Color change Function
	var box = document.getElementById("box");
	box.addEventListener('mousemove',eventMove);

	function eventMove(e){
		console.log(e.type)
		box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
		box.style.color = 'white';
		//document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
	}