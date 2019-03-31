var app=angular.module("myApp",["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider

        .when("/hotel",{
            templateUrl:"templates/hotel.html",
            controller:"hotelCtrl"
        })

        .when("/room",{
            templateUrl:"templates/room.html",
            controller:"roomCtrl"
        })
        .when("/inserthotel",{
            templateUrl:"templates/inserthotel.html",
            controller:"inserthotelCtrl"
        })

        .when("/insertroom",{
            templateUrl:"templates/insertroom.html",
            controller:"insertroomCtrl"
        })

        .otherwise({
            templateUrl:"templates/hotel.html"
        })

})




app.controller("hotelCtrl",function ($scope,$rootScope,$http) {
    $http.get("api/gethotel.php")
        .then(function (resp) {
            $scope.hotel=resp.data
        })
})


app.controller("roomCtrl",function ($scope,$rootScope,$http) {
    $http.get("api/getroom.php")
        .then(function (resp) {
            $scope.room=resp.data
        })
})



app.controller("inserthotelCtrl",function ($scope,$rootScope,$http) {

    $scope.prepare=function (y) {
        $scope.x=y.files[0]
        var reader=new FileReader()
        reader.onload=function (event) {
            $scope.image=event.target.result // base64 is string
            $scope.$apply()

        }
        reader.readAsDataURL(y.files[0])
    }

    $scope.insert=function () {
        $http({
            method  : 'POST',
            url     : "api/inserthotel.php",
        processData: false,
            transformRequest: function (data) {
            var formData = new FormData();
            formData.append("z", $scope.x);
            formData.append("name", $scope.name);
            formData.append("place", $scope.place);
            formData.append("type", $scope.type);
            formData.append("descr", $scope.descr);
            return formData;
        },
        data : $scope.name,
            headers: {
            'Content-Type': undefined
        }
    }).then(function (resp) {
            if(resp.data.status){
                alert("Inserted Successfully");
                $scope.name="";
                $scope.place="";
                $scope.type="";
                $scope.descr="";
                //$scope.img="";
                $scope.image="";
            }else
                alert("Something went wrong !")
        })
    }
})


app.controller("insertroomCtrl",function ($scope,$rootScope,$http) {

    $scope.prepare=function (y) {
        $scope.x=y.files[0]
        var reader=new FileReader()
        reader.onload=function (event) {
            $scope.image=event.target.result // base64 is string
            $scope.$apply()

        }
        reader.readAsDataURL(y.files[0])
    }

    $scope.insert=function () {
        $http({
            method  : 'POST',
            url     : "api/insertroom.php",
        processData: false,
            transformRequest: function (data) {
            var formData = new FormData();
            formData.append("z", $scope.x);
            formData.append("price", $scope.price);
            formData.append("type", $scope.type);
            formData.append("descr", $scope.descr);
            return formData;
        },
        data : $scope.name,
            headers: {
            'Content-Type': undefined
        }
    }).then(function (resp) {
            if(resp.data.status){
                alert("Inserted Successfully");
                $scope.price="";
                $scope.type="";
                $scope.descr="";
                //$scope.img="";
                $scope.image="";
            }else
                alert("Something went wrong !")
        })
    }
})