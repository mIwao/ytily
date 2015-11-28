angular.module('ytily', [])
  .controller('SongListCtrl', ['$scope', ($scope) => {
    $scope.songList = [
      '好きだって言えなくて',
      'Pleasure treasure',
      'Luv Fanatic',
      '雨のパンセ'
    ]
  }])