//Hamburger menu//

function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}

//Logs zipcode into console//

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const payLoad = new FormData(form);

    console.log([...payLoad])

})


    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?size=5&segmentName=music&apikey=YYlLAH31UiK7q5rmORIBVL1Amhm4GFR5",
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });
