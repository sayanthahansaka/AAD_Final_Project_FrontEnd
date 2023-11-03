$(document).ready(()=>{
    localStorage.setItem("hotemAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6ImhvdGVsQWRtaW4iLCJzdWIiOiJob3RlbCIsImlhdCI6MTY5OTAxNTI1NSwiZXhwIjo0ODUyNjE1MjU1fQ.2oYcy7lEnW-Jf641U6FrpAZtILEkgdd9bzlTSMGEmAI"))
    // $("#VehicleId").prop("disabled", true);
    // addTableField();
    // packageIds();
    fetchHotelsData();
    localStorage.setItem("packageAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBhY2thZ2VBZG1pbiIsInN1YiI6InlvbW4iLCJpYXQiOjE2OTgwNDk5ODIsImV4cCI6NDg1MTY0OTk4Mn0.oM0GUoPgtjJdlJzU6Ji8HnVjznujyBeXdUNLNqE2A3Y"))
    
    
});
// -----------------------------------------------Ato set Hotel ID-----------------------------------------------------------

$.ajax({
    url: 'http://localhost:8081/api/v1/hotel/nextHotelID',
    method: 'GET',
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotemAdminToken"))
    },
    success: function(response) {
        $('#hotelID').val(response);
       
    },
    error: function(err) {
        console.error("Error fetching next hotel ID:", err);
    }
});


    // ==================================================add Hotel===========================================

$(document).ready(() => {
    $(document).on("click", "#btnAdd", () => {
        // if (!validator()) {
        //     return swal("Operation failed!", "Please fill all the fields!", "error")
        // }

        
            let hotel = {
                hotelID: parseInt($('#hotelID').val()),
                packageId: $('#packageId').val(),
                hotelName: $('#hotelName').val(),
                hotelCategory: $('#hotelCategory').val(),
                hotelLocation: $('#hotelLocation').val(),
                hotelLocationWithCoordinates: $('#hotelLocationWithCoordinates').val(),
                hotelImageLocation: $('#hotelImageLocation').val(),
                hotelContactEmail: $('#hotelContactEmail').val(),
                hotelContact1: $('#hotelContactNumber').val(),
                hotelContact2:$('#hotelContact2').val(),
                fullBoardWithACLuxuryRoomDouble: $('#fullBoardWithACLuxuryRoomDouble').val(),
                isPetsAllowed: $('#isPetsAllowed').prop('checked'),
                hotelFee: parseFloat($('#hotelFee').val()),
                cancellationCriteria: $('#cancellationCriteria').val(),
                remarks: $('#remarks').val()
            }

            $.ajax({
                url: "http://localhost:8081/api/v1/hotel/save",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotemAdminToken"))
                },
                data: JSON.stringify(hotel),
                success: (response) => {
                    // if (response.statusCode === 200 || response.statusCode === 201) {
                        // addTableField();
                        alert("Done!", response.message, "success")
                        clearFields();
                        fetchHotelsData(); 
                    // } else {
                    //     return swal("OOPS!", response.message, "error")
                    // }
                }, error: (error) => {
                    alert("OOPS!", "An error occurred while communicating with the server ! ", "error");
                },
            })
        })
    })
    
// -----------------------------------------------------GET -------------------------------------------------------------------

