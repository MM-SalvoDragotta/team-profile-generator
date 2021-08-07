function generateTeamHtml(data) {
    return `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Cards</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../assets/css/style.css">
</head>

<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Members</span>
        </nav>
    </header>
    <div class="team-boxed">
        <div class="container">
            <div class="row people">
                ${generateCard(data)}
            </div>
        </div>
    </div>
    <footer class="bg-light py-5">      
    <div class="container px-4 px-lg-5">
      <div class="small text-center text-muted">Icons made by 
        <a href="https://www.freepik.com" title="Freepik">Freepik</a> from 
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </footer>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`
}

const generateCard = data => {

    const userData = employee => {
        if (employee.officeNumber) {
            return `Office Number: ${employee.officeNumber}`
        }
        if (employee.school) {
            return `School: ${employee.school}`
        }
        if (employee.github) {
            return `<div class="social">GitHub: <a href="https://github.com/${employee.github}" target="_blank"> <i class="fab fa-github"></i> </a></div>`
            // `<p> Github: <a href="https://github.com/${employee.github}" target="_blank"> ${employee.github} </a> </p>`
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
            ${data.map( teamMember => {
                return `
                <div class="col-md-6 col-lg-4 item">
                    <div class="box"> <img class="rounded" src=${userImg(teamMember)}> 
                        <h3 class="name">${teamMember.getName()}</h3>
                        <p class="title">${teamMember.getRole()}</p>
                        <p class="description">Id: ${teamMember.getId()} </p>
                        <p class="description">Email: <a href="mailto:${teamMember.getEmail()}"> ${teamMember.getEmail()} </a> </p>
                        <p class="description">${userData(teamMember)}</p>
                    </div> 
                </div>
        `
        }).join('')}            
    `
}

module.exports = {
    generateTeamHtml
  };