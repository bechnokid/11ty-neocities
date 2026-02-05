---
title: Using VSCode for Neocities
shortTitle: VSCode & Neocities
displayOrder: 3
description: A tutorial on how to use VSCode to help make developing Neocities sites a little easier.
prism: true
permalink: /tutorials/vscode/index.html
redirectFrom: [/blog/2022_08_22, /resources/tutorials/vscode]
---
==toc

## Introduction

As [Erin](https://strawberry-gashes.neocities.org) has said in the past:

> i imagine this is a problem that happens to neocities users: you edit your page in the built-in web editor, hit save, then go to the page to see the changes. par for the course. the only problem is... suddenly you've got 10,000 "hits" on your neocities stats. you know bc you've been tinkering and refreshing your own pages to get everything juuuust right that those numbers aren't accurate. "that me -_-" this can also happen with general web counters, depending on how your counter counts visitors orz
>
> worse yet, recently due to an influx of users, it's been putting a lot of strain on neocities servers. server strain = downtime
>
> a solution to help assuage these problems is to have your pages saved on your own hard drive, so you can edit and view to your heart's content with no affect on your views and with less strain on the servers uwu

[Erin provided a wonderful tutorial](http://web.archive.org/web/20220918162237/https://gutz.neocities.org/neocities.html) on how to edit your files by using Notepad++ and your local browser as a live preview. However, I wondered if I could do the same with my favorite code editor: **Visual Studio Code** or VSCode for short.

I would link the entire documentation for VSCode, but I imagine it would be overwhelming for new users. So, I'll provide a small tutorial on setting up VSCode to help new users get started.

## Setting Up VSCode

1. Go to the [Visual Studio Code](https://code.visualstudio.com/) site, and download the latest version of VSCode.
1. Open up VSCode and locate the Extensions button on the left side of the screen (it should look like a set of building blocks).
1. Click on the "Search Extensions in Marketplace" search bar.
1. Type in "Live Preview". The extension should be near the top and say it was developed by Microsoft.
1. Select the small "Install" box to install the extension. You can also click on the the extension itself to see how it functions.

## Configuring VSCode

1. You can configure the settings for VSCode by going into File > Preferences > Settings, pressing "Ctrl + ," (comma key), or pressing "Ctrl + Shift + P" and typing `Open User Settings`.
1. A new tab will open for settings, which will be where you can configure the editor however you'd like.
1. **(Recommended for new users)** VSCode allows users to save their settings into a JSON file. To open the JSON file, press "Ctrl + Shift + P", and type `Open Settings (JSON)`. This will open `settings.json`.

The JSON file that I will provide below allows HTML tags to be automatically renamed and closed, changes the tab size to 2 spaces, and trims any trailing whitespace:

```json
{
  "editor.tabSize": 2,
  "editor.linkedEditing": true,
  "files.trimTrailingWhitespace": true,
  "editor.wordWrap": "on",
}
```

## Saving Neocities Files to Hard Drive

This follows steps 1 through 3 from [gutz's tutorial](http://web.archive.org/web/20220918162237/https://gutz.neocities.org/neocities.html). If you already have all of your Neocities files saved in your hard drive, you can skip this section.

1. Create a folder in your hard drive where you will store the files to your Neocities site. I named mine `neocities` for convenience.
1. Create subfolders as needed.
1. Select `Edit Site` to go to your Neocities dashboard where all of your files are located.
1. Hover over each .html, .css., or .js file you want to save. Right-click and select `Save link as...` and save your file in your hard drive folder.
    1. Be sure to name your files exactly like in your Neocities dashboard and that they all retain their file types. Since folders cannot be saved, every file in each subfolder must be saved individually.
1. Organize all files in the same file structure as your Neocities dashboard. This means every file must be in its original folder, etc.

## Opening Neocities Files in VSCode

1. From VSCode, select `File > Open Folder`
2. Locate the folder where your files are located. For example, if all of your files are located in a folder called `neocities`, find the `neocities` folder, click on it once, and click on `Select Folder`.
3. Your files will appear on the Explorer sidebar on the left side of the screen. The layout should look identical to your Neocities dashboard.

## Previewing Neocities Files Locally

1. We will be using the `Live Preview` extension that I mentioned earlier. To start using it, open any HTML file from the Explorer sidebar by double-clicking on it.
1. Right-click anywhere in the HTML file, and select `Show Preview`.
1. VSCode will open a new tab on the right side that will show a live preview of your site using a local server. The "browser" it uses is similar to Chrome.
    1. If Chrome is not your default browser and you would like to open it in your default browser, select the icon with four horizontal lines on the right side of the screen, then select `Open in Browser`.
1. VSCode will then open your site in your default browser and a terminal window within the software's UI.
1. Close the browser by simply closing the window, and then close the terminal window by clicking on the trash can icon, or pressing "Ctrl + C" within the terminal.

## Closing Thoughts

I hope this tutorial was able to help, even a little bit. I understand that learning a new software can be pretty overwhelming, even if you read a hundred tutorials. The last thing I want is to force people to do something they don't like, so if it turns out that VSCode isn't for you, then that's ok! :3

If some of you end up interested in VSCode and would like to use it some more, stay tuned! Hopefully, I'll have the time to make a tutorial that will help users update their Neocities sites through GitHub. It does require some knowledge of Git, but I'll try my absolute best to explain the very basics of it.

Until then, see you later!
