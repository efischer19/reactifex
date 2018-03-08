# reactifex

[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](reactifex)
[![license](https://img.shields.io/npm/l/reactifex.svg)](reactifex)
[![npm_version](https://img.shields.io/npm/v/reactifex.svg)](reactifex)
[![Build Status](https://travis-ci.org/efischer19/reactifex.svg?branch=master)](https://travis-ci.org/efischer19/reactifex)

Helper utility designed to make it easy to upload react-intl extracted messages to transifex, with support for ICU plurals and translator comments.

usage: `$(npm bin)/reactifex <input_folder> <output_file>`
  - `input_folder` corresponds to the `messagesDir` option used by `babel-plugin-react-intl`
    - note that reactifex assumes folder structure based on this default
  - `output_file` will be suitable for upload to transifex
