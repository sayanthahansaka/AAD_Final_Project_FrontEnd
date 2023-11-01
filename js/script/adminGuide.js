$(document).ready(()=>{
    localStorage.setItem("guideAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6Imd1aWRlQWRtaW4iLCJzdWIiOiJsYWxheSIsImlhdCI6MTY5ODQ2MTI2NSwiZXhwIjo0ODUyMDYxMjY0fQ.-8-qRWsQUb3mYHijjmi4mq2dLTGjM6GWYdykQkDVuNg"))
   
    fetchGuideData();
});

$(document).ready(() => {
    $(document).on("click", "#btnAdd", () => {  
            let guide = {
                guideID: parseInt($('#guideID').val()), 
                guideName: $('#guideName').val(),
                guideAddress: $('#guideAddress').val(),
                guideAge: $('#guideAge').val(),
                guideGender: $('#guideGender').val(),
                guideContact: $('#guideContact').val(),
                guideNICImageLocation: $('#guideNICImageLocation').val(),
                guideIDImageLocation: $('#guideIDImageLocation').val(),
                guideExperience: $('#guideExperience').val(),
                manDayValue: parseFloat($('#manDayValue').val()),
                remarks: $('#remarks').val()
            }

            $.ajax({
                url: "http://localhost:8087/api/guides/save",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("guideAdminToken"))
                },
                data: JSON.stringify(guide),
                success: (response) => {
                    // if (response.statusCode === 200 || response.statusCode === 201) {
                        // addTableField();
                        alert("Done!", response.message, "success")
                        clearFields();
                        fetchGuideData(); 
                    // } else {
                    //     return swal("OOPS!", response.message, "error")
                    // }
                }, error: (error) => {
                    alert("OOPS!", "An error occurred while communicating with the server ! ", "error");
                },
            })
        })
    })
    
    // -------------------------------------------GET ALL-------------------------------------------------------------
    $(document).ready(function() {
        const fetchGuideData = () => {
            $.ajax({
                url: "http://localhost:8087/api/guides",
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("guideAdminToken"))
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
                    alert("OOPS!", "An error occurred while fetching the Guide data!", "error");
                },
            });
        }
    
        const populateTable = (data) => {
            const tbody = $(".table tbody");
            tbody.empty();
            data.forEach(guide => {
                let $row = $("<tr></tr>");
                $row.append($("<td></td>").text(guide.guideID));
                $row.append($("<td></td>").text(guide.guideName));
                $row.append($("<td></td>").text(guide.guideAddress));
                $row.append($("<td></td>").text(guide.guideAge));
                $row.append($("<td></td>").text(guide.guideGender));
                $row.append($("<td></td>").text(guide.guideContact));
                $row.append($("<td></td>").text(guide.guideExperience));
                $row.append($("<td></td>").text('$' + guide.manDayValue));
                $row.append($("<td></td>").text(guide.remarks));
                tbody.append($row);
            });
        }
    
        fetchGuideData();
    });

    // --------------------------------------------------------------------------Get By ID-----------------------------------------------------

    
$(document).ready(function() {
    $('#btnSearch').on('click', function() {
        const guideID = $('#guideID').val().trim();

        if (guideID) {
            fetchGuideByID(guideID);
        } else {
            alert("Please enter a Guide ID to search.");
        }
    });
});

function fetchGuideByID(id) {
    $.ajax({
        url: `http://localhost:8087/api/guides/id/${id}`,
        method: "GET",
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("guideAdminToken"))}`
        },
        success: function(response) {
            populateFieldsWithResponse(response);
        },
        error: function() {
            alert("OOPS! An error occurred while fetching the Guide data by ID!");
        }
    });
}

function populateFieldsWithResponse(response) {
    let guideData = response.data;
    if (guideData) {
        $('#guideID').val(guideData.guideID);
        $('#guideName').val(guideData.guideName);
        $('#guideAddress').val(guideData.guideAddress);
        $('#guideAge').val(guideData.guideAge);
        $('#guideGender').val(guideData.guideGender);
        $('#guideContact').val(guideData.guideContact);
        
        // Assuming these are file input fields, don't set their values
        // If you need to indicate to the user the current file path, 
        // consider using another method, like displaying the path in a 
        // separate text or label element.
        //$('#guideNICImageLocation').val(guideData.guideNICImageLocation);
        //$('#guideIDImageLocation').val(guideData.guideIDImageLocation);
        
        $('#guideExperience').val(guideData.guideExperience);
        $('#hotelContact2').val(guideData.hotelContact2);
        $('#manDayValue').val(guideData.manDayValue);
        $('#remarks').val(guideData.remarks);
    } else {
        alert("No data received from the server.");
    }  
}

// ------------------------------------Update Guide-------------------------------------------------
$(document).ready(function() {
    $('#btnUpdate').on('click', function() {
        const  guideDTO = {
            guideID: parseInt($('#guideID').val()), 
            guideName: $('#guideName').val(),
            guideAddress: $('#guideAddress').val(),
            guideAge: $('#guideAge').val(),
            guideGender: $('#guideGender').val(),
            guideContact: $('#guideContact').val(),
            guideNICImageLocation: $('#guideNICImageLocation').val(),
            guideIDImageLocation: $('#guideIDImageLocation').val(),
            guideExperience: $('#guideExperience').val(),
            manDayValue: parseFloat($('#manDayValue').val()),
            remarks: $('#remarks').val()
        }
        $.ajax({
            url: `http://localhost:8087/api/guides/update`,
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("guideAdminToken"))
            },
            contentType: "application/json",
            data: JSON.stringify(guideDTO),
            success: function(response) {
                // Clear the hotel form.

                // Display a success message.
                alert("Guide updated successfully!");

            },
            error: function(error) {
                // Display an error message.
                alert("OOPS! An error occurred while updating the Guide: " + error.message);
            }
        });
    });
});

// --------------------------------------------------------Delete By Id ---------------------------------

$(document).ready(function () {
    $('#btnDelete').on('click', function () {
        const guideID = $('#guideID').val().trim();

        if (guideID) {
            deleteGuideByID(guideID);
        } else {
            alert("Please enter a Guide ID to delete.");
        }
    });
});

function deleteGuideByID(guideID) {
    $.ajax({
        url: `http://localhost:8087/api/guides/id/${guideID}`,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("guideAdminToken"))
        },
        success: function (response) {
            alert("Guide deleted successfully!");
           
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
            alert("OOPS! An unknown error occurred while deleting the Guide!");
        }
    });
}

