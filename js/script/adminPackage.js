$(document).ready(()=>{
    localStorage.setItem("packageAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBhY2thZ2VBZG1pbiIsInN1YiI6InlvbW4iLCJpYXQiOjE2OTgwNDk5ODIsImV4cCI6NDg1MTY0OTk4Mn0.oM0GUoPgtjJdlJzU6Ji8HnVjznujyBeXdUNLNqE2A3Y"))
    fetchPackageData();
});

$(document).ready(() => {
    // Register a click event for the #btnsubmit button
    $(document).on("click", "#btnsubmit", () => {
        // Create a JavaScript object with the form data
        let packageData = {
            packageID: $('#packageID').val(),
            hotelID: $('#hotelID').val(),
            vehicleID: $('#vehicleID').val(),
            userID: $('#userID').val(),
            guideID: $('#guideID').val(),
            packageCategory: $('#packageCategory').val(),
            startDuration: $('#startDuration').val(),
            endDuration: $('#endDuration').val(),
            travelArea: $('#travelArea').val(),
            nameGuide: $('#nameGuide').val(),
            noOfDays: $('#noOfDays').val(),
            noOfAdults: $('#noOfAdults').val(),
            noOfChildren: $('#noOfChildren').val(),
            totalHeadCount: $('#totalHeadCount').is(':checked'),
            isPetsAllowed: $('#isPetsAllowed').is(':checked'),
            isGuideNeeded: $('#isGuideNeeded').is(':checked'),
            totalPackageValue: $('#totalPackageValue').val(),
            packagePaidValue: $('#packagePaidValue').val(),
            remarks: $('#remarks').val(),
        };

        // Make an AJAX request to add a package
        $.ajax({
            url: "http://localhost:8083/api/v1/package/add",
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packageAdminToken"))
            },
            data: JSON.stringify(packageData),
            success: (response) => {
                // Handle the response, you can add success messages or error messages here
                // You may consider using a JavaScript alert or a better notification library for user feedback
                alert("Done!", response.message, "success");
                clearFields(); // A function to clear form fields
                fetchPackageData(); // Fetch and update the package data
            },
            error: (error) => {
                alert("OOPS!", "An error occurred while communicating with the server!", "error");
            },
        });
    });
});

// ................add.................
// $(document).ready(() => {

//     const packageAdminToken = JSON.parse(localStorage.getItem("packageAdminToken"));

//     fetchPackageData();

//     function populateFieldsWithResponse(packageData) {
//         $('#packageDetailsID').val(packageData.packageDetailsID);
//         $('#packageID').val(packageData.packageID);
//         $('#hotelID').val(packageData.hotelID);
//         $('#vehicleID').val(packageData.vehicleID);
//         $('#userID').val(packageData.userID);
//         $('#guideID').val(packageData.guideID);
//         $('#packageCategory').val(packageData.packageCategory);
//         $('#startDuration').val(packageData.startDuration);
//         $('#endDuration').val(packageData.endDuration);
//         $('#travelArea').val(packageData.travelArea);
//         $('#nameGuide').val(packageData.nameGuide);
//         $('#noOfDays').val(packageData.noOfDays);
//         $('#noOfAdults').val(packageData.noOfAdults);
//         $('#noOfChildren').val(packageData.noOfChildren);
//         $('#totalHeadCount').prop('checked', packageData.totalHeadCount);
//         $('#isPetsAllowed').prop('checked', packageData.isPetsAllowed);
//         $('#isGuideNeeded').prop('checked', packageData.isGuideNeeded);
//         $('#totalPackageValue').val(packageData.totalPackageValue);
//         $('#packagePaidValue').val(packageData.packagePaidValue);
//         $('#remarks').val(packageData.remarks);
//     }
// n
//     $('#btnsubmit').click((event) => {
//         event.preventDefault(); 
//         const formData = {

