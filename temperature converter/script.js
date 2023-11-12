function convert() {
    // Get the Celsius temperature from the input field
    var celsius = document.getElementById("celsius").value;

    // Check if the input is a number
    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius temperature.");
        return;
    }

    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    document.getElementById("result").innerText = "Result: " + fahrenheit.toFixed(2) + " °F";
}