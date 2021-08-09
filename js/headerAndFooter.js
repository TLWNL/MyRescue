const header = document.createElement('header');
header.innerHTML =
    <h1>
    </h1>


const footer = document.createElement('footer');
footer.innerHTML = 
    <h1>

    </h1>

function appendHeaderAndFooter() {
    appendHeader();
    appendFooter();
}

function appendHeader() {
    document.body.appendChild(header.content);
}

function appendFooter() {
    document.body.appendChild(footer.content);
}