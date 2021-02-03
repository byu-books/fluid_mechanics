# Fluid Mechanics for Engineers

Introduction to fluid mechamics for engineers

## Usage

### Building the book

If you'd like to develop on and build the book, you should:

- Clone this repository and run
- Run `pip install -r requirements.txt` (it is recommended you do this within a virtual environment)
- (Recommended) Remove the existing `fluid_mechanics/_build/` directory
- Run `jupyter-book build fluid_mechanics/`

A fully-rendered HTML version of the book will be built in `odtresearch/_build/html/index.html` which you can view in a browser.

### Hosting the book

The html version of the book is hosted on the `gh-pages` branch of this repo. To publish the built version of the book online, which is available [at this link](https://byu-books.github.io/fluid_mechanics/title_page.html), run
- `ghp-import -n -p -f fluid_mechanics/_build/html`

This will automatically push your build to the `gh-pages` branch. More information on this hosting process can be found [here](https://jupyterbook.org/publish/gh-pages.html#manually-host-your-book-with-github-pages).

### Build script
- To simplify the building and publishing of the book, there is a simple build script at `fluid_mechanics/buildit.sh`.
    - To just build the document locally, run `./buildit.sh`.
        - This will build the document in place and you can view it locally by pointing your browser to `odtresearch/_build/html/index.html`
    - To build the document and then publish online, run `./buildit.sh -w`.

## Contributors

We welcome and recognize all contributions. You can see a list of current contributors in the [contributors tab](https://github.com/byu-books/fluid_mechanics/graphs/contributors).
