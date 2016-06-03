(function() { 

  var app = angular.module('candyShop', []);

  app.controller('ShopController', ['$scope', function($scope){

    $scope.candies = [
      { 
        type: 'Sour keys',
        price: .05,
        cover: 'candy/sourkeys.jpg',
        description: 'Tasty but sour and bad for your enamel.',
        isAvailable: true,
        likes: 0,
        dislikes: 0,
        quantity: 2400
        
      },
      {
        type: 'Pop Bottles',
        price: .10,
        cover: 'candy/popbottles.jpg',
        description: 'Sugary and sweet and tastes like cola.',
        isAvailable: true,
        likes: 0,
        dislikes: 0,
        quantity: 104
      },
      { 
        type: 'Jolly Ranchers',
        price: .10,
        cover: 'candy/jollyranchers.jpg',
        description: 'Hard candy with multiple flavours.',
        isAvailable: true,
        likes: 0,
        dislikes: 0,
        quantity: 4330

      },
      { type: 'Frogs',
        price: .05,
        cover: 'candy/frog.jpg',
        description: 'Sort of tasteless candy that looks cool but whatever.',
        isAvailable: true,
        likes: 0,
        dislikes: 0,
        quantity: 30
      },
      {
        type: 'Warheads',
        price: .20,
        cover: 'candy/warheads.jpg',
        description: 'Not for the faint of heart.. very sour.',
        isAvailable: true,
        likes: 0,
        dislikes: 0,
        quantity: 3230
      },
      {
        type: 'Black Licorice',
        price: 0,
        cover: 'candy/ blacklic.jpg',
        description: 'THIS IS NOT REAL CANDY! Yes its available, but take it for free.',
        isAvailable: true,
        likes: 0,
        dislikes: 0,
        quantity: 95
      },
      {
        type: 'Best Candy Ever',
        price: 1000,
        cover: 'candy/magic.jpg',
        description: 'Bought by only the top 1% of 1%.',
        isAvailable: false,
        likes: 0,
        dislikes: 0,
        quantity: 0
      },

    ];

    $scope.plusOne = function(index) { 
      $scope.candies[index].likes += 1;
    };

    $scope.minusOne = function(index) {
      $scope.candies[index].dislikes += 1;
    };

    $scope.orderQuantity = function(index, order) {
      if ($scope.candies[index].quantity >= order) {
          $scope.candies[index].quantity -= order;
      } 
    };

    }]);

    app.controller("PanelController", function() {
    this.tab = 1;
    });


})();

  // var minusOne = function(index) {
  //   candy[index].dislikes += 1;
  // };




