import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Joseph. I'm a full stack Student with experience in Express JS, Node JS, MySQL, MongoDB, and React.</p>

            <p>One of my dreams is to start my own business or create apps for iphones and andriods.</p>

            <p>I'm always learning new things. One of the new things I'm learning is React!</p>

            <p>My latest project is currently in development and will be linked here once finished <a href="" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is my final project for my UCSD Coding bootcamp and will be using everything we have learned in the past six months.</p>

            <p>When im not coding I love to play videogames or learn about new ways to code.</p>
            </Content>
        </div>
    );

}

export default AboutPage;