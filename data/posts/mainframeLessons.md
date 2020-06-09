---
title: 'How My Experience with COBOL Has Made Me a Better Web Developer'
date: '2020-06-08'
---

# About My Career
I landed my first dev job as a mainframe developer when I was twenty years old. I studied COBOL and JCL in college because I knew there was a shortage of mainframe expertise in my local area; this led to a great job straight out of schoole. I was always interested in web development but I enjoyed my current role immensely and, as I will discuss, I learned some great lessons in my first year of full time development. At the beginning of this year, I was placed on a temporary assignment working on an app that used React, NodeJS, and the Google Cloud Platform. Talk about a drastic change in tech stack! Throughout this project, I realized that my experience of working with COBOL aided me in full-stack web development in some unexpected ways.

# Lesson from COBOL #1: Code Readability
One of the many distinct attributes of COBOL is its English-like syntax. If you want to add one to a variable named 'COUNT', you write `ADD 1 TO COUNT.`. While it may be verbose, combined with sensibly named variables, it results in source that reads almost like pseudo-code. Another aspect of COBOL is its strict enforcement of certain formatting rules.  
Things like: 
- Code must start in column 8
- No more than 80 characters on a line
- Variables must be defined in their own section above the source code

These rules are enforced by the compiler. You literally can't run code that doesn't follow the standard.  

With these two aspects of COBOL in mind, I moved into the web development world with a strong sense of the importance of **code readability**. While JavaScript doesn't have quite as stringent rules, we use Prettier and ESLint to enforce rules on our codebase. These tools not only contribute to the readability of the code, they also enforce uniform standards across the codebase. This helps reduce pull request comments like 'add a semicolon here' and curtails lengthy discussions about formatting preferences.  

No matter the language, **code readability contributes to the long term maintainability and usability of your code base**.

# Lesson from COBOL #2: The Value of Unit Tests


# Lesson from COBOL #3: Separation of Concerns 

