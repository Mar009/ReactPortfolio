import React from 'react';
import Header from './Header';
import Contact from './Contact';

function Projects(props) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="col-lg-6">
                    <div class="card" style="width: 18rem;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Damascus_Bowie.jpg/1200px-Damascus_Bowie.jpg" className="card-img-top" alt="Generic Knife">
                            <div className="card-body">
                                <h5 className="card-title">Leather & Knife Work</h5>
                                <a href="https://www.instagram.com/cuauhtli009/" className="btn btn-primary btn-lg btn-block">See Examples</a>
                            </div>
                        </img>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card" style="width: 18rem;">
                        <img src="https://img.icons8.com/fluent/48/000000/github.png" class="card-img-top" alt="Github">
                            <div class="card-body">
                                <h5 class="card-title"> Project 1 </h5>
                                <a href="https://andrealejandra.github.io/Project_1/" class="btn btn-primary">Random food, drink, & playlist generator</a>
                            </div>
                        </img>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card" style="width: 18rem;">
                        <img src="https://img.icons8.com/fluent/48/000000/github.png" class="card-img-top" alt="Github">
                            <div class="card-body">
                                <h5 class="card-title"> Project 2 </h5>
                                <a href="https://serene-lowlands-40117.herokuapp.com/" class="btn btn-primary">DnD Tracker</a>
                            </div>
                        </img>
                    </div>
                </div>
            

            </div>
            <Contact />
        </div>

    )
}

export default Projects;