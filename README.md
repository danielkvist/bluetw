# Bluetw

![NPM](https://img.shields.io/npm/v/bluetw)
![NPM](https://img.shields.io/npm/l/bluetw)

**Tweet without leaving the terminal.**

An easy and simple CLI that allows you to tweet from your terminal and anything else.

## Install

```bash
npm install -g bluetw
```

## Requeriments & Config

1. First, you need to have a Twitter account. You can find more info [here](https://developer.twitter.com/en)
2. You will need to create a Twitter App with Read & Write permissions.
3. The first time you execute `bluetw` it will ask you your:
   - API Key (Consumer Key).
   - API Key secret (Consumer Secret).
   - Acess Token.
   - Access Token secret.

```text
 /\/|  _       _                  _                /\/|
|/\/  | |__   | |  _   _    ___  | |_  __      __ |/\/
      | '_ \  | | | | | |  / _ \ | __| \ \ /\ / /
      | |_) | | | | |_| | |  __/ | |_   \ V  V /
      |_.__/  |_|  \__,_|  \___|  \__|   \_/\_/

The CLI that allows you to tweet without leaving the terminal!

? Enter your Twitter Consumer Key:
```

> All information managed by `bluetw` **is stored locally on your computer** using the [configstore](https://github.com/yeoman/configstore#readme) package.

## Motivation

I've always wanted to post more on Twitter. But at the same time I also wanted to stay away from its feed to maintain some focus in whatever I'm working on. What is a shame, because it is when I am coding, designing or studying that more ideas come to my mind.

So I decided to create this very small tool with very limited functionality to quickly publish tweets from the my terminal and anything else.

## Usage

To publish a tweet with a only a text message, use the `-m` flag.

```bash
bluetw -m "Hello, world"
```

To write a tweet with an image added use the `-i` flag. You can't post images in Twitter without and alt text so you need to write one.

```bash
bluetw -m "Hello, world!" -i meme.png "A funny meme"
```

You can use the `--help` flag to see more info about each flag.

```bash
bluetw --help
```

## Help is always welcome!

If you detect any error or there is any aspect of `bluetw` that you would like to improve, please don't hesitate to open an Issue or send a PR!
