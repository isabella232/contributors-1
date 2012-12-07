This branch implements the changes needed to get Scribus to run headless.

The plans were to to work on running on it after Scribus 1.6 has been released. There is no 1.6 in sight, yet. So, if somebody dares we can start to work in this branch.

The current idea is to create a "scribus-console" application, like gimp does with "gimp-console".

This apporach would allow a simpler, step by step, work, where we can see some results without having to wait for the patches being integrated into the main application. this should be doable without having to scramble too much the main code and allow people to better cooperate.

At the end it could be possible that scribus-console and Scribus are made a unique application again. But it's not necessary.

The first steps would be:

- create the cpp files needed for an empty "scribus-console" program and patch the cmake file in order to let compile both "scribus" and "scribus-console" in the same project.
- the "scribus" and "scribus-console" programs will link to the same .h files
- start to put basic commands into the "scribus-console" sub-project, test the code in there and, when needed, propose patches for the main "scribus" libraries in order to make it better fit the "console" use.

any thoughts?
