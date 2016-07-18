class CharacterCount {
    constructor(options) {
        const input = document.querySelector(options.input.el)
        const output = document.querySelector(options.output.el)
        
        options.output.countdown === true ? output.value = options.output.start - input.value.length : output.value = input.value.length

        input.addEventListener('input', function () {
            self.output.countdown === true ? output.value = options.output.start - input.value.length : output.value = input.value.length
        })
    }
}

window.CharacterCount = CharacterCount