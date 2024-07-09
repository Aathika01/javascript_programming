// Return the public interface
return {
    go: function (direction) {
      if (typeof direction !== "string") {
        return "*** Invalid direction ***";
      }
  
      var place = player.getPlace();
      var destination = place.getExit(direction);
  
      if (destination !== undefined) {
        player.setPlace(destination);
        render();
        return "";
      } else {
        return "*** There is no exit in that direction ***";
      }
    },
  
    get: function () {
      var place = player.getPlace();
      var item = place.getLastItem();
  
      if (item !== undefined) {
        player.addItem(item);
        render();
        return "";
      } else {
        return "*** There is no item to get ***";
      }
    }
  };