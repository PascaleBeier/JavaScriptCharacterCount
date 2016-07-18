class CharacterCount {
    constructor(options) {
        const input = document.querySelector(options.input.el)
        const output = document.querySelector(options.output.el)
        
        function count () {
            options.output.countdown === true ? output.value = options.output.start - input.value.length : output.value = input.value.length
        }

        count()

        input.addEventListener('input', function () {
            count()
        })
    }
}

window.CharacterCount = CharacterCount