# Nodejs Runtime Logger

***Node.js Runtime Logger*** is a logger, _"obviously"_, that helps to log errors
during runtime. The purpose of _"Yet another logger"_ was to create somthing more
contemporary. Many of the other loggers were not valid options for me because they
implimeted deprecated code I didn't want to use in a project, or they didn't really
add anything extra, from the logging that standard Node.js & ECMAScript offers.

**Noee.js RT-Logger** impiments the following features:
- Colored error printing.
- Runtime logging to logs.
- Configurable logging (w/ custom config file)
- Self Describing Error Meta Objects



### Intro Excerpt Continued...
**Nodejs RT Logger** is more than just a logger: Its a logger with built in support for
functionality that requires the use of several modules. The original aim of RT-Logger
was to create a logger that was better suited for contemporary node development than
whats currently available. One contemporary problem, which I don't see being fixed
anytime soon, is the oversized node_modules folder that just about every node project
has to maintain in order to stay operable. ***Nodejs Runtime Logger*** address this
issue by building built in functionality. The purpose, and result, is two-fold:

1. ***Nodejs RT Logger*** doesn't use any dependencies. Anything functionality that it
requires is hard-coded into it.

2. Any support &/or functionality that needed to be added to ***Nodejs RT-Logger*** from
a module, was added by hard coding it strait into the ***RT-Logger*** project instead,
as a consequence; *Nodejs RT Logger* ships with a few libraries that can be used by
projects that download **Nodejs RT-Logger**. Using the built-in libraries will reduce
your over all module count, and is a small step towards a more maintainable, smaller,
app/program, therefore, its suggested to do so if possible.
