[![LinkedIn][linkedin-shield]][linkedin-url]
<br />

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/skald1311/cooksta">
    <img src="https://github.com/skald1311/cooksta/assets/84189062/c7f6cdbe-87eb-4aff-abd7-0ce7a68b0120" alt="Logo" width="100" height="100">
  </a>



<h3 align="center">Cooksta</h3>

  <p align="center">
    Explore and share your food adventures on this full-stack social platform
    <br />
    <a href="https://cooksta.netlify.app/"><strong>LIVE DEMO</strong></a>
    <br />
    <br />
    <a href="https://github.com/skald1311/cooksta/issues">Report Bug</a>
    ·
    <a href="https://github.com/skald1311/cooksta/issues">Request Feature</a>
  </p>
</div>

<br/>

[![React][React-badge]][React-url]
[![JavaScript][Javascript-badge]][Javascript-url]
[![HTML5][HTML5-badge]][HTML5-url]
[![CSS][CSS-badge]][CSS-url]
[![Styled-components][Styled-Component-badge]][Styled-Component-url]
[![Netlify][Netlify-badge]][Netlify-url]
[![Python][Python-badge]][Python-url]
[![Django][Django-badge]][Django-url]
[![Vercel][Vercel-badge]][Vercel-url]


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

After many disappointments with food not matching its menu picture, I decided to develop a food-focused social media app. This platform enables users to upload photos of food along with relevant information such as names and locations, ensuring others won't encounter similar disappointments.

*Key Features:*

