      let likes = 0;
      $(document).ready(function () {
        // ajax to get current likes
        // let likes from server are 10
        // assign the current likes to variable
        likes = 10;
        setLikes(likes);
      });
      
      $("body").on("click", ".likeBtn", function () {
        // ajax to post a current likes
        // in success add increment to likes
        likes++;
        setLikes(likes);
      });

      function setLikes(count) {
        $(".totalLikes").text(count);
      }