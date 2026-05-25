
const inputs = document.querySelectorAll('.options input');

function handleChange() {
    const unit = this.dataset.unit ?? '';
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${unit}`)
}

inputs.forEach(input => {
    input.addEventListener('input', handleChange);
})

/*
inputs.forEach(input => {
    input.addEventListener('change', hadleChange);
});

inputs.forEach(input => {
    input.addEventListener('mousemove', hadleChange);
})
    */