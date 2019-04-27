const app = document.getElementById('root');
const container = document.createElement('section');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos' , true);
request.onload = function() {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
  data.forEach(user => {
    function createSection(){
		const card = document.createElement("section");
		container.setAttribute('class', 'card');
		const p = document.createElement("p");
		p.setAttribute('class', 'each')
		p.innerHTML ='userid: ' + user.userId + '<br>' + 'id: ' + user.id + '<br>' + 'title: ' + user.title + '<br>'+ 'completed: ' + user.completed;
		
	 container.appendChild(card);
      card.appendChild(p);
	};
	  
	  createSection();
	  
  });
}
	 else {
    console.log("error");
  }
	
  };

request.send();
	