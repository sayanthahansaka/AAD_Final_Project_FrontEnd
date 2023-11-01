localStorage.setItem("packagesATokan",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBfQWFkbWluIiwic3ViIjoidXNlciIsImlhdCI6MTY5ODgxMzUyNywiZXhwIjo0ODUyNDEzNTI3fQ.FoksKLsWxCWgDlwunKYCZ4DRbrj-OeRic3LjqmycU0E"));


// Check if the document is ready
$(document).ready(function() {
    // Attach the click event handler to the "payAddButton"
    $("#btnAdd").on("click", function() {
        OnSavePackage();
    });
    // update the click event handler to the "payAddButton"
    $("#btnUpdate").on("click", function() {
        OnUpdatePackage();
    });

    $("#btnDelete").on("click", function() {
        OnDltPackage();
    });

    $("#manageHotelButton").on("click", function() {
        OnGetAll();
    });


});

$(document).ready(function (){
    $('#SearchButton').on('click', function () {
        const P_ID = $('#packageID').val().trim();
        if (P_ID) {
            fetchGuideByID(P_ID);
        } else {
            swal("Please enter a  ID to search ");
        }
    });
});

function fetchGuideByID(id) {
    $.ajax({
        url: 'http://localhost:8081/api/v1/package_server/P_search?Package_ID=' + id,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packagesATokan"))
        },
        success: function (res) {
            populateFieldsWithRes(res);
        },
        error: function () {
            swal("Oops!");
        }
    });
}

function populateFieldsWithRes(res) {
    let  Data = res.data;
    if (Data) {
        $("#uuid").val(Data.package_id);
        $("#uusercate").val(Data.packageCategory);
        $("#uvehi").val(Data.vehical_Category);
        $("#uuhotel").val(Data.hotel_Category);

    } else {
        swal("No data received");
    }
}

//delete
function OnDltPackage() {
    // Retrieve form data
    if ($("#cusID").val() === "") {
        return swal("OOPS!", "Please enter a   ID to delete!", "error");
    }

    let token = localStorage.getItem("PKG_TK");
    console.log(token)
    // Check if the token is valid
    if (!token) {
        swal("Token not found. Please log in.");
        return;
    }
    // Make the AJAX request to save the payment data
    $.ajax({
        url: "http://localhost:8081/api/v1/package_server/P_dlt?P_id="+ $('#cusID').val(),
        method: "DELETE",
        contentType: "application/json",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packagesATokan"))

        },

        success: function (response) {
            swal("res"+response)
            if (response.statusCode === 200 || response.statusCode === 201 )
                swal("Delete successful");
            // You can handle the response from the server here if needed
        },
        error: function (xhr, textStatus, errorThrown) {
            swal("Error: " + xhr.responseText);

        }
    });
}

function OnGetAll() {
    $.ajax({
        url: "http://localhost:8081/api/v1/package_server/P_getAll",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packagesATokan"))
        },
        success: (res) => {
            if (!res.data) {
                // Handle the case when no data is found
                swal("OOPS!", "No data found!", "error");
            } else {
                console.log("Response data:", res.data);

                const tableBody = $("#tbody");
                tableBody.empty(); // Clear the existing table rows

                res.data.forEach((pdata) => {
                    let row = "<tr>";
                    row += "<td>" + pdata.package_id + "</td>";
                    row += "<td>" + pdata.packageCategory + "</td>";
                    row += "<td>" + pdata.vehical_Category + "</td>";
                    row += "<td>" + pdata.hotel_Category + "</td>";

                    row += "</tr>";

                    tableBody.append(row);
                });
            }
        },
        error: (xhr, textStatus, errorThrown) => {
            let errorMessage = "An unexpected error occurred.";
            if (xhr.responseJSON && xhr.responseJSON.message) {
                errorMessage = xhr.responseJSON.message;
            }
            swal("OOPS!", "Server error: " + errorMessage, "error");
        }
    });
}


function OnUpdatePackage() {

    // Define a function to handle the success of saving an image

    const ID = $("#uuid").val();
    const PackageCa = $("#uusercate").val();
    const VehicleCa = $("#uvehi").val();
    const HotelCa = $("#uuhotel").val();


    // Create an object to store the data
    const data = {
        package_id: ID,
        packageCategory: PackageCa,
        vehical_Category: VehicleCa,
        hotel_Category: HotelCa,

    };

    // Retrieve the JWT token from localStorage
    let token = localStorage.getItem("PKG_TK");

    // Check if the token is valid
    if (!token) {
        swal("Token not found.");
        return;
    }

    // Make the AJAX request to save the data
    setTimeout(() => {
        $.ajax({
            url: "http://localhost:8081/api/v1/package_server/P_put",
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packagesATokan"))
            },
            success: function (response) {
                swal("res" + response);
                if (response.statusCode === 200 || response.statusCode === 201) {
                    swal("Save successful");
                }
                // You can handle the response from the server here if needed
            },
            error: function (xhr, textStatus, errorThrown) {
                swal("Error: " + xhr.responseText);
            }
        });
    }, 2000);

}


function OnSavePackage() {

    // Define a function to handle the success of saving an image

            const ID = $("#id").val();
            const PackageCa = $("#category").val();
            const VehicleCa = $("#VehicleCT").val();
            const HotelCa = $("#hotelCT").val();


            // Create an object to store the data
            const data = {
                package_id: ID,
                packageCategory: PackageCa,
                vehical_Category: VehicleCa,
                hotel_Category: HotelCa,

            };

            // Retrieve the JWT token from localStorage
            let token = localStorage.getItem("PKG_TK");

            // Check if the token is valid
            if (!token) {
                swal("Token not found.");
                return;
            }

            // Make the AJAX request to save the data
            setTimeout(() => {
                $.ajax({
                    url: "http://localhost:8081/api/v1/package_server/P_save",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(data),
                    headers: {
                        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packagesATokan"))
                    },
                    success: function (response) {
                        swal("res" + response);
                        if (response.statusCode === 200 || response.statusCode === 201) {
                            swal("Save successful");
                        }
                        // You can handle the response from the server here if needed
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        swal("Error: " + xhr.responseText);
                    }
                });
            }, 2000);

    }