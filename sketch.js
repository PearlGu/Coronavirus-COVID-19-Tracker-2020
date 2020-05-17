//Decalring the Different Variable and Objects
let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let table = document.getElementById('countries_stat')



// Fetching the Data from the server
//Fetching the World Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
    {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "99727440e2msh1e4759efd75bae1p151a03jsn5caeb2b72792"
    }
    })
.then(response => response.json().then( data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;
    new_deaths_con.innerHTML = data.new_deaths;
    new_cases_con.innerHTML = data.new_cases;
    active_cases_con.innerHTML = data.active_cases;
    recovered_per_country.innerHTML = data.total_recovered;

}))

.catch(err => {
    console.log(err);
});


//Fetching The Case by Country Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
    {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "99727440e2msh1e4759efd75bae1p151a03jsn5caeb2b72792"
    }
})
.then(response => response.json().then(data =>{
    console.log(data)
    let countries_stat = data.countries_stat;
//Getting all the country statistic using a loop
    for(let i = 0; i<countries_stat.length;i++){
        console.log(countries_stat[i]);
        //we will start by inserting the new rows inside our table
        let row = table.insertRow(i+1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let deaths = row.insertCell(2);
        let serious_critical = row.insertCell(3);
        let new_deaths_con = row.insertCell(4);
        let new_cases_con = row.insertCell(5);
        let active_cases_con = row.insertCell(6);
        let recovered_per_country = row.insertCell(7);
    
        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        deaths.innerHTML = countries_stat[i].deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        new_deaths_con.innerHTML=countries_stat[i].new_deaths;
        new_cases_con.innerHTML= countries_stat[i].new_cases;
        active_cases_con.innerHTML=countries_stat[i].active_cases;
        recovered_per_country.innerHTML = countries_stat[i].total_recovered;

    }
}))


.catch(err => {
    console.log(err);
});

var d = new Date();
var n = d.toUTCString();
document.getElementById("demo").innerHTML = n;