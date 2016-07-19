class CharacterCount {
    constructor(options) {
        this.options = options
        this.input = document.querySelector(options.input.el) || null 
        this.output = document.querySelector(options.output.el) || null
        
        if (typeof(this.input) != 'undefined' && this.input != null && typeof(this.output) != 'undefined' && this.output != null) {
            
            this.count()
            this.input.addEventListener('input', () => this.count())
        }
    }

    count () {
        this.options.output.countdown === true ? 
            this.output.value = this.options.output.start - this.input.value.length : 
            this.output.value = this.input.value.length
    }
}

window.CharacterCount = CharacterCount