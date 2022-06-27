# Exercise 2: Hide the secret

Secrets are a thing you don't wanna pass around too much. Let's hide them from the `Message` class.

## Goals

* Refactor `Message#sign(string, (string, string) => string)` to receive a `SecretEncodeFn` that doesn’t require a secret for signing
  * `SecretEncodeFn` is a function with signature (text: string) => string
  * Resulting signature could look like this `Message#sign(encodeFn: SecretEncodeFn)`
* Keep all the other function signatures the same

## Stretch goals

* Replace the MessageSigner class with a function `signMessage`
* Add unit tests for the new function `signMessage`
* Encapsulate all the secret stuff in a `secret-encode` module
