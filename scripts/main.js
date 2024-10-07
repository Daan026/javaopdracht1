// console.log(departments);
// // opdacht 1A
// console.log("De afdeling Sales heeft ", departments.sales.numberOfEmployees, " medewerkers");
// // opdacht 1B
// console.log("Marketing is een leuke afdeling om te werken.", departments.marketing.description);
// // opdacht 1C
// console.log("De afdeling Customer Service heeft", departments["customer-service"].numberOfEmployees, "medewerkers");
// // opdacht 1D
// console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager.", departments.sales.jobs[1].description);

// // opdracht 2a
// const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
// console.log(userInput);

// opdracht 2B
// if (userInput.toLowerCase() === "marketing") {
//     console.log("Je koos " + userInput + ": " + departments.marketing.description);
//
//     [afdeling-naam] is een leuke afdeling om te werken. Er werken op dit moment [aantal] medewerkers.
//
// // opdracht 4A
// if (userInput.toLowerCase() === "marketing") {
//     console.log(userInput,"is een leuke afdeling om te werken. Er werken op dit moment",departments.marketing.numberOfEmployees,"medewerkers.");
//
//
// // opdracht 2B
// } else if (userInput.toLowerCase() === "sales") {
//     console.log("Je koos " + userInput + ": " + departments.sales.description);
// } else if (userInput.toLowerCase() === "customer-service") {
//     console.log("Je koos " + userInput + ": " + departments["customer-service"].description);
// } else {
//     console.error("Ongeldige keuze.");
// }

//opdracht 2C --  het werkt

//opdracht 3

// const userInput = prompt("Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0.Marketingmanager 1.Digital Marketing Specialist 2.Contentmarketeer 3.Branding Agent.");
//
// console.log("userInput", userInput);
//
// if (userInput === "0") {
//     console.log("Je koos " + departments.marketing.jobs[0].title + ".", "Een uitdagende rol!", departments.marketing.jobs[0].description);
// } else if (userInput === "1") {
//     console.log("Je koos " + departments.marketing.jobs[1].title + ".", "Een uitdagende rol!", departments.marketing.jobs[1].description);
// } else if (userInput === "2") {
//     console.log("Je koos " + departments.marketing.jobs[2].title + ".", "Een uitdagende rol!", departments.marketing.jobs[2].description);
// } else if (userInput === "3") {
//     console.log("Je koos " + departments.marketing.jobs[3].title + ".", "Een uitdagende rol!", departments.marketing.jobs[3].description);
// }

//Opdracht 4b: We gaan de prompt uit opdracht 3 omschrijven. In plaats van overal hardcoded de afdeling 'marketing' te gebruiken, zorg je dat de prompt de informatie toont op basis van ingevoerde afdeling door de gebruiker:
//
// Je koos [afdeling]. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in. [0: [functietitel afdeling x], 1: [functietitel afdeling x], 2: [functietitel afdeling x], 3: [functietitel afdeling x]

let userInput = prompt("Kies de afdeling die je wilt hebben.\n0.Marketing\n1.sales\n2.Customer-service");

console.log("userInput", userInput);

switch (userInput) {
    case "0":console.log(departments.marketing,  "Kies 3.Marketingmanager\n4.Digital Marketing Specialist\n5.Contentmarketeer\n6.Branding Agent\n7.Marktonderzoeksanalist");
        break;
    case "3": console.log(departments.marketing.jobs[0]);
        break;
    case "4": console.log(departments.marketing.jobs[1]);
        break;
    case "5": console.log(departments.marketing.jobs[2]);
        break;
    case "6": console.log(departments.marketing.jobs[3]);
        break;
    case "7": console.log(departments.marketing.jobs[4]);
        break;
    case "1" : console.log(departments.sales, "Kies 8.Sales \n9.Representative\n10.Verkoopmanager\n11.Accountmanager\n12.Business Development Manager");
        break;
    case "8": console.log(departments.sales.jobs[0]);
        break;
    case "9": console.log(departments.sales.jobs[1]);
        break;
    case "10": console.log(departments.sales.jobs[2]);
        break;
    case "11": console.log(departments.sales.jobs[3]);
        break;
    case "12": console.log(departments.sales.jobs[4]);
        break;

    case "2" : console.log(departments["customer-service"], "Kies 13.Klantenservicemedewerker\n14.Klantenondersteuningsspecialist\n15.Client Success Manager\n 16.Customer Experience Manager");
        break;
    case "13" : console.log(departments["customer-service"].jobs[0]);
        break;
    case "14" : console.log(departments["customer-service"].jobs[1]);
        break;
    case "15" : console.log(departments["customer-service"].jobs[2]);
        break;
    case "16" : console.log(departments["customer-service"].jobs[3]);

    default: console.log("Er is geen geldige invoer.")
}
