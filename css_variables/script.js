
const inputs = document.querySelectorAll('.options input');

function hadleChange() {
    const unit = this.dataset.unit ?? '';
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${unit}`)
}

inputs.forEach(input => {
    input.addEventListener('input', hadleChange);
})

/*
inputs.forEach(input => {
    input.addEventListener('change', hadleChange);
});

inputs.forEach(input => {
    input.addEventListener('mousemove', hadleChange);
})
    */