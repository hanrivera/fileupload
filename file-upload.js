// where to upload files
let fileUpload = document.getElementById('file-upload');
// return the list of files uploaded
let fileList = document.getElementById('file-upload-list');
// return the number of files uploaded
let fileCount = document.getElementById('file-upload-count');

fileUpload.addEventListener('change', () => {
    fileList.innerHTML = "";
    fileCount.textContent = `${fileUpload.files.length} Files Selected`;

    for(i of fileUpload.files){
        // console.log(i);
        let reader = new FileReader();
        let listItem = document.createElement('li');
        let fileName = i.name;
        let fileSize = (i.size / 1024).toFixed(1);
        listItem.innerHTML = `<p>${fileName}</p><p>${fileSize} KB</p>`;
        if(fileSize >= 1024) {
            fileSize = (fileSize / 1024).toFixed(1);
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}</p> MB`;
        }
        fileList.appendChild(listItem);
    }
});