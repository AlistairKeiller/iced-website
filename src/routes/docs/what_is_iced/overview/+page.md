# Iced

A cross-platform GUI library for Rust focused on simplicity and type-safety.
Inspired by [Elm].

## Features

- Simple, easy-to-use, batteries-included API
- Type-safe, reactive programming model
- [Cross-platform support] (Windows, macOS, Linux, and [the Web])
- Responsive layout
- Built-in widgets (including [text inputs], [scrollables], and more!)
- Custom widget support (create your own!)
- [Debug overlay with performance metrics]
- First-class support for async actions (use futures!)
- [Modular ecosystem] split into reusable parts:
  - A [renderer-agnostic native runtime] enabling integration with existing systems
  - Two [built-in renderers] leveraging [`wgpu`] and [`glow`]
    - [`iced_wgpu`] supporting Vulkan, Metal and DX12
    - [`iced_glow`] supporting OpenGL 2.1+ and OpenGL ES 2.0+
  - A [windowing shell]
  - A [web runtime] leveraging the DOM

**Iced is currently experimental software.** [Take a look at the roadmap],
[check out the issues], and [feel free to contribute!]

## Installation

Add `iced` as a dependency in your `Cargo.toml`:

```toml
iced = "0.4"
```

If your project is using a Rust edition older than 2021, then you will need to
set `resolver = "2"` in the `[package]` section as well.

**Iced moves fast and the `master` branch can contain breaking changes!** If
you want to learn about a specific release, check out [the release list].

[the release list]: https://github.com/iced-rs/iced/releases

## Overview

Inspired by [The Elm Architecture], Iced expects you to split user interfaces
into four different concepts:

- **State** — the state of your application
- **Messages** — user interactions or meaningful events that you care
  about
- **View logic** — a way to display your **state** as widgets that
  may produce **messages** on user interaction
- **Update logic** — a way to react to **messages** and update your
  **state**

We can build something to see how this works! Let's say we want a simple counter
that can be incremented and decremented using two buttons.

We start by modelling the **state** of our application:

```rust
struct Counter {
    // The counter value
    value: i32,
}
```

Next, we need to define the possible user interactions of our counter:
the button presses. These interactions are our **messages**:

```rust
#[derive(Debug, Clone, Copy)]
pub enum Message {
    IncrementPressed,
    DecrementPressed,
}
```

Now, let's show the actual counter by putting it all together in our
**view logic**:

```rust
use iced::widget::{button, column, text, Column};

impl Counter {
    pub fn view(&self) -> Column<Message> {
        // We use a column: a simple vertical layout
        column![
            // The increment button. We tell it to produce an
            // `IncrementPressed` message when pressed
            button("+").on_press(Message::IncrementPressed),

            // We show the value of the counter here
            text(self.value).size(50),

            // The decrement button. We tell it to produce a
            // `DecrementPressed` message when pressed
            button("-").on_press(Message::DecrementPressed),
        ]
    }
}
```

Finally, we need to be able to react to any produced **messages** and change our
**state** accordingly in our **update logic**:

```rust
impl Counter {
    // ...

    pub fn update(&mut self, message: Message) {
        match message {
            Message::IncrementPressed => {
                self.value += 1;
            }
            Message::DecrementPressed => {
                self.value -= 1;
            }
        }
    }
}
```

And that's everything! We just wrote a whole user interface. Iced is now able
to:

1. Take the result of our **view logic** and layout its widgets.
1. Process events from our system and produce **messages** for our
   **update logic**.
1. Draw the resulting user interface.

Browse the [documentation] and the [examples] to learn more!

## Implementation details

Iced was originally born as an attempt at bringing the simplicity of [Elm] and
[The Elm Architecture] into [Coffee], a 2D game engine I am working on.

The core of the library was implemented during May 2019 in [this pull request].
[The first alpha version] was eventually released as
[a renderer-agnostic GUI library]. The library did not provide a renderer and
implemented the current [tour example] on top of [`ggez`], a game library.

Since then, the focus has shifted towards providing a batteries-included,
end-user-oriented GUI library, while keeping [the ecosystem] modular:

## Troubleshooting

### `GraphicsAdapterNotFound`

This occurs when the selected [built-in renderer] is not able to create a context.

Often this will occur while using [`iced_wgpu`] as the renderer without
supported hardware (needs Vulkan, Metal or DX12). In this case, you could try using the
[`iced_glow`] renderer:

First, check if it works with

```console
cargo run --features iced/glow --package game_of_life
```

and then use it in your project with

```toml
iced = { version = "0.4", default-features = false, features = ["glow"] }
```

**NOTE:** Chances are you have hardware that supports at least OpenGL 2.1 or OpenGL ES 2.0,
but if you don't, right now there's no software fallback, so it means your hardware
doesn't support Iced.

## Contributing / Feedback

Contributions are greatly appreciated! If you want to contribute, please
read our [contributing guidelines] for more details.

Feedback is also welcome! You can open an issue or, if you want to talk,
come chat to our [Discord server]. Moreover, you can find me (and a bunch of
awesome folks) over the `#games-and-graphics` and `#gui-and-ui` channels in
the [Rust Community Discord]. I go by `lone_scientist#9554` there.

## Sponsors

The development of Iced is sponsored by the [Cryptowatch] team at [Kraken.com]

[documentation]: https://docs.rs/iced/
[examples]: https://github.com/iced-rs/iced/tree/master/examples
[coffee]: https://github.com/hecrj/coffee
[elm]: https://elm-lang.org/
[the elm architecture]: https://guide.elm-lang.org/architecture/
[the current issues]: https://github.com/iced-rs/iced/issues
[contributing guidelines]: https://github.com/iced-rs/iced/blob/master/CONTRIBUTING.md
[discord server]: https://discord.gg/3xZJ65GAhd
[rust community discord]: https://bit.ly/rust-community
[cryptowatch]: https://cryptowat.ch/charts
[kraken.com]: https://kraken.com/
