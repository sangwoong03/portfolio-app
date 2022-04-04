## Portfolio App (React.Js)

---

This project is about my portfolio app produced by React.Js.  
For check the real app, check out this link below:

- https://sangwoong03.github.io/

### Issue for styling... Crash stlying code by the priority?

---

Instead of using [netlify](https://netlify.com) web site for deploying my app, this project has been deploying bt github pages services.

I have never experienced this error with netlify..  
And now (2022-04-04), in result I covered this issue but I don't know why I have to do this completely.

**The first issue: Inline Styling vs. Css file.**  
There are css files linked to each js component folders.  
In the Header folder, the element that has class name "header" has not been affected by Header.css file.

Check out the image below:

![Issue_#1](./issue_%231_header.png)

After rewritting css codes as **element inline stlye in jsx tag**, this error has been resolved.

From this issue, I could consider the order of priority of styling code:

1. code with "!important"
2. Inline stlye code in HTML elements
3. #id
4. .className, .class, pseudo-classes
5. element tag name (div, header, section, footer etc...)
