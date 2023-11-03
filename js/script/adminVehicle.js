$(document).ready(()=>{
    localStorage.setItem("vehicleAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InZlaGljbGVBZG1pbiIsInN1YiI6InZlaGljbGUiLCJpYXQiOjE2OTkwMTI1MjUsImV4cCI6NDg1MjYxMjUyNX0.XkaLYY6Hr6DYitAc-5wzipdBprjp2YUpwFFMufFSU2I"))
//    "userRole": "vehicleAdmin",
//     "userId": "123445",
//     "name": "John Dweoe",
//     "userName": "vehicle",
//     "userPassword": "vehicle123",
//     "userNIC": "1234567890",
//     "userNICImageLocation": "/path/to/image.jpg",
//     "userAge": 30,
//     "gender": "Male",
//     "userEmail": "johndoe@example.com",
//     "userPhone": "1234567890",
//     "userAddress": "123 Main St, City",
//     "remarks": "Some remarks",
//     "userImageLocation": "/path/to/user_image.jpg",
//     "isAuthenticated": true
    fetchVehicleData();    
});

$(document).ready(() => {
    $(document).on("click", "#btnAdd", () => {
        const vehicle = {
            vehicleID: parseInt($('#vehicleID').val()),
            packageID: parseInt($('#packageID').val()),
            vehicleBrand: $('#vehicleBrand').val(),
            vehicleCategory: $('#vehicleCategory').val(),
            fuelType: $('#fuelType').val(),
            isHybrid: $('#isHybrid').prop('checked'),
            fuelUsage: $('#fuelUsage').val(),
            seatCapacity: parseInt($('#seatCapacity').val()),
            vehicleType: $('#vehicleType').val(),
            transmissionType: $('#transmissionType').val(),
            driversName: $('#driversName').val(),
            vehicleImage: $('#vehicleImage').val(),
            driversContactNumber: $('#driversContactNumber').val(),
            driverLicenseImage: $('#driverLicenseImage').val(),
            remarks: $('#remarks').val()
        };

            $.ajax({
                url: "http://localhost:8082/api/v1/vehicle/sv",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("vehicleAdminToken"))
                },
                data: JSON.stringify(vehicle),
                success: (response) => {
                    // if (response.statusCode === 200 || response.statusCode === 201) {
                        // addTableField();
                        alert("Done!", response.message, "success")
                        clearFields();
                        fetchVehicleData(); 
                    // } else {
                    //     return swal("OOPS!", response.message, "error")
                    // }
                }, error: (error) => {
                    alert("OOPS!", "An error occurred while communicating with the server ! ", "error");
                },
            })
        })
    })


