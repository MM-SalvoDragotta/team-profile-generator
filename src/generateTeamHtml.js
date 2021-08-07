function generateTeamHtml(data) {
    return `
    <!DOCTYPE html>
    <html>

    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Cards</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    </head>

    <body>
    <div class="team-boxed">
        <div class="container">
            <div class="intro">
                <h2 class="text-center"> Team </h2>                
            </div>
            <div class="row people">

            ${generateCard(data)}

            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `
}

const generateCard = data => {
    const user = employee => {
        if (employee.officeNumber) {
            return `Office Number: ${employee.officeNumber}`
        }
        if (employee.school) {
            return `School: ${employee.school}`
        }
        if (employee.github) {
            return `<p> Github: <a href="https://github.com/${employee.github}"> ${employee.github} </a> </p>`
        }
    };

    const userImg = employee => {
        if (employee.getRole()=="Manager") {
            return `../assets/images/Manager.png`
        }
        if (employee.getRole()=="Engineer") {
            return `../assets/images/Engineer.png`
        }
        if (employee.getRole()=="Intern") {
            return `../assets/images/Intern.png`
        }
    };

    
    return `
        <div class="col-md-6 col-lg-4 item">
        ${data.map(teamMember => {
            return `

            <div class="box"> <img class="rounded-circle" src=${userImg(teamMember)}> 
                <h3 class="name">${teamMember.getName()}</h3>
                <p class="title">${teamMember.getRole()}</p>
                <p class="description">Id: ${teamMember.getId()} </p>
                <p class="description">Email: <a href="mailto:${teamMember.getEmail()}"> ${teamMember.getEmail()} </a> </p>
                <p>${user(teamMember)}</p>
             </div>          
    `
    }).join('')}
        </div>
    `
}

module.exports = {
    generateTeamHtml
  };