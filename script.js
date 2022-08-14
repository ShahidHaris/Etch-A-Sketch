const body = document.body;
// Create the elements
const section = document.createElement('div');
const gridContainer = document.createElement('div');
const btnContainer = document.createElement('div');
const resizeClear = document.createElement('div');
const resizeBtn = document.createElement('button');
const clearBtn = document.createElement('button');
const grayBtn = document.createElement('button');
const rgbBtn = document.createElement('button');
const blackBtn = document.createElement('button');

// Set className
section.className = 'section';
clearBtn.className = 'button';
resizeClear.className = 'resizeClear';
gridContainer.className = "main-div";
btnContainer.className = 'btnContainer';

window.onload = () => {
    colorPicker('black');
};

function resize() {
    resizeBtn.textContent = 'box size';
    resizeBtn.addEventListener("click", () => {
        let count = prompt("Enter the number of squares", "0");
        if (count == null || count < 1 || count > 99 || isNaN(count)) {
            createDiv(defaultSquares);
            colorPicker('black');
            alert(`Your entry should be a number between 1 and 100`)
        } else {
            gridContainer.innerHTML = '';
            createDiv(count);
            colorPicker('black');
            makePengray();
            makePenRgb();
            makePenBlack();
        }
    });
    resizeClear.appendChild(resizeBtn).classList.add('button');
};
resize(); 

function createDiv(squares) {
    for (let x = 0; x < squares * squares; x++) {
        let div = document.createElement('div');
        gridContainer.setAttribute(
            `style`,
            `grid-template-columns: repeat(${squares}, 1fr);
            grid-template-rows: repeat(${squares}, 1fr);`
        );

        div.className = "grid-div";
        gridContainer.append(div);
    }
}
let defaultSquares = 16;
createDiv(defaultSquares);

clearBtn.addEventListener('click', clear);

clearBtn.textContent = 'clear';
function clear() {
    window.location.reload();
}

function colorPicker(color) {
    const boxs = gridContainer.querySelectorAll('.grid-div');
    boxs.forEach((box) =>
        box.addEventListener('mouseenter', () => {
            box.style.background = `${color}`;
        })
    );
}

function makePengray() {
    const boxs = gridContainer.querySelectorAll('.grid-div');
    grayBtn.textContent = 'GRAY';
    grayBtn.addEventListener('click', () => {
        boxs.forEach((box) =>
            box.addEventListener('mouseenter', () => {
                let RNum = Math.floor(Math.random() * 256);
                let GrayScale = `rgb(${RNum},${RNum},${RNum})`;
                box.style.background = GrayScale;
            })
        );
    });
    btnContainer.appendChild(grayBtn).classList.add('btn');
}
makePengray();

function makePenRgb() {
    const boxs = gridContainer.querySelectorAll('.grid-div');
    rgbBtn.textContent = 'RGB';
    rgbBtn.addEventListener('click', () => {
        boxs.forEach((box) =>
            box.addEventListener('mouseenter', () => {
                let R = Math.floor(Math.random() * 256);
                let G = Math.floor(Math.random() * 256);
                let B = Math.floor(Math.random() * 256);
                const RGB = `rgb(${R},${G},${B})`;
                box.style.background = RGB;
            })
        );
    });
    btnContainer.appendChild(rgbBtn).classList.add('btn');
}
makePenRgb();

function makePenBlack() {
    const boxs = gridContainer.querySelectorAll('.grid-div');
    blackBtn.textContent = 'BLACK';
    blackBtn.addEventListener('click', function () {
        boxs.forEach((box) =>
            box.addEventListener('mouseenter', function () {
                this.style.background = 'black';
            })
        );
    });
    btnContainer.appendChild(blackBtn).classList.add('btn');
}
makePenBlack();

// Append children
body.appendChild(section);
section.append(resizeClear, gridContainer, btnContainer);
resizeClear.appendChild(clearBtn).classList.add('button');