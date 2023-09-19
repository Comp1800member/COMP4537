const writerBtn = document.getElementById("writer-button");
const readerBtn = document.getElementById("reader-button");

// Function to navigate to the writer page
function goToWriter() {
    window.location.href = '../../../COMP4537/labs/1/writer.html';
}

// Function to navigate to the reader page
function goToReader() {
    window.location.href = '../../../COMP4537/labs/1/reader.html';
}

writerBtn.addEventListener("click", goToWriter);
readerBtn.addEventListener("click", goToReader);