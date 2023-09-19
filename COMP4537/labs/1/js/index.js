const writerBtn = document.getElementById("writer-button");
const readerBtn = document.getElementById("reader-button");

// Function to navigate to the writer page
function goToWriter() {
    window.location.href = 'writer.html';
}

// Function to navigate to the reader page
function goToReader() {
    window.location.href = 'reader.html';
}

writerBtn.addEventListener("click", goToWriter);
readerBtn.addEventListener("click", goToReader);