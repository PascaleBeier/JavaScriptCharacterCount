class CharacterCount {
    constructor(options) {
        this.input = options.input || null
        this.input != null ? this.inputEl = document.querySelector(options.input.el) : null
        this.output = options.output || null
        this.output != null ? this.outputEl = document.querySelector(options.output.el) : null
        
        this.listen()
    }
    count () {
        return this.inputEl.value.length
    }
    listen () {
        this.output.countdown === true ? this.outputEl.value = this.output.start : 0

        let self = this
        this.inputEl.addEventListener('input', function () {
            if (self.output.countdown === true) {
                self.outputEl.value = self.output.start - self.count()
            } else {
                self.outputEl.value = self.count()
            }
        })
    }
}

window.CharacterCount = CharacterCount