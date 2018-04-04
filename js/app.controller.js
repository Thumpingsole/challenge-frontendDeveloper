	app.controller('Ctrl', function($http){
		
		var vm = this;
		var userName = "Thumpingsole";

		vm.fetchData = function(){
				vm.data = false;
				$http.get('https://api.github.com/users/' + userName + "/repos").then(function(res){
					// console.log(res.data);
					vm.project = res.data[0].name;
					vm.projectOne = res.data[1].name;
					vm.projectTwo = res.data[2].name;
					vm.projectThree = res.data[3].name;
			});
		}
	});