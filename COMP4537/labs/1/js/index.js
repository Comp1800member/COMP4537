const writerBtn = document.getElementById("writer-button");
const readerBtn = document.getElementById("reader-button");

const writerBtnString = '../../../COMP4537/labs/1/writer.html';
const readerBtnString = '../../../COMP4537/labs/1/reader.html';

// Function to navigate to the writer page
function goToWriter() {
    window.location.href = writerBtnString;
}

// Function to navigate to the reader page
function goToReader() {
    window.location.href = readerBtnString;
}

writerBtn.addEventListener("click", goToWriter);
readerBtn.addEventListener("click", goToReader);