import React from 'react'

class Technologies extends React.Component {
    render() { 
        return ( 
            <div className='technologies'>
                <h2>Techni-cool skills 😎</h2>
                  <p>
                      It's not just charisma and an enthusiastic smile that
                       I bring to the table! I can code too.
                  </p>

                    <div className="quote">
                    <i>"She's really good at the code"</i>
                    <p className="han">- Han, Teacher at EDA</p>
                   </div>

                    <div className="tech-list">
                    <span>Node.JS <i class="fab fa-node"></i> </span>
                    <span>React <i class="fab fa-react"></i> </span>
                    <span>HTML5 <i class="fab fa-html5"></i> </span>
                    <span>CSS3 <i class="fab fa-css3-alt"></i> </span>
                    <span>SCSS <i class="fab fa-sass"></i> </span>
                    <span>JavaScript <i class="fab fa-js-square"></i> </span>
                    <span>Knex <i class="fas fa-database"></i> </span>
                    <span>Github <i class="fab fa-github"></i> </span>
                    <hr/>
                </div>
            </div>
            
         );
    }
}
 
export default Technologies;