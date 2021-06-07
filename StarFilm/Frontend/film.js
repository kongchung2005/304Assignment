var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:10888/api/film', true)
var token = localStorage.getItem('token');
request.send()
request.onload = function() {
	var data = JSON.parse(this.response)
	data = JSON.stringify(data, 'name')
	data = JSON.parse(data)
	if(request.status >= 200 && request.status < 400) {
		for(i=0; i < data.response.length; i++){
			var filmlist = document.getElementById('filmlist')
			var divFilm = document.createElement('div')
			divFilm.setAttribute('class', 'divFilm')
			
			//show film image
			var filmImage = document.createElement('img');
			filmImage.setAttribute("src", data.response[i].img)
			filmImage.setAttribute("width", "280");
			filmImage.setAttribute("height", "300");
			
			//show film name
			var nameLabel = document.createElement('input') //create the label	
			nameLabel.setAttribute("id", "name" + data.response[i]._id)
			nameLabel.value = data.response[i].name
			var filmName = document.createTextNode(data.response[i].name)	//sting of label
			nameLabel.appendChild(filmName)
			

			//show film price
			var priceLabel = document.createElement('input')
			priceLabel.setAttribute("id", "price" + data.response[i]._id)
			priceLabel.value = data.response[i].price
			priceLabel.type = "text"
			var filmPrice = document.createTextNode("$" + data.response[i].price)
			priceLabel.appendChild(filmPrice)

			//show film id
			var idlabel = document.createElement('input')
			idlabel.setAttribute("id", "id" + data.response[i]._id)
			idlabel.value = data.response[i]._id
			idlabel.type = "text"
			var id = document.createTextNode("$" + data.response[i].id)
			idlabel.appendChild(id)
			
			
			var input1 = document.createElement('input')
			input1.setAttribute("id", data.response[i]._id)
			input1.setAttribute("onclick", "addToTop(this)")
			input1.type = "submit"
			input1.value = "Add to Top Selling"
			
			//update film info
			var input2 = document.createElement('input')
			input2.setAttribute("id", data.response[i]._id)
			input2.setAttribute("onclick", "updateFilm(this)")
			input2.type = "submit"
			input2.value = "Update Film"
			
			//del film
			var input3 = document.createElement('input')
			input3.setAttribute("id", data.response[i]._id)
			input3.setAttribute("onclick", "deleteFilm(this)")
			input3.type = "submit"
			input3.value = "Delete Film"
			
			
			divFilm.appendChild(filmImage)

			divFilm.appendChild(nameLabel)

			//divFilm.appendChild(collectionLabel)

			divFilm.appendChild(priceLabel)

			divFilm.appendChild(idlabel)

			divFilm.appendChild(input1)

			divFilm.appendChild(input2)

			divFilm.appendChild(input3)
			
			filmlist.appendChild(divFilm)
			}
	} else {
		const errorMessage = document.createElement('marquee')
		errorMessage.textContent = 'it is not working!'
		app.appendChild(errorMessage)
	}
};


function addToTop(ttop){
	console.log(ttop.id);
	var request = new XMLHttpRequest()
	var id = ttop.id
	var name = document.getElementById("name" + ttop.id ).value
	var price = document.getElementById("price" + ttop.id).value
	var img = "data:image/jpeg;base64,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"	
	var figure = JSON.stringify({
		"name": name,
		"price" : price,
		"img" : img
	})
	request.open('POST', 'http://localhost:10888/api/top/add', false)
	request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 201) {
				alert("It has been added")
				redirect();
			} else {
				console.log("failed");
			}
		}
	};
	request.send(figure)
}

function updateFilm(data){
	var id = data.id
	var name = document.getElementById("name" +  id).value
	var price = document.getElementById("price" + id).value
	
	var film = JSON.stringify({
		"filmID": id,
		"name": name,
		"price" : price
		})
	console.log(film)
	var request = new XMLHttpRequest()
	request.open('post', 'http://localhost:10888/api/film/update', false)
	request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200) {
				console.log("successful");
				alert("The Film is Updated")
				document.location.href = "film.html"
			} else {
				console.log("failed");
			}
		}
	};
	request.send(film)

}



function deleteFilm(data){
	var id = data.id
	var film = JSON.stringify({
			"filmID": id
		})
	console.log(film)
	var request = new XMLHttpRequest()
	request.open('POST', 'http://localhost:10888/api/film/delete', false)
	request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200) {
				console.log("successful");
				alert("The Film is Deleted")
				document.location.href = "film.html"
			} else {
				console.log("failed");
			}
		}
	};
	request.send(film)
}