// -----------------------------------------------------GET All-------------------------------------------------------------------
$(document).ready(function () {
    $("#btnSearch").click(function () {
        fetchVehicleData();
    });

    // Initialize the table on page load
    fetchVehicleData();

    function fetchVehicleData() {
        $.ajax({
            url: "http://localhost:8082/api/v1/vehicle",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("vehicleAdminToken"))
            },
            success: function (response) {
                if (response && Array.isArray(response.data)) {
                    populateTable(response.data);
                } else {
                    console.error("Expected an array inside response.data but got:", response.data);
                }
            },
            error: function (error) {
                alert("An error occurred while fetching the Vehicle data: " + error.statusText);
            }
        });
    }

    function populateTable(data) {
        const tbody = $(".table tbody");
        tbody.empty();

        data.forEach(vehicle => {
            let $row = $("<tr></tr>");
            $row.append($("<td></td>").text(vehicle.vehicleID));
            $row.append($("<td></td>").text(vehicle.packageID));
            $row.append($("<td></td>").text(vehicle.vehicleBrand));
            $row.append($("<td></td>").text(vehicle.vehicleCategory));
            $row.append($("<td></td>").text(vehicle.fuelType));
            $row.append($("<td></td>").text(vehicle.fuelUsage));
            $row.append($("<td></td>").text(vehicle.vehicleType));
            $row.append($("<td></td>").text(vehicle.driversName));
            $row.append($("<td></td>").text(vehicle.isHybrid ? 'Yes' : 'No'));
            $row.append($("<td></td>").text(vehicle.driversContactNumber));
            $row.append($("<td></td>").text(vehicle.driverLicenseImage));
            tbody.append($row);
        });
    }
});


    // ------------------------------Get By ID--------------------------------------------------
    $(document).ready(function() {
        // Button click event
        $('#btnSearch').on('click', function() {
            searchVehicle();
        });
    
        // Keypress event for the vehicleID input
        $('#vehicleID').on('keypress', function(e) {
            if (e.which === 13) {  // Check if the pressed key is Enter
                searchVehicle();
            }
        });
    });
    
    function searchVehicle() {
        const vehicleID = $('#vehicleID').val().trim();
        
        if (vehicleID) {
            fetchVehicleByID(vehicleID);
        } else {
            alert("Please enter a Vehicle ID to search.");
        }
    }
    
    function fetchVehicleByID(id) {
        $.ajax({
            url: `http://localhost:8082/api/v1/vehicle/id/${id}`,
            method: "GET",
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("vehicleAdminToken"))}`
            },
            success: function(response) {
                populateFieldsWithResponse(response);
            },
            error: function() {
                alert("OOPS! An error occurred while fetching the Vehicle data by ID!");
            }
        });
    }
    
    function populateFieldsWithResponse(response) {
        let vehicleData = response.data;
        if (vehicleData) {
            $('#vehicleID').val(vehicleData.vehicleID);
            $('#packageID').val(vehicleData.packageID);
            $('#vehicleBrand').val(vehicleData.vehicleBrand);
            $('#vehicleCategory').val(vehicleData.vehicleCategory);
            $('#fuelType').val(vehicleData.fuelType)
            $('#isHybrid').prop('checked', vehicleData.isHybrid);
            $('#fuelUsage').val(vehicleData.fuelUsage);
            $('#seatCapacity').val(vehicleData.seatCapacity);
            $('#vehicleType').val(vehicleData.vehicleType);
            $('#transmissionType').val(vehicleData.transmissionType);
            $('#driversName').val(vehicleData.driversName);
            $('#vehicleImage').val(vehicleData.vehicleImage);
            $('#driversContactNumber').val(vehicleData.driversContactNumber);
            $('#driverLicenseImage').val(vehicleData.driverLicenseImage);
            $('#remarks').val(vehicleData.remarks);
        } else {
            alert("No data received from the server.");
        } 
    }
    

    // -------------------------------------------------------Update------------------------------------------------
$(document).ready(function() {
    $('#btnUpdate').on('click', function() {
        const vehicleData = {
            vehicleID: parseInt($('#vehicleID').val()),
                packageID: parseInt($('#packageID').val()),
                vehicleBrand: $('#vehicleBrand').val(),
                vehicleCategory: $('#vehicleCategory').val(),
                fuelType: $('#fuelType').val(),
                isHybrid: $('#isHybrid').prop('checked'),
                fuelUsage: $('#fuelUsage').val(),
                seatCapacity: $('#seatCapacity').val(),
                vehicleType: $('#vehicleType').val(),
                transmissionType: $('#transmissionType').val(),
                driversName: $('#driversName').val(),
                vehicleImage:$('#vehicleImage').val(),
                driversContactNumber:$('#driversContactNumber').val(),
                driverLicenseImage: $('#cancellationCriteria').val(),
                remarks: $('#remarks').val()
            
        };

     
        $.ajax({
            url: `http://localhost:8082/api/v1/vehicle/update`,
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("vehicleAdminToken"))
            },
            contentType: "application/json",
            data: JSON.stringify(vehicleData),
            success: function(response) {
            
                alert("Vehicle updated successfully!");

            },
            error: function(error) {
                
                alert("OOPS! An error occurred while updating the Vehicle: " + error.message);
            }
        });
    });
});

// ---------------------------------------------------------------Delete--------------------------------------------------

$(document).ready(function () {
    $('#btnDelete').on('click', function () {
        const vehicleID = $('#vehicleID').val().trim();

        if (vehicleID) {
            deleteHotelByID(vehicleID);
        } else {
            alert("Please enter a vehicle ID to delete.");
        }
    });
});

function deleteHotelByID(vehicleID) {
    $.ajax({
        url: `http://localhost:8082/api/v1/vehicle/id/${vehicleID}`,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("vehicleAdminToken"))
        },
        success: function (response) {
            alert("Vehicle deleted successfully!");
           
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
            alert("OOPS! An unknown error occurred while deleting the Vehicle!");
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

// .........................ato set vehicle ID........................
$.ajax({
    url: 'http://localhost:8082/api/v1/vehicle/nextVehicleID',
    method: 'GET',
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("vehicleAdminToken"))
    },
    success: function(response) {
        $('#vehicleID').val(response);
       
    },
    error: function(err) {
        console.error("Error fetching next Vehicle ID:", err);
    }
});