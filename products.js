document.addEventListener("DOMContentLoaded", function() {

    // 1. Navbar Toggle Functionality
    var menuicon = document.getElementById("menuicon");
    var closenav = document.getElementById("closenav");
    var sidenav = document.getElementById("sidenav");

    if (menuicon && sidenav) {
        menuicon.addEventListener("click", function() {
            sidenav.style.right = 0;
        });
    }

    if (closenav && sidenav) {
        closenav.addEventListener("click", function() {
            sidenav.style.right = "-50%";
        });
    }

    // 2. Product Search Functionality
    var productContainer = document.getElementById("product-container");
    var search = document.getElementById("search");

    if (productContainer && search) {
        var productlist = productContainer.children;

        search.addEventListener("keyup", function(event) {
            var enteredValue = event.target.value.toUpperCase().trim();

            for (var count = 0; count < productlist.length; count++) {
                var h1Tag = productlist[count].querySelector("h1");
                
                if (h1Tag) {
                    var productname = h1Tag.textContent.toUpperCase().trim();
                    
                    // Check if the product name contains what was typed
                    if (productname.indexOf(enteredValue) < 0) {
                        productlist[count].style.display = "none";
                    } else {
                        productlist[count].style.display = ""; // Reset to show in grid
                    }
                }
            }
        });
    }

});