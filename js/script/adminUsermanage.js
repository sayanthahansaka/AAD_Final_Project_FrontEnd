$(document).ready(()=>{
    localStorage.setItem("userAdminToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InVzZXJBbWluIiwic3ViIjoiam9oZG9lIiwiaWF0IjoxNjk5MDEyMjc3LCJleHAiOjQ4NTI2MTIyNzd9.hF1uvCthMpOj30odiCazPWUzh4O3_CtlhsD7gqVxo90"))
   
    fetchGuideData();
     $(document).on("click", "#submit", () => { // Use the correct button ID ("submit" in your HTML).
        let user = {
            userRole: $('#userRole').val(),
            userId: $('#userId').val(),
            name: $('#name').val(),
            userName: $('#username').val(),
            userPassword: $('#password').val(),
            userNIC: $('#nic').val(),
            userNICImageLocation: $('#nic_image').val(), // Make sure this field matches your HTML.
            userAge: parseInt($('#age').val()), // Parse the age as an integer.
            gender: $('#gender').val(),
            userEmail: $('#email').val(),
            userPhone: $('#contact').val(),
            userAddress: $('#address').val(),
            remarks: $('#remark').val(),
            userImageLocation: $('#user_image').val(), // Make sure this field matches your HTML.
            isAuthenticated: true
        }

        $.ajax({
            url: "http://localhost:8080/api/v1/auth/getAuth", // Update the URL to match your API endpoint.
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("userAdminToken"))
            },
            data: JSON.stringify(user),
            success: (response) => {
                alert("Done!", response.message, "success");
                clearFields();
                fetchUserData(); // Make sure to call the correct function for fetching user data.
            },
            error: (error) => {
                alert("OOPS!", "An error occurred while communicating with the server!", "error");
            }
        });
    });
});

$(document).ready(() => {
    localStorage.setItem("userAdminToken", JSON.stringify("YOUR_USER_TOKEN"));

    // Function to fetch user data
    const fetchUserData = () => {
        $.ajax({
            url: "http://localhost:8080/api/v1/user/getAllUsers",
            method: "GET",
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("userAdminToken"))
            },
            success: (response) => {
                if (Array.isArray(response.data)) {
                    populateTable(response.data);
                } else {
                    console.error("Expected an array inside response.data.");
                }
            },
            error: (error) => {
                alert("OOPS!", "An error occurred while fetching the user data!", "error");
            },
        });
    }

    // Function to populate the user data table
    const populateTable = (data) => {
        const tbody = $(".table tbody");
        tbody.empty();
        data.forEach(user => {
            const row = $("<tr></tr>");
            row.append($("<td></td>").text(user.userRole));
            row.append($("<td></td>").text(user.userId));
            row.append($("<td></td>").text(user.name));
            row.append($("<td></td>").text(user.userName));
            row.append($("<td></td>").text(user.userNIC));
            row.append($("<td></td>").text(user.userAge));
            row.append($("<td></td>").text(user.gender));
            row.append($("<td></td>").text(user.userEmail));
            tbody.append(row);
        });
    }

    // Function to update a user
    $("#updateButton").click(() => {
        const userDTO = {
            userRole: $("#userRole").val(),
            userId: $("#userId").val(),
            name: $("#name").val(),
            userName: $("#username").val(),
            userNIC: $("#nic").val(),
            userAge: $("#age").val(),
            gender: $("#gender").val(),
            userEmail: $("#email").val(),
            userPhone: $("#contact").val(),
            userAddress: $("#address").val(),
            userImageLocation: $("#user_image").val(),
            userPassword: $("#password").val(),
            remarks: $("#remarks").val(),
        }

        $.ajax({
            url: "http://localhost:8080/api/v1/user/updateUser",
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("userAdminToken"))
            },
            data: JSON.stringify(userDTO),
            success: (response) => {
                alert("User updated successfully!");
                clearFields();
                fetchUserData();
            },
            error: (error) => {
                alert("OOPS!", "An error occurred while updating the user!", "error");
            }
        });
    });

    // Function to delete a user
    $("#deleteButton").click(() => {
        const userId = $("#userId").val().trim();

        if (userId) {
            deleteUserById(userId);
        } else {
            alert("Please enter a User ID to delete.");
        }
    });

    const deleteUserById = (userId) => {
        $.ajax({
            url: `http://localhost:8080/api/v1/user/deleteUser?userId=${userId}`,
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("userAdminToken"))
            },
            success: (response) => {
                alert("User deleted successfully!");
                fetchUserData();
            },
            error: (xhr, textStatus, errorThrown) => {
                console.error("AJAX Error:", textStatus, errorThrown);
                alert("OOPS! An unknown error occurred while deleting the user!");
            }
        });
    }

    // Function to clear form fields
    const clearFields = () => {
        // Clear form fields here
        // Example: $("#userRole").val("");
    }

    // Initial data fetch
    fetchUserData();
});
