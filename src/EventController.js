import eventsJson from './events.json';
import Events from './Events';


var controller = {

	search: function (searchQuery) {
		var results = [];
		var searchField = "city";
		var searchTerm = Events.searchTerm;
		var list = eventsJson['concerts'];
		for (var i = 0; i < list.length; i++) {
			if (list[i][searchField] === searchVal) {
				results.push(list[i]);
			}
		}

		console.log(results);
	}

}


export default controller;