$(document).ready(function() {
    const fetchHotelsData = () => {
        $.ajax({
            url: "http://localhost:8081/api/v1/hotel/hotelsget",
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotemAdminToken"))
            },
            success: (response) => {
                console.log(response);

                if (response && Array.isArray(response.data)) {
                    populateTable(response.data);
                } else {
                    console.error("Expected an array inside response.data but got:", response.data);
                }
            },
            error: (error) => {
                alert("OOPS!", "An error occurred while fetching the hotel data!", "error");
            },
        });
    }

    const populateTable = (data) => {
        const tbody = $(".table tbody");
        tbody.empty();

        data.forEach(hotel => {
            let $row = $("<tr></tr>");
            $row.append($("<td></td>").text(hotel.hotelID));
            $row.append($("<td></td>").text(hotel.packageID));
            $row.append($("<td></td>").text(hotel.hotelName));
            $row.append($("<td></td>").text(hotel.hotelCategory));
            $row.append($("<td></td>").text(hotel.hotelLocation));
            $row.append($("<td></td>").text(hotel.hotelContactEmail));
            $row.append($("<td></td>").text(hotel.hotelContact1));
            $row.append($("<td></td>").text(hotel.isPetsAllowed ? 'Yes' : 'No'));
            $row.append($("<td></td>").text('$' + hotel.hotelFee));
            $row.append($("<td></td>").text(hotel.cancellationCriteria));
            $row.append($("<td></td>").text(hotel.remarks));
            tbody.append($row);
        });
    }

    fetchHotelsData();
});

// --------------------------------------------Uplode Location Coordinates------------------------------------------
function getCoordinates(){
    axios.get("https://geocode.maps.co/search?q="+$("#hotelLocationWithCoordinates").val())
    .then((res)=>{
        console.log(res.data[0].lat)
        $("#hotelLocationWithCoordinates").val("Latitude : "+res.data[0].lat+',Longitude : '+res.data[0].lon)



    })
        .catch((err)=>{
            console.log(err)
            swal("OOPS! ","An error occurred while fetching coordinates!","error");
        })
}

$(document).on("mouseleave","#hotelName",()=>{
    getCoordinates();

    })

// ------------------------------------------------Uplode Image----------------------------------------------------------
function saveImage() {
    var formData = new FormData();
    var file = $('#hotelImageLocation')[0].files[0];
    formData.append('imageFile', file);

    $.ajax({
        url: 'http://localhost:8090/upload',
        type: 'POST',
        data: formData,
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotemAdminToken"))
        },
        cache: false,
        contentType:false,
        processData: false,
        success: function (data) {

            hcl = data;
            console.log("IMG : " + hcl)

        }, error: (xhr, textStatus, errorThrown) => {
            swal("OOPS!", "Server threw an exception : " + xhr.responseJSON.message, "error");
        }
    });

}

// ---------------------------------------------Get By ID ,name-------------------------------------

// $(document).ready(function() {
//     $('#btnSearch').on('click', function() {
//         const hotelID = $('#hotelID').val().trim();

//         if (hotelID) {
//             fetchHotelByName(hotelID);
//         } else {
//             alert("Please enter a Hotel Name to search.");
//         }
//     });
// });

// function fetchHotelByName(name) {
//     $.ajax({
//         url: `http://localhost:8081/api/v1/hotel/getByName?hotelName=${encodeURIComponent(name)}`,
//         method: "GET",
//         headers: {
//             "Authorization": `Bearer ${JSON.parse(localStorage.getItem("hotemAdminToken"))}`
//         },
//         success: function(response) {
//             populateFieldsWithResponse(response);
//         },
//         error: function() {
//             alert("OOPS! An error occurred while fetching the hotel data by name!");
//         }
//     });
// }

// function populateFieldsWithResponse(response) {
//     let hotelData = response.data;
//     if (hotelData) {
//         $('#hotelID').val(hotelData.hotelID);
//         $('#hotelCategory').val(hotelData.hotelCategory);
//         $('#hotelLocationWithCoordinates').val(hotelData.hotelLocationWithCoordinates);
//         $('#hotelContactEmail').val(hotelData.hotelContactEmail);
//         $('#hotelContactNumber').val(hotelData.hotelContactNumber); 
//         $('#isPetsAllowed').prop('checked', hotelData.isPetsAllowed);
//         $('#hotelFee').val(hotelData.hotelFee);
//         $('#cancellationCriteria').val(hotelData.cancellationCriteria);
//         $('#remarks').val(hotelData.remarks);
//     } else {
//         alert("No data received from the server.");
//     }
// }


// --------------------------------------get by ID-----------------------------------


