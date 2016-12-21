# Functional Design Document

Purpose Statement

        To create a phone application for doctors in refugee camps to securely
        and easily record and keep track of patient information.

Client Information

        Dr. Mollica - Director of the Harvard Program in Refugee Trauma 


Team Information

        Ethan Donowitz, Hayley Cohen, Danielle Zelin, Brett Fouss

Problem

        The goal of this project is to create a phone application for doctors in refugee
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
        safer and more regulated environments for these refugees.

Motivation

        Throughout Europe and Asia, refugees are being trafficked from place to place, 
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
        when appealing to the UN for more support for these refugees.

Existing Technology

        While there are applications for doctors to record patient health information,
        there has not been any applications for doctors to use in refugee camps. That
        being said, computer science students from last year began this project and
        provided us with a basic understanding with what needs to be completed. Although
        helpful, we are starting from scratch for the application because we would like
        to use technology that we believe would work better for this situation.

Questions:

        1. If family members can access their own families health records, will that be
           in issue in the case of sexual assault?
        2. Do we need the bracelet?

End Users & Use Cases

        The users of our project will be Dr. Mollica and the doctors stationed in the refugee camps. 
        Dr. Mollica is the client for this project who will oversee and deploy our project at the camps. 
        There are about 6 or 7 camps, each with doctors who will be using the application during 
        patient visits. 
        
        The refugees located in the camps will also be users as they will be wearing the bracelets and will 
        be visiting the doctors using our technology. The doctors are located in remote areas without strong
        connectivity and with minimal resources. Therefore, our project needs to function both with and 
        without connection to the internet. The refugees must be able to keep their healthcare information 
        extremely secure as well, which will act as a constraint as well. There are two different user stories 
        for our project, one is the user experience of Dr. Mollica and the other is the user experience of a 
        doctor stationed in the refugee camp. 
        
        End User: Dr. Mollica
        Dr. Mollica Use Cases: 
                - Super user for the system
                - Log in to the application (ideally with network connectivity)
                - View specific patient records
                - Mide data and obtain data visualizations (ie. How many patients were given penicillin)
        
       End User: Refugee Camp Doctors
       Doctor Use Cases:
                - Log in with credentials and biometrics
                - View patient records
                - Push data to database if collected with network connection
                - Enter data during a patient visit;
                        - Patient authenticates with bracelet and biometrics
                        - If it's the patients first visit, doctor will ask all of the HTQ (Harvard Trauma Questionnaire) 
                        - If it's not the patients first visit, doctor will only ask ten critical questions
                        - If there is network conenction, doctor can add and retrieve information from database

Wireframes

![](wireframes/capstone1.png?raw=true)
![](wireframes/capstone2.png?raw=true)
![](wireframes/capstone3.png?raw=true)
![](wireframes/capstone4.png?raw=true)
![](wireframes/capstone5.png?raw=true)

Goals

        The first level of achievment will be creting the database to store all of the 
        healthcare information about the refugees. The doctor will be able to ask the 
        patient questions and store them in the database. 
        
        The second level of achievment will be incorporating the database with the authentication
        previously developed and create a full application. This finished application will present
        the questions to the doctor and allow them to answer them within the application. The 
        application will also implement the two-factor authenitication, integrated with the RFID
        bracelets.
        
        Once these two levels are achieved, there will be other smaller facets to complete such as
        creating data visualizations based on the healthcare information.
        
Evaluation

        The success of our project will be evaluated on several levels. Our sponsors
        would like begin using our product in May meaning that all of the components
        must work completely. Some of the criteria that the sponsors will use to
        evaluate are projects include:
            1. Can a doctor add a new user (with the bracelet and thumbprint)?
            2. When it is a new user, can the doctor fill out the patient information?
            3. When there is an existing user, can the doctor access the records using
               the bracelet and thumbprint?
            4. Can a doctor successfully sign in with special privileges with a bracelet
               and thumbprint?
            5. Are there super user capabilities for Dr. Mollica?
            6. Can the product scale?
            7. Is it secure? - static analysis
            8. Is each patient visit recorded in the database with a timestamp,
               location, and the updated health questions?
            9. Is there a way to view all statistics and apply filters?
            10. Is the data stored locally if there is no internet connection?

        We will need to ensure that all the required components are working
        correctly and we will need to run our product through a few tests to ensure that
        it will scale safely considering many doctors will be using this from many
        countries. Security will also be a big concern of ours. Because Dr. Mollica
        doesn't have a computer science technical background, it is our responsibility
        to ensure the technical components are working correctly.
        



