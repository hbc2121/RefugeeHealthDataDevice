# Functional Design Document

Problem
----------
[The goal of this project is to create a phone application for doctors in refugee
camps to record patient health data. We will use two factor authentication - one
is the patients finger print, and the second is an RFID bracelet created by CE
students from last year. Doctors from different locations will be able to access
these medical records because we are aware that patients can relocate to various 
healthcare locations for a variety of reasons. These devices will need to be secure
because in these refugee camps, women can be rejected by their communities if
their families and peers find out that they were assaulted. The application must
be able to work with low network connectivity and must encrypt any information
stored locally to protect the health information.

With this data, doctors will be able to better assess individuals as well as
refugee camps as a whole. We will generate reports from this data so doctors can
have evidence of sexual assault and human trafficking in the hopes of creating
policies to help refugees. Doctors will be able to use this data to argue for
safer and more regulated environments for these refugees.]


Motivation
----------
[Throughout Europe and Asia, refugees are being trafficked from place to place, 
and doctors have a difficult time keeping track of their medical histories.
Our platform will provide doctors with a robust way to keep track of the 
locations and medical histories of refugees. Through two-factor authentication
and encrypted data storage, our application will ensure that human traffickers
and untrusted members of the refugee camps will not be able to access any
confidential medical information.

Further, our application will provide statistics about the medical histories
of these refugees. This will allow public health organizations like WHO to
analyze epidemiological trends, making it easier to control the spread of
disease throughout refugee camps. It will also allow lobbyists to cite real data
when appealing to the UN for more support for these refugees.]

Existing Technology
----------
[While there are applications for doctors to record patient health information,
there has not been any applications for doctors to use in refugee camps. That
being said, computer science students from last year began this project and
provided us with a basic understanding with what needs to be completed. Although
helpful, we are starting from scratch for the application because we would like
to use technology that we believe would work better for this situation.]

Questions:
1. If family members can access their own families health records, will that be
in issue in the case of sexual assault?
2. Do we need the bracelet?



<strong>Guyer's Stuff</strong>
<ol>
        <li>User's experience - who is my user?</li>
        <li>Use cases - maybe as flow chart</li>
        <li>Wireframes</li>
</ol>

Purpose Statement

        [Short section describing the purpose of project. Why does the client need
        this piece of software?]

Client Information

        [Write up a short summary of the client. Who are they, what is their mission
        statement, where are they located, how big or small are they? The more detail,
        the better. Talk about how much funding they have and how much technical
        resources they have.]


Team Information

        Ethan Donowitz, Hayley Cohen, Danielle Zelin, Brett Fouss

Project Scope

        [The scope is a high-level description of the project. Don’t go into too
        much detail here, do that in the “Overview of Requirements” section. ]

End Users & Use Cases

        [List and describe the end users and several possible use cases of this
        application. End users are the people who will be using your application.
        There may be several different types of end users, and each may use the
        application differently. Use cases describes the possible ways each end
        user will interact with the app. Here’s an example:

                End User: Administrator
                Administrator Use Cases:
                        The administrator may add, remove and delete user profiles.
                        The administrator may view metrics on site usage.
                        etc.

        Note that the use cases are described using active verbs. They may or
        may not be specific to a single end user.]

Overview of Requirements

        [While the scope of a project is a high-level description, the requirements
        are an outline of it’s features. Requirements specify all aspects of each
        use case, together, they describe the functionality of the app. We imagine
        that the goal of the development process is to satisfy (implement) all of
        the requirements of the project.]

Technology Stack

        [Talk about what technologies you will use to develop this application. This
        can be in the form of a numbered list of each technology, and perhaps a brief
        description of each.]

Implementation Overview

        [Here, briefly discuss how the application will be implemented. What modules
        will you create, and what are their interfaces? How will they interact? The
        purpose of this is to get your team started thinking about how to proceed
        coding; however, agile development assumes that these details will change
        significantly throughout the course of development.]

Other

        [These sections may or may not be applicable to your project.]

Testing and Test Cases

        [Talk about what test strategies you will use to test your application. What
        test cases can you devise to comprehensively test each use case? 

Maintenance

        [How will you construct your site to be maintainable and scalable? What happens
        when the technology used to construct your application becomes depreciated? Will
        it be possible to add requirements and features?]

Security

        [How will you protect and secure your client’s data? What measures will you take
        to secure your site? List any technologies, libraries or packages you need. Talk
        to a Project Manager for recommendations.]

