![GitHub Logo](./logo.png)

**"suk9206/navigation.js"** is copies the skip break that matches the form set in **"suk9206/navigation.js"** from the specified element to the desired element.

## Purpose to develop
1. We will intuitively understand the main purpose of the content before reading the body of the content.
2. Provides rules for authors to organize their content systematically.

## Example
[한국어](https://suk9206.tistory.com/912), [English](https://suk9206.tistory.com/911)

## CDN
```
<script src="https://cdn.jsdelivr.net/gh/suk9206/navigation.js/navigation.js"></script>
```

## Usage
```
navigation({
    from: document.getElementById('main'), // Elements that you want to navigation.
    into: document.getElementById('nav'), // The location of the element from which you want to import the navigation data.
    class: { // Set class name of element.
        ol: 'navigation-ol',
        li: 'navigation-li',
        div_listHeading: 'navigation-div_listHeading',
        a_listHeading: 'navigation-a_listHeading',
        span_descendent: 'navigation-span_descendent',
        a_descendent: 'navigation-a_descendent'
    },
    list: ['h2', 'hr'], // Specify the element criteria that the LI element must contain to generate the list.
    descendent: ['h2', 'h3', 'h4', 'h5', 'h6'], // Specifies the array of element node names to be imported as additional child elements
    hasDescendent: true // Please specify whether or not to have children in "List Heading".
});
```

## 👨‍💻 Note for contribute
Please participate in this project to improve the quality of existing documents.
Anyone can participate.

The CSS design of the summary table, extension, algorithm improvement, and even logo creation all need your help.

I do not have much to say about features that are so good yet, but I want to work with you on purpose and meaning and to build on the project implementation. Every one of your skills is needed.

In addition, this project is a joint project in which no absolute owner exists.

Anyone can participate in this project without regulation. **We hope you will contribute this project for simplicity and rapid development rather than fragmentation of the project.** It helps us focus our opinions effectively and systematically. **You can do anything on this project without restriction!**

### ♻️ Contributors who contribute a lot to this project must own this project. This allows the project to circulate more fluid, responsive and fast.