//             packageID: $('#packageID').val(),
//             hotelID: $('#hotelID').val(),
//             vehicleID: $('#vehicleID').val(),
//             userID: $('#userID').val(),
//             guideID: $('#guideID').val(),
//             packageCategory: $('#packageCategory').val(),
//             startDuration: $('#startDuration').val(),
//             endDuration: $('#endDuration').val(),
//             travelArea: $('#travelArea').val(),
//             nameGuide: $('#nameGuide').val(),
//             noOfDays: $('#noOfDays').val(),
//             noOfAdults: $('#noOfAdults').val(),
//             noOfChildren: $('#noOfChildren').val(),
//             totalHeadCount: $('#totalHeadCount').is(':checked'),
//             isPetsAllowed: $('#isPetsAllowed').is(':checked'),
//             isGuideNeeded: $('#isGuideNeeded').is(':checked'),
//             totalPackageValue: $('#totalPackageValue').val(),
//             packagePaidValue: $('#packagePaidValue').val(),
//             remarks: $('#remarks').val(),
//         };


//         $.ajax({
//             url: 'http://localhost:8083/api/v1/package/add',
//             method: 'POST',
//             headers: {
//                 'Authorization': 'Bearer ' + packageAdminToken,
//                 'Content-Type': 'application/json',
//             },
//             data: JSON.stringify(formData),
//             success: (response) => {
//                 alert('Package added successfully!');
//                 // Clear the form
//                 $('#btnsubmit')[0].reset();
//             },
//             error: (error) => {
//                 console.error('Error adding the package:', error);
//                 alert('Error adding the package. Please try again.');
//             },
//         });
//     });
// });


// ///////////////////...........


$(document).ready(function() {
    const fetchPackageData = () => {
        $.ajax({
            url: "http://localhost:8083/api/v1/package",
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packageAdminToken"))
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
                alert("OOPS!", "An error occurred while fetching the Package data!", "error");
            },
        });
    }

    const populateTable = (data) => {
        const tbody = $(".table tbody");
        tbody.empty();
        data.forEach(package => {
            let $row = $("<tr></tr>");
            $row.append($("<td></td>").text(package.packageID));
            $row.append($("<td></td>").text(package.hotelID));
            $row.append($("<td></td>").text(package.vehicleID));
            $row.append($("<td></td>").text(package.userID));
            $row.append($("<td></td>").text(package.guideID));
            $row.append($("<td></td>").text(package.packageCategory));
            $row.append($("<td></td>").text(package.travelDuration));
            $row.append($("<td></td>").text(package.totalHeadCount));
            $row.append($("<td></td>").text(package.travelArea));
            $row.append($("<td></td>").text(package.packageValue));
            $row.append($("<td></td>").text(package.packagePaidValue));
            tbody.append($row);
        });
    }

    fetchPackageData();
});

// ---------------------------------------------Get ID------------------------------------------------------------------

$(document).ready(function() {
    $('#btnSearch').on('click', function() {
        const packageID = $('#packageDetailsID').val().trim();

        if (packageID) {
            fetchPackageByID(packageID);
        } else {
            alert("Please enter a Package ID to search.");
        }
    });
});

