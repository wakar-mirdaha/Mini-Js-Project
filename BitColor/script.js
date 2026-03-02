const colorGrid = document.getElementById('colorGrid');
const generateBtn = document.getElementById('generateBtn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const toast = document.getElementById('toast');

const generateRandomColor = () => {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
};

const createColorCard = () => {
    const color = generateRandomColor();
    const card = document.createElement('div');
    card.classList.add('color-card');
    
    card.innerHTML = `
        <div class="color-box" style="background: ${color}"></div>
        <span class="color-code">${color}</span>
    `;

    card.addEventListener('click', () => {
        navigator.clipboard.writeText(color);
        showToast();
    });

    return card;
};

const renderPalette = (count = 10) => {
    for (let i = 0; i < count; i++) {
        colorGrid.appendChild(createColorCard());
    }
};

const showToast = () => {
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 2000);
};


generateBtn.addEventListener('click', () => {
    colorGrid.innerHTML = '';
    renderPalette();
});

loadMoreBtn.addEventListener('click', () => renderPalette(5));


renderPalette();