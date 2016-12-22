Describe the major technical components that you will need to acquire or
build for this project. You don’t need to know all of the answers here,
but you should be able to identify where most of the work and effort will
go. For example, you might say “We will use machine learning to identify
the user’s saber swing patterns” without necessarily knowing exactly which
ML algorithm or techniques you’ll deploy.

Please make sure to identify which of the components or problems you think
will be the most challenging and why.

5. Major technical components

Two-Factor Authentication System

        In order to improve the security of the application, and in particular to
        aid in the hiding of refugee data from sex traffickers and malicious family
        members, we will need to interface with a two-factor authentication system
        that was developed by a previous Senior Design project team.

        Thus, aside from learning how to interface with the system, we do not
        believe this task will be complicated. 

Front-End Module

        Several different front-end experiences will be designed and implemented
        for the different end users who will be using the application. While the
        interface for a doctor will be quite simple, we aim to do extensive user
        interviews in order to identify what interfaces would be most useful for
        a "superuser" who has access to all data in the system. We plan on designing
        data visualizations that enable superusers to explore and understand the
        refugee data from a high-level, in order to identify trends and inform
        decision making.

        The front-end module will also have to deal with poor network connectivity.
        We believe this will be the greatest challenge we face. We must figure out
        how to store the data on the local machine wihtout compromising security.
        This may entail learning different techniques for different mobile architectures.
        We also have to develop the logic behind updating the database when the user
        gains network access. We'll have to figure out how to resolve any descrepancies
        or conflicts when data points are updated all at once.

Database and Back-End Module

        Our server will be implemented as a simple REST api. We want most of the
        code to be front-end. The back-end will simply serve as an interface
        between the front-end and the database. We do not believe our database
        will be complicated, although implementing it will be new for all of
        us. 

VPN Connection

        Our client has expressed that initially, the database and server code will
        be hosted on Tufts servers. In order to ensure the safe transfer of data,
        we aim to require users in the field to securely connect to the back-end
        servers through a VPN.

        This portion is entirely new for us, so we plan to spend quite a bit of
        effort figuring out how to implement this.
