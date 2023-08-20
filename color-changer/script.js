let index = 0;

function colorChanger() {
    let colors = ["blue", "red", "black", "orange", "darkblue"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if (index > colors.length - 1)
        index = 0;
}