var config = {
    lines: [
        "Dear ᡣ𐭩💗",
         "............................................. 💗" , "..................................💗","..............................💗",        "ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.ᡣ𐭩.",
        ".................... at few details 2025...................................❤️",
        "Everything is possible if you want💗",
        ".....................................💗",
        ".......................................💗",
        ".........................................💗",
       "............................................💗", "。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。",
    ],
    date: "2018-06-05",
    names: ["🎈", "Akij"],
    colors: [
        "red", //color for "Dear M"
        "red",      //color for "A season of flowers..."
        "blue",     //color for "The passing years..."
        "green",    //color for "Your smile..."
        "purple",   //color for "Lovesickness..."
        "orange",   //color for "Dear Mumu..."
        "gray"      //color for "。。。"
    ]
};

// Function to create and display lines with colors
function displayLines() {
    var linesContainer = document.getElementById("linesContainer");

    for (var i = 0; i < config.lines.length; i++) {
        var line = document.createElement("div");
        line.textContent = config.lines[i];
        line.style.color = config.colors[i];
        linesContainer.appendChild(line);
    }
}

// Call the function to display lines when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayLines();
});

// Function to change text color based on user input
function changeColor(color) {
    var lineElements = document.getElementById("linesContainer").getElementsByTagName("div");
    for (var i = 0; i < lineElements.length; i++) {
        lineElements[i].style.color = color;
    }
}