$(document).ready(function() {
    // Button click event
    $('#btnSearch').on('click', function() {
        searchHotel();
    });

    // Keypress event for the hotelID input
    $('#hotelID').on('keypress', function(e) {
        if (e.which === 13) {  // Check if the pressed key is Enter
            searchHotel();
        }
    });
});

function searchHotel() {
    const hotelID = $('#hotelID').val().trim();

    if (hotelID) {
        fetchHotelByID(hotelID);
    } else {
        alert("Please enter a Hotel ID to search.");
    }
}

function fetchHotelByID(id) {
    $.ajax({
        url: `http://localhost:8081/api/v1/hotel/id/${id}`,
        method: "GET",
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("hotemAdminToken"))}`
        },
        success: function(response) {
            populateFieldsWithResponse(response);
        },
        error: function() {
            alert("OOPS! An error occurred while fetching the hotel data by ID!");
        }
    });
}

function populateFieldsWithResponse(response) {
    let hotelData = response.data;
    if (hotelData) {
        $('#hotelID').val(hotelData.hotelID);
        $('#packageID').val(hotelData.packageID);
        $('#hotelName').val(hotelData.hotelName);
        $('#hotelCategory').val(hotelData.hotelCategory);
        $('#hotelLocation').val(hotelData.hotelLocation)
        $('#hotelLocationWithCoordinates').val(hotelData.hotelLocationWithCoordinates);
        $('#hotelImageLocation').val(hotelData.hotelImageLocation);
        $('#hotelContactEmail').val(hotelData.hotelContactEmail);
        $('#hotelContactNumber').val(hotelData.hotelContact1);
        $('#hotelContact2').val(hotelData.hotelContact2);
        $('#fullBoardWithACLuxuryRoomDouble').val(hotelData.fullBoardWithACLuxuryRoomDouble);
        $('#isPetsAllowed').prop('checked', hotelData.isPetsAllowed);
        $('#hotelFee').val(hotelData.hotelFee);
        $('#cancellationCriteria').val(hotelData.cancellationCriteria);
        $('#remarks').val(hotelData.remarks);
    } else {
        alert("No data received from the server.");
    }
}
// .........................

// $(document).ready(function() {
//     $('#btnSearch').on('click', function() {
//         const hotelID = $('#hotelID').val().trim();

//         if (hotelID) {
//             fetchHotelByID(hotelID);
//         } else {
//             alert("Please enter a Hotel ID to search.");
//         }
//     });
// });

// function fetchHotelByID(id) {
//     $.ajax({
//         url: `http://localhost:8081/api/v1/hotel/id/${id}`,
//         method: "GET",
//         headers: {
//             "Authorization": `Bearer ${JSON.parse(localStorage.getItem("hotemAdminToken"))}`
//         },
//         success: function(response) {
//             populateFieldsWithResponse(response);
//         },
//         error: function() {
//             alert("OOPS! An error occurred while fetching the hotel data by ID!");
//         }
//     });
// }

// function populateFieldsWithResponse(response) {
//     let hotelData = response.data;
//     if (hotelData) {
//         $('#hotelID').val(hotelData.hotelID);
//         $('#packageID').val(hotelData.packageID);
//         $('#hotelName').val(hotelData.hotelName);
//         $('#hotelCategory').val(hotelData.hotelCategory);
//         $('#hotelLocation').val(hotelData.hotelLocation)
//         $('#hotelLocationWithCoordinates').val(hotelData.hotelLocationWithCoordinates);
//         $('#hotelImageLocation').val(hotelData.hotelImageLocation);
//         $('#hotelContactEmail').val(hotelData.hotelContactEmail);
//         $('#hotelContactNumber').val(hotelData.hotelContact1);
//         $('#hotelContact2').val(hotelData.hotelContact2);
//         $('#fullBoardWithACLuxuryRoomDouble').val(hotelData.fullBoardWithACLuxuryRoomDouble);
//         $('#isPetsAllowed').prop('checked', hotelData.isPetsAllowed);
//         $('#hotelFee').val(hotelData.hotelFee);
//         $('#cancellationCriteria').val(hotelData.cancellationCriteria);
//         $('#remarks').val(hotelData.remarks);
//     } else {
//         alert("No data received from the server.");
//     }  
// }
// -------------------------------------------------------Update------------------------------------------------

$(document).ready(function() {
    $('#btnUpdate').on('click', function() {
        // Get the hotel data from the form.
        const hotelDTO = {
            hotelID: parseInt($('#hotelID').val()),
            packageId: $('#packageId').val(),
            hotelName: $('#hotelName').val(),
            hotelCategory: $('#hotelCategory').val(),
            hotelLocation: $('#hotelLocation').val(),
            hotelLocationWithCoordinates: $('#hotelLocationWithCoordinates').val(),
            hotelImageLocation: $('#hotelImageLocation').val(),
            hotelContactEmail: $('#hotelContactEmail').val(),
            hotelContact1: $('#hotelContactNumber').val(),
            hotelContact2:$('#hotelContact2').val(),
            fullBoardWithACLuxuryRoomDouble: $('#fullBoardWithACLuxuryRoomDouble').val(),
            isPetsAllowed: $('#isPetsAllowed').prop('checked'),
            hotelFee: parseFloat($('#hotelFee').val()),
            cancellationCriteria: $('#cancellationCriteria').val(),
            remarks: $('#remarks').val()
            
        };

     
        $.ajax({
            url: `http://localhost:8081/api/v1/hotel/update`,
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotemAdminToken"))
            },
            contentType: "application/json",
            data: JSON.stringify(hotelDTO),
            success: function(response) {
                // Clear the hotel form.

                // Display a success message.
                alert("Hotel updated successfully!");

            },
            error: function(error) {
                // Display an error message.
                alert("OOPS! An error occurred while updating the hotel: " + error.message);
            }
        });
    });
});