1. Authentication (sign up, log in, log out): Utilizes a context API to provide every component with knowledge of the current user's authentication status. The app restricts access to non-signed-in users, redirecting them to the login/signup page. Upon logging in, the frontend sends the username and password to the backend for authentication. Signing up involves sending new account data to be added to the database.
   ![image](https://github.com/skald1311/cooksta/assets/84189062/8f433782-46b3-41cc-84f0-75fbdd137696)

3. Feed: To enhance user experience, fake data from real restaurants/people is integrated to simulate activity. Although an infinite scroll feature is not implemented due to the limited data, each post on the feed offers interactions such as redirection to the user's profile page by clicking the username, and to the post page by clicking the post image. Liking a post is facilitated by tapping the heart symbol.
   ![image](https://github.com/skald1311/cooksta/assets/84189062/c7f982b6-1049-4f2a-9b96-feec9419eb74)

5. Ability to create new posts and like posts: The frontend sends post information to the backend for database inclusion, updating the user's post array with the post ID. Liking a post is accomplished by sending a request from the frontend, with the backend updating the post's like count.
   ![image](https://github.com/skald1311/cooksta/assets/84189062/5d81981b-4323-4dc1-a6a8-ba760d6160d9)


7. View your own and others' profiles: Features include hover-over functionality to display like counts on posts, and tapping on a photo leads to the full post.
   ![image](https://github.com/skald1311/cooksta/assets/84189062/9a25971f-5692-4835-a4b3-7f8a18941d23)
  ![image](https://github.com/skald1311/cooksta/assets/84189062/64c168bd-82a6-427a-8bc1-a791d0f04419)
![image](https://github.com/skald1311/cooksta/assets/84189062/c9e9462b-18ca-40ce-833e-c78ad390471a)


9. Account updating features (changing password, profile picture, and description): Utilizes the same backend communication pattern as previous features, enabling users to modify account details seamlessly.
    ![image](https://github.com/skald1311/cooksta/assets/84189062/b18758b2-b24a-4a77-8963-67bc0206e97d)


11. Dark mode and light mode: Dark mode and light mode: Implemented using CSS variables adjusted via the class attribute in the HTML tag, allowing for a dynamic change in appearance.
    ![image](https://github.com/skald1311/cooksta/assets/84189062/8be9e969-7fb7-464f-aec8-1dcd135f3149)
    ![image](https://github.com/skald1311/cooksta/assets/84189062/826c8931-13c6-418e-a221-7b8c95801fbe)



*Application Architecture:*
The frontend is constructed using ReactJS and JavaScript, while the backend Django functions as an API facilitating communication with the hosted MongoDB Atlas cluster. For production hosting, the frontend is deployed on Netlify, and Vercel hosts the backend. Due to complications with SSL certificate, I decided not to host the backend on an AWS EC2 instance anymore.

The inspiration for this app was also drawn from a video game called "Dave the Diver."

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Built With -->
## Built With
*Frontend:*

* [![React][React-badge]][React-url]
* [![JavaScript][Javascript-badge]][Javascript-url]
* [![HTML5][HTML5-badge]][HTML5-url]
* [![CSS][CSS-badge]][CSS-url]
* [![Styled-components][Styled-Component-badge]][Styled-Component-url]
* [![Netlify][Netlify-badge]][Netlify-url]
<br/>

*Backend:*

* [![Python][Python-badge]][Python-url]
* [![Django][Django-badge]][Django-url]
* [![MongoDB][Mongo-badge]][Mongo-url]
* [![Vercel][Vercel-badge]][Vercel-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Installation

**LIVE DEMO [HERE](https://cooksta.netlify.app/)**

**Since the application's data resides on MongoDB Atlas, you'll require the connection URL to access the database. However, as the URL contains my account's password, for security reasons, I haven't included the db_connection.py file. If you wish to host it locally, please reach out to me via LinkedIn, and I'll assist you in obtaining your own db_connection.py**

Once you've obtained db_connection.py, you can follow these next steps

1. Click the green button

  ![image](https://user-images.githubusercontent.com/84189062/210023644-49f6ee47-b8aa-479d-b192-c9985ef913cd.png)
   
   
2. Download ZIP

   ![image](https://user-images.githubusercontent.com/84189062/210023664-4d06ef4a-71a7-444d-9778-bf21c8ed30ae.png)
  
  
3. Extract the file
   ```sh
   Make sure all of the files are in the same folder!!!
   ```

4. Paste the db_connection.py file into the "backend" folder

5. Go into the "backend" folder
   ```sh
   cd backend
   ```

6. Create a virtual environment and activate it
   ```sh
   python -m venv .venv
   . .venv/Scripts/activate
   ```
   Some systems might be different (python3 rather python; . .venv/bin/activate rather than . .venv/Scripts/activate)

7. Install backend dependencies 
   ```sh
   pip install -r requirements.txt
   ```

7. Run the server
   ```sh
   python manage.py runserver
   ```
   In the terminal, you'll see a link, but it's not for the actual app. It's just for the backend server, so please refrain from clicking on it.

8. Open up a new terminal and cd into the "frontend" folder
   ```sh
   cd frontend
   ```
   
9. Install frontend dependencies
   ```sh
   npm i
   ```

10. Run frontend server
   ```sh
   npm run dev
   ```
  You'll find a link in the terminal. Hold down Control and left-click on the link to access it. Enjoy!


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Duong Hoang - [LinkedIn](https://www.linkedin.com/in/hmd1311/)

Project Link: [cooksta.netlify.app](https://cooksta.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat
[linkedin-url]: https://www.linkedin.com/in/hmd1311/
[Javascript-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat
[Javascript-url]: https://www.javascript.com/
[Python-badge]: https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=flat
[Python-url]: https://www.python.org
[HTML5-badge]: https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat
[HTML5-url]: https://en.wikipedia.org/wiki/HTML
[CSS-badge]: https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat
[CSS-url]: https://en.wikipedia.org/wiki/CSS
[Pytorch-badge]: https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=fff&style=flat
[Pytorch-url]: https://pytorch.org
[React-badge]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat
[React-url]: https://react.dev
[Django-badge]: https://img.shields.io/badge/Django-092E20?logo=django&logoColor=fff&style=flat
[Django-url]: https://www.djangoproject.com
[Styled-Component-badge]: https://img.shields.io/badge/styled--components-DB7093?logo=styledcomponents&logoColor=fff&style=flat
[Styled-Component-url]: https://styled-components.com
[Netlify-badge]: https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=fff&style=flat
[Netlify-url]: https://www.netlify.com
[AWS-EC2-badge]: https://img.shields.io/badge/Amazon%20EC2-F90?logo=amazonec2&logoColor=fff&style=flat
[AWS-EC2-url]: https://aws.amazon.com/ec2/
[Mongo-badge]: https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat
[Mongo-url]: https://www.mongodb.com
[ReactRouter-badge]: https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat
[ReactRouter-url]: https://reactrouter.com/en/main
[Vercel-badge]: https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat
[Vercel-url]: https://www.vercel.com

<!--https://badges.pages.dev-->
