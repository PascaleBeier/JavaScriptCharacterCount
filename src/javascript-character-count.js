class CharacterCount {
    constructor(options) {
        const input = document.querySelector(options.input.el) || null 
        const output = document.querySelector(options.output.el) || null
        
        function count () {
            input !== null && output !== null ?
                options.output.countdown === true ? 
                    output.value = options.output.start - input.value.length : 
                    output.value = input.value.length : false
        }

        count() ? input.addEventListener('input', () => count()) : null
    }
}

window.CharacterCount = CharacterCount