// --------------------------------------------------------Delete By Id ---------------------------------

$(document).ready(function () {
    $('#btnDelete').on('click', function () {
        const hotelID = $('#hotelID').val().trim();

        if (hotelID) {
            deleteHotelByID(hotelID);
        } else {
            alert("Please enter a Hotel ID to delete.");
        }
    });
});

function deleteHotelByID(hotelID) {
    $.ajax({
        url: `http://localhost:8081/api/v1/hotel/id/${hotelID}`,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotemAdminToken"))
        },
        success: function (response) {
            alert("Hotel deleted successfully!");
           
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
            alert("OOPS! An unknown error occurred while deleting the hotel!");
        }
    });
}

// ------------------------------------------GEt AND Set Package IDS ComboBOX-----------------------------------------------
$(document).ready(function() {

    const packageAdminToken = JSON.parse(localStorage.getItem("packageAdminToken"));

    $.ajax({
        url: 'http://localhost:8083/api/v1/package/allID', 
        method: 'GET',
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ' + packageAdminToken
        },
        success: function(data) {
            const packageIDSelect = $('#packageID');
            
            data.forEach(function(id) {
                packageIDSelect.append($('<option>', { 
                    value: id,
                    text : id 
                }));
            });
        },
        error: function(err) {
            console.error("Error fetching package IDs:", err);
        }
    });
});
// ------------------------------------------GEt AND Set Package IDS ComboBOX-----------------------------------------------
$(document).ready(function() {

    const packageAdminToken = JSON.parse(localStorage.getItem("packageAdminToken"));

    $.ajax({
        url: 'http://localhost:8083/api/v1/package/allID', 
        method: 'GET',
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ' + packageAdminToken
        },
        success: function(data) {
            const packageIDSelect = $('#packageID');
            
            data.forEach(function(id) {
                packageIDSelect.append($('<option>', { 
                    value: id,
                    text : id 
                }));
            });
        },
        error: function(err) {
            console.error("Error fetching package IDs:", err);
        }
    });
});
























// gh repo clone sayanthahansaka/ADD-Final-FrontEnd