function fetchPackageByID(id) {
    $.ajax({
        url: `http://localhost:8083/api/v1/package/id/${id}`,
        method: "GET",
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("packageAdminToken"))}`
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
    let packageData = response.data;
    if (packageData) {
        // $('#packageDetailsID').val(packageData.packageID);
        // $('#packageID').val(packageData.packageID);
        // $('#hotelID').val(packageData.hotelID);
        // $('#vehicleID').val(packageData.vehicleID);
        // $('#userID').val(packageData.userID);
        // $('#guideID').val(packageData.guideID)
        // $('#packageCategory').val(packageData.packageCategory);
        // $('#travelDuration').val(packageData.travelDuration);
        // $('#travelArea').val(packageData.travelArea);
        // $('#noOfAdults').val(packageData.noOfAdults);
        // $('#noOfChildren').val(packageData.noOfChildren);
        // $('#totalHeadCount').val(packageData.totalHeadCount);
        // $('#isPetsAllowed').prop('checked', packageData.isPetsAllowed);
        // $('#isGuideNeeded').prop('checked', packageData.isGuideNeeded);
        // $('#packageValue').val(packageData.packageValue);
        // $('#packagePaidValue').val(packageData.packagePaidValue);
        // $('#remarks').val(packageData.remarks);
        $('#packageDetailsID').val(packageData.packageDetailsID);
        $('#packageID').val(packageData.packageID);
        $('#hotelID').val(packageData.hotelID);
        $('#vehicleID').val(packageData.vehicleID);
        $('#userID').val(packageData.userID);
        $('#guideID').val(packageData.guideID);
        $('#packageCategory').val(packageData.packageCategory);
        $('#startDuration').val(packageData.startDuration);
        $('#endDuration').val(packageData.endDuration);
        $('#travelArea').val(packageData.travelArea);
        $('#nameGuide').val(packageData.nameGuide);
        $('#noOfDays').val(packageData.noOfDays);
        $('#noOfAdults').val(packageData.noOfAdults);
        $('#noOfChildren').val(packageData.noOfChildren);
        $('#totalHeadCount').val(packageData.totalHeadCount);
        $('#isPetsAllowed').prop('checked', packageData.isPetsAllowed);
        $('#isGuideNeeded').prop('checked', packageData.isGuideNeeded);
        $('#totalPackageValue').val(packageData.totalPackageValue);
        $('#packagePaidValue').val(packageData.packagePaidValue);
        $('#remarks').val(packageData.remarks);
    

    } else {
        alert("No data received from the server.");
    }  
}

// --------------------------------------------------Delete---------------------------------------------------

$(document).ready(function () {
    $('#btnDelete').on('click', function () {
        const packageID = $('#packageDetailsID').val().trim();

        if (packageID) {
            deletePackageByID(packageID);
        } else {
            alert("Please enter a Package ID to delete.");
        }
    });
});

function deletePackageByID(packageID) {
    $.ajax({
        url: `http://localhost:8083/api/v1/packageid/${packageID}`,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("vehicleAdminToken"))
        },
        success: function (response) {
            alert("Package deleted successfully!");
           
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
            alert("OOPS! An unknown error occurred while deleting the Package!");
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

// =================hotel ID ======================
$(document).ready(function() {

    const hotemAdminToken = JSON.parse(localStorage.getItem("hotemAdminToken"));

    $.ajax({
        url: 'http://localhost:8081/api/v1/hotel/allID', 
        method: 'GET',
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ' + hotemAdminToken
        },
        success: function(data) {
            const hotelIDSelect = $('#hotelID');
            
            data.forEach(function(id) {
                hotelIDSelect.append($('<option>', { 
                    value: id,
                    text : id 
                }));
            });
        },
        error: function(err) {
            console.error("Error fetching Hotel IDs:", err);
        }
    });
});

// ================= Vehicle ID ======================
$(document).ready(function() {

    const vehicleAdminToken = JSON.parse(localStorage.getItem("vehicleAdminToken"));

    $.ajax({
        url: 'http://localhost:8082/api/v1/vehicle/allID', 
        method: 'GET',
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ' + vehicleAdminToken
        },
        success: function(data) {
            const vehicleIDSelect = $('#vehicleID');
            
            data.forEach(function(id) {
                vehicleIDSelect.append($('<option>', { 
                    value: id,
                    text : id 
                }));
            });
        },
        error: function(err) {
            console.error("Error fetching vehicle IDs:", err);
        }
    });
});

// ================= User ID ======================
$(document).ready(function() {

     const userAdminToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6ImhvdGVsQWRtaW4iLCJzdWIiOiJzYXlhIiwiaWF0IjoxNjk4NjQ5MTQ5LCJleHAiOjQ4NTIyNDkxNDl9.TnyuXkQDmmY4JSA1s-Rvp1rcCdAsIGrXdaCFuJeVISc';

    $.ajax({
        url: 'http://localhost:8080/api/v1/auth/allID', 
        method: 'GET',
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ' + userAdminToken
        },
        success: function(data) {
            const userAdminToken = $('#userID');
            
            data.forEach(function(id) {
                userAdminToken.append($('<option>', { 
                    value: id,
                    text : id 
                }));
            });
        },
        error: function(err) {
            console.error("Error fetching User IDs:", err);
        }
    });
});

// -----------------------------------------------Ato set Package ID-----------------------------------------------------------

$.ajax({
    url: 'http://localhost:8083/api/v1/package/nextPackageID',
    method: 'GET',
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("packageAdminToken"))
    },
    success: function(response) {
        $('#packageDetailsID').val(response);
       
    },
    error: function(err) {
        console.error("Error fetching next hotel ID:", err);
    }
});
