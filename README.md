## JavaScriptCharacterCount

> An amazingly small, dependency-less utility for counting input characters. Less than 1 Kbyte!

[![Demo](demo.gif)](#)

### Download

```bash
# Get it with npm ...
$ npm i javascript-character-count
```

### Usage

#### Count Up

```html
<form>
    <fieldset>
        <label for="count-characters">Enter Text ...</label>
        <input id="count-characters">
    </fieldset>

    <fieldset>
        <label for="count-characters-result">Element contains
        <input type="text" id="count-characters-result" readonly>
        characters.
    </fieldset>
</form>

<script>
    new CharacterCount({
        input: {
            el: '#count-characters'
        },
        output: {
            el: '#count-characters-result'
        }
    })
</script>
```

#### Count Down

```html
<form>
    <fieldset>
        <label for="countdown-characters">Enter Text ...</label>
        <input id="countdown-characters">
    </fieldset>

    <fieldset>
        <label for="countdown-characters-result">Element can contain up to
        <input type="text" id="countdown-characters-result" readonly>
        characters.
    </fieldset>
</form>

<script>
    new CharacterCount({
        input: {
            el: '#countdown-characters'
        },
        output: {
            el: '#countdown-characters-result',
            countdown: true,
            start: 500
        }
    });
</script>
```

> See 'examples' for further reference.

### Options

```javascript

new CharacterCount({
    input: {
        el: '#countdown-characters' // Element you are listening on for user input
    },
    output: {
        el: '#countdown-characters-result', // Element you output the result
        countdown: true, // When you want to use the countdown variant, defaults to null
        start: 500 // Counts down from this given number and decreases with user input
    }
})
```

### Changelog

See [CHANGELOG](CHANGELOG.md)

### Contributing - Development Setup

```bash
# Get the source
$ git clone https://github.com/PascaleBeier/JavaScriptCharacterCount
$ cd JavaScriptCharacterCount
# Install devDependencies
$ npm i
# Compile src/ to dist/
$ npm run dev
# Build for publishing
$ npm run build
```

start editing src/javascript-character-count.js and open up examples/index.html in your browser.


### License

The MIT License.
