angular.module('myApp', []).controller('userCtrl', function($scope) {
    
        $scope.name = '';
        $scope.marks = '';
        $scope.grades = '';
        $scope.evaluation = '';
            $scope.users = 
                [
                   { name: 'Bob', marks: 91, grades: 'A', level: "Undergraduate", major:"Information Technology", evaluation:"Great"},
                   { name: 'John', marks: 98, grades: 'A+', level: "Graduate", major:"Computer Science", evaluation:"Great"},
                   { name: 'Christina', marks: 86, grades: 'B', level: "Undergraduate", major:"Political Science", evaluation:"Good"},
                   { name: 'Maggie', marks: 80, grades: 'B-', level: "Undergraduate", major:"Biology", evaluation:"Good"},
                   { name: 'Adam', marks: 75, grades: 'C', level: "Graduate", major:"General Science", evaluation:"OK"},
                   { name: 'Chaewon', marks: 96, grades: 'A+', level: "Graduate", major:"Chemistry", evaluation:"Great"},
                   { name: 'Lee', marks: 65, grades: 'D+', level: "Undergraduate", major:"Biochemistry", evaluation:"Fail"},
                   { name: 'Oliva', marks: 79, grades: 'C+', level: "Undergraduate", major:"Computer Engineering", evaluation:"OK"},
                   { name: 'Rose', marks: 88, grades: 'B+', level: "Undergraduate", major:"Fine Art", evaluation:"Good"},
                   { name: 'Chris', marks: 51, grades: 'F', level: "Graduate", major:"Architecture", evaluation:"Fail"}
                ];
        
        
        $scope.error = false;
        $scope.incomplete = false; 
        $scope.hideform = true; 
        
    
        $scope.editUser = function() {
        $scope.hideform = false;
            $scope.name = '';
            $scope.marks = '';
            $scope.grades = '';
            $scope.level = '';
            $scope.major = '';
            $scope.evaluation = '';
            
        };
    
        $scope.saveChange = function() {
        $scope.users.push( {name:$scope.name, marks:$scope.marks, grades:$scope.grades, level:$scope.level, major:$scope.major, evaluation:$scope.evaluation} );
    };
});