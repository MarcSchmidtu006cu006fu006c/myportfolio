import React from "react";

export default function Projects (){
    return (
        <>
        <h1 className="page-title">Most Relevant Projects and Applications </h1>
        <div className="project-media">
            <div className="project-projects">
                <div className="project-block">
                    <h1 className="project-name">Single Parent Life</h1>
                    <img src={require("../images/single_parent.webp")} alt="singleparentlogo"></img>
                    <p className="box-text">The Single Parent Life application was a social media type system 
                        that I had the opportunity to be a part of from September 2021 till 
                        its MVP in May 2022. The application was designed to allow for single 
                        parents within Canada to connect with one another for support and 
                        other parent related activities. The application allowed users to 
                        “match” with one another, message other users, connect their social 
                        media accounts to their Single Parent life accounts, and many other 
                        features. The application’s front end was created using the React 
                        Javascript library with plain CSS for styling. The backend of the 
                        application used the Java framework SpringBoot paired with JDBC for 
                        data access to the mySQL database. During development I worked on a 
                        team of eight developers in agile style development. I worked as a 
                        full stack developer with a focus on the backend and connecting with 
                        the database using SQL queries. Near the end of the project I was 
                        honored to be able to lead presentations with stakeholders and the 
                        owner of the Single Parent Life brand to go over what had been 
                        completed in terms of use cases and available functionality as 
                        well as the future of the application. I’m very grateful to have 
                        been able to be a part of such an amazing team and get to experience 
                        industry style agile development from conception to MVP.  </p>
                </div>
                <br />
                <div className="project-block">
                    <h1 className="project-name">Binary Search Tree Word Tracker</h1>
                    <p className="box-text">The word tracker program was a project I worked 
                    on using binary search trees to create reports using reference based 
                    formatting to identify the occurrence of certain phrases and words 
                    in a given file. By using a binary search tree all characters and 
                    phrases were given a value that was used in searching on the binary 
                    search tree. The program worked in the command line using a jar file 
                    and would allow for certain phrases or words to be omitted from the 
                    report at the user's discretion. The program was created in vanilla 
                    java using the following java technologies, Binary Search Trees, 
                    JUnit 4 for testing, Abstract Data Structures, and Serialization. </p>
                </div>
                <br />
                <div className="project-block">
                    <h1 className="project-name">SOTIsland Identifier</h1>
                    <p className="box-text">The SOTIslandIdentifyer was a project I worked 
                    on in my spare time to address an issue I was having with a video game 
                    I was playing at the time. In the game Sea of Thieves there is a part 
                    where you must identify an island on a large map based on a small image 
                    you are given of the island. I eventually got fed up with trying to 
                    find the island so I made a program in java to solve this. It worked in 
                    vanilla java by taking in an image and confirming the image dimensions 
                    and specifications were correct. It then connected to a mySQL database 
                    that stored an image of every island in the game. It then used RGB values 
                    to compare the image given by the user to the ones from the database. It 
                    then calculated what island matched based on determining what image had 
                    the least amount of difference in RGB values. Once it determined the 
                    correct island it would tell the user what the name of the island was 
                    and where to find it. </p>
                </div>
            </div>
        </div>
        </>
    );
}