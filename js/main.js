let clickSound = new Audio('sounds/click.ogg');
let clickSound2 = new Audio('sounds/click.ogg');
clickSound.volume = 0.25;
clickSound2.volume = 0.25;
const joinServerButton = document.querySelector(".server__button-visual");
document.querySelectorAll(".main__button").forEach(button => {
    button.addEventListener("click", event => {
        if (button.getAttribute("data-id")) {
            openInNewTab(button.getAttribute("data-href"));
        } else {
            changeSection("server");
        }

        clickSound.play().then(r => {
            console.log(r);
        });
    })
})

document.querySelectorAll("input[type=radio]").forEach(input => {
    input.addEventListener("change", event => {
        joinServerButton.classList.remove("server__button-visual");
    })
})

document.querySelectorAll(".server__item").forEach(item => {
    item.addEventListener("dblclick", event => {
        resetServerMenu();
        changeSection("guide");
    })
})

document.querySelector("#join").addEventListener("click", event => {
    resetServerMenu();
    changeSection("guide");
    clickSound2.play().then(r => {
        console.log(r);
    });
})
document.querySelector("#back").addEventListener("click", event => {
    backToTitle();
})

document.querySelector("#cancel").addEventListener("click", event => {
    backToTitle();
})



function backToTitle() {
    resetServerMenu();
    changeSection("main");
    clickSound2.play().then(r => {
        console.log(r);
    });
}

function resetServerMenu() {
    joinServerButton.classList.add("server__button-visual");
    document.querySelectorAll("input[type=radio]").forEach(input => {
        input.checked = false;
    })
}

function changeSection(sectionName) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("section__focused");
        if (section.classList.contains(sectionName)) {
            section.classList.add("section__focused");
        }
    })
}

function openInNewTab(url, isBlank) {
    window.open(url, '_blank').focus();
}

const audioFiles = [
    'sounds/menu1.ogg',
    'sounds/menu2.ogg',
    'sounds/menu3.ogg',
    'sounds/menu4.ogg'
];

let flag = false;
window.addEventListener('click', e => {
    if (flag) return;
    flag = true;
    const audio = new Audio(audioFiles[Math.floor(Math.random() * audioFiles.length)]);
    audio.volume = 0.25;
    audio.play().then(r => {
        console.log(r);
    });
});