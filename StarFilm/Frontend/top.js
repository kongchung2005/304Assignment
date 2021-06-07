var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:10888/api/top', true)
request.send()
var token = localStorage.getItem('token');

request.onload = function() {
	var data = JSON.parse(this.response)
	data = JSON.stringify(data, 'name')
	data = JSON.parse(data)
	if(request.status >= 200 && request.status < 400) {
		for(i=0; i < data.response.length; i++){
			var figurelist = document.getElementById('figurelist')
			var divFigure = document.createElement('div')
			divFigure.setAttribute('class', 'divFigure')
			
			//display Image
			var fimg = document.createElement('img');
			fimg.setAttribute("src", data.response[i].img)
			fimg.setAttribute("width", "280");
			fimg.setAttribute("height", "300");
			
			//Display figure name
			var nameLabel = document.createElement('input') //create the label	
			nameLabel.setAttribute("id", "name" + data.response[i]._id)
			nameLabel.value = data.response[i].name
			var figurename = document.createTextNode(data.response[i].name)	//sting of label
			nameLabel.appendChild(figurename)
			
			//display collection
			//var collectionLabel = document.createElement('label')
			//var figurecollection = document.createTextNode(data.response[i].coll)	
			//collectionLabel.appendChild(figurecollection)

			//display Price
			var priceinput = document.createElement('input')
			priceinput.setAttribute("id", "price" + data.response[i]._id)
			priceinput.value = data.response[i].price
			priceinput.type = "text"
			var text4 = document.createTextNode("$" + data.response[i].price)
			priceinput.appendChild(text4)
			
			var input3 = document.createElement('input')
			input3.setAttribute("id", data.response[i]._id)
			input3.setAttribute("onclick", "deleteFigure(this)")
			input3.type = "submit"
			input3.value = "Remove"
			
			
			divFigure.appendChild(fimg)

			divFigure.appendChild(nameLabel)

			//divFigure.appendChild(collectionLabel)

			divFigure.appendChild(priceinput)

			divFigure.appendChild(input3)
			
			figurelist.appendChild(divFigure)
			}
	} else {
		const errorMessage = document.createElement('marquee')
		errorMessage.textContent = 'it is not working!'
		app.appendChild(errorMessage)
	}
};


function deleteFigure(data){
	var id = data.id
	var figure = JSON.stringify({
			"figureID": id
		})
	console.log(figure)
	var request = new XMLHttpRequest()
	request.open('POST', 'http://localhost:10888/api/top/delete', false)
	request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200) {
				console.log("successful");
				alert("Figure is removed from Top Selling")
				document.location.href = "top.html"
			} else {
				console.log("failed");
			}
		}
	};
	request.send(figure)
}












