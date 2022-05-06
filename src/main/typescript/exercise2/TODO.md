# Exercise 2: Hide the secret

Secrets are a thing you don't wanna pass around too much. Let's hide them from the `Message` class.

## Goals

* Refactor `Message#sign(string, (string, string) => string)` to receive a `SecretEncodeFn` that doesn’t require a secret for signing
  * Resulting signature could look like this `Message#sign((string) => string)`
* Keep all the other function signatures the same

## Stretch goals

* Replace the MessageSigner class with a function `signMessage`
* Add unit tests for the new function `signMessage`
