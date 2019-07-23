//refactoring into an object


$(document).ready(function() {
    console.log("The DOM is loaded!");


    let totalPoints = 0;
    // let totalClicks = 0;

    $('.question-one').on('click', function() {
        let actionOne = prompt("What is real life name of the actress who played 2017's Wonder Woman?")
        if (actionOne === "Gal Gadot" || actionOne === "gal gadot") {
            alert("Correct, +100")
            totalPoints += 100;
        } else {
            alert("Sorry, wrong answer -100")
            totalPoints -= 100;
        }
        $(".pointcounter").html(totalPoints);
        $(".question-one").addClass("highlight");

    })

    $('.question-two').on('click', function() {
        let comedyOne = prompt("Name the movie who's plot consists of Vince Vaughn and Owen Wilson crashing several weddings")
        if (comedyOne === "Wedding Crashers" || comedyOne === "wedding crashers") {
            alert("Correct, +100")
            totalPoints += 100;
        } else {
            alert("Sorry, wrong answer -100")
            totalPoints -= 100;
        }
        $(".pointcounter").html(totalPoints);
        $(".question-two").replaceWith(".highlight");
    })

    $('.question-three').on('click', function() {
        let disneyOne = prompt("What year did Snow White and the seven Dwarfs premier?")
        if (disneyOne === "1937") {
            alert("Correct, +100")
            totalPoints += 100;
        } else {
            alert("Sorry, wrong answer -100")
            totalPoints -= 100;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-three").replaceWith(".highlight");

    })
    $('.question-four').on('click', function() {
        let snlOne = prompt("Who was the original host of SNL?")
        if (snlOne === "George Carlin" || snlOne === "george carlin") {
            alert("Correct, +100")
            totalPoints += 100;
        } else {
            alert("Sorry, wrong answer -100")
            totalPoints -= 100;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-four").replaceWith(".highlight");
    })
    $('.question-five').on('click', function() {
        let senOne = prompt("What year did Seinfeld air?")
        if (senOne === "1989" || senOne === "dress") {
            alert("Correct, +100")
            totalPoints += 100;
        } else {
            alert("Sorry, wrong answer -100")
            totalPoints -= 100;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-five").replaceWith(".highlight");

    })

    $('.question-six').on('click', function() {
        let entOne = prompt("What is the actual name of the actor who plays Ari Gold?")
        if (entOne === "Jeremy Piven" || entOne === "jeremy piven") {
            alert("Correct, +100")
            totalPoints += 100;
        } else {
            alert("Sorry, wrong answer -100")
            totalPoints -= 100;
        }
        $(".pointcounter").html(totalPoints);
        $(".question-six").replaceWith(".highlight");
    })
    $('.question-seven').on('click', function() {
        let actionTwo = prompt("Name the city that the movie Baby Driver was filmed in? Hint: Do not include the state")
        if (actionTwo === "Atlanta" || actionTwo === "atlanta") {
            alert("Correct, +200")
            totalPoints += 200;
        } else {
            alert("Sorry, wrong answer -200")
            totalPoints -= 200;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-seven").replaceWith(".highlight");

    })
    $('.question-eight').on('click', function() {
        let comedyTwo = prompt("What year did Dumb and Dumber release?")
        if (comedyTwo === "1994") {
            alert("Correct, +200")
            totalPoints += 200;
        } else {
            alert("Sorry, wrong answer -200")
            totalPoints -= 200;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-eight").replaceWith(".highlight");

    })
    $('.question-nine').on('click', function() {
        let disneyTwo = prompt("In Aladin, what is the name Jasmine's pet tiger?")
        if (disneyTwo === "rajah" || disneyTwo === "Rajah") {
            alert("Correct, +200")
            totalPoints += 200;
        } else {
            alert("Sorry, wrong answer -200")
            totalPoints -= 200;
        }
        $(".pointcounter").html(totalPoints);
        $(".question-nine").replaceWith(".highlight");

    })
    $('.question-ten').on('click', function() {
        let snlTwo = prompt("Who is the only cast member to be fired twice from SNL?")
        if (snlTwo === "Chris Parnell" || snlTwo === "chris parnell") {
            alert("Correct, +200")
            totalPoints += 200;
        } else {
            alert("Sorry, wrong answer -200")
            totalPoints -= 200;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-ten").replaceWith(".highlight");

    })
    $('.question-eleven').on('click', function() {
        let senTwo = prompt("What year did Seinfeld end?")
        if (senTwo === "1998") {
            alert("Correct, +200")
            totalPoints += 200;
        } else {
            alert("Sorry, wrong answer -200")
            totalPoints -= 200;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-eleven").replaceWith(".highlight");


    })
    $('.question-twelve').on('click', function() {
        let entTwo = prompt("In what year did the series end?")
        if (entTwo === "2011") {
            alert("Correct, +200")
            totalPoints += 200;
        } else {
            alert("Sorry, wrong answer -200")
            totalPoints -= 200;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twelve").replaceWith(".highlight");

    })

    $('.question-thirteen').on('click', function() {
        let actionThree = prompt("This well-know Atlanta coffee establishment was often featured in the movie Baby Driver")
        if (actionThree === "Octane Coffee" || actionThree === "octane coffee") {
            alert("Correct, 300")
            totalPoints += 300;
        } else {
            alert("Sorry, wrong answer -300")
            totalPoints -= 300;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-thirteen").replaceWith(".highlight");

    })
    $('.question-fourteen').on('click', function() {
        let comedyThree = prompt("What year did Coming to America release?")
        if (comedyThree === "1988") {
            alert("Correct, +200")
            totalPoints += 300;
        } else {
            alert("Sorry, wrong answer -300")
            totalPoints -= 300;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-fourteen").replaceWith(".highlight");

    })
    $('.question-fifteen').on('click', function() {
        let disneyThree = prompt("In Lion King, where does Mufasa and his family live?")
        if (disneyThree === "Pride Rock" || disneyThree === "pride rock") {
            alert("Correct, +300")
            totalPoints += 300;
        } else {
            alert("Sorry, wrong answer -300")
            totalPoints -= 300;
        }
        $(".pointcounter").html(totalPoints);
        $(".question-fifteen").replaceWith(".highlight");

    })
    $('.question-sixteen').on('click', function() {
        let snlThree = prompt("This Friends cast member was the only one to never host SNL?")
        if (snlThree === "Matt LeBlanc" || snlThree === "matt leblanc") {
            alert("Correct, +300")
            totalPoints += 300;
        } else {
            alert("Sorry, wrong answer -300")
            totalPoints -= 300;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-sixteen").replaceWith(".highlight");

    })
    $('.question-seventeen').on('click', function() {
        let senThree = prompt("What is the name of Bizarro Newman?")
        if (senThree === "" || senThree === "vargas") {
            alert("Correct, +300")
            totalPoints += 300;
        } else {
            alert("Sorry, wrong answer -300")
            totalPoints -= 300;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-seventeen").replaceWith(".highlight");


    })
    $('.question-eighteen').on('click', function() {
        let entThree = prompt("How many seasons did the series run for? Hint: Answer with a number")
        if (entThree === "8") {
            alert("Correct, +300")
            totalPoints += 300;
        } else {
            alert("Sorry, wrong answer -300")
            totalPoints -= 300;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-eighteen").replaceWith(".highlight");

    })

    $('.question-ninteen').on('click', function() {
        let actionFour = prompt("Name currently highest grossing Marvel film of 2018")
        if (actionFour === "Black Panther" || actionFour === "black panther") {
            alert("Correct, +400")
            totalPoints += 400;
        } else {
            alert("Sorry, wrong answer -400")
            totalPoints -= 400;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-ninteen").replaceWith(".highlight");

    })
    $('.question-twenty').on('click', function() {
        let comedyFour = prompt("What year did The Nutty Professor release?")
        if (comedyFour === "1996") {
            alert("Correct, +400")
            totalPoints += 400;
        } else {
            alert("Sorry, wrong answer -400")
            totalPoints -= 400;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twenty").replaceWith(".highlight");

    })
    $('.question-twentyone').on('click', function() {
        let disneyFour = prompt("In Beauty and the Beast, how many eggs does Gaston eat for breakfast? Hint: the answer starts with a number and then a word")
        if (disneyFour === "5 dozen" || disneyFour === "5 Dozen") {
            alert("Correct, +400")
            totalPoints += 400;
        } else {
            alert("Sorry, wrong answer -400")
            totalPoints -= 400;
        }
        $(".pointcounter").html(totalPoints);
        $(".question-twentyone").replaceWith(".highlight");

    })
    $('.question-twentytwo').on('click', function() {
        let snlFour = prompt("Who currently holds the record for hosting the most number of shows?")
        if (snlFour === "Alec Baldwin" || snlFour === "alec baldwin") {
            alert("Correct, +400")
            totalPoints += 400;
        } else {
            alert("Sorry, wrong answer -400")
            totalPoints -= 400;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twentytwo").replaceWith(".highlight");

    })
    $('.question-twentythree').on('click', function() {
        let senFour = prompt("What is Kramer's mom name?")
        if (senFour === "Babs" || senFour === "babs") {
            alert("Correct, +400")
            totalPoints += 400;
        } else {
            alert("Sorry, wrong answer -400")
            totalPoints -= 400;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twentythree").replaceWith(".highlight");


    })
    $('.question-twentyfour').on('click', function() {
        let entFour = prompt("True or false: Entourage was based on the relationship between Mark Wahlberg and his agent?")
        if (entFour === "True" || entFour === "true") {
            alert("Correct, +400")
            totalPoints += 400;
        } else {
            alert("Sorry, wrong answer -400")
            totalPoints -= 400;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twentyfour").replaceWith(".highlight");

    })

    $('.question-twentyfive').on('click', function() {
        let actionFive = prompt("What is the actual name of the actor who plays Thor?")
        if (actionFive === "Chris Hemsworth" || actionFive === "chris hemsworth") {
            alert("Correct, +500")
            totalPoints += 500;
        } else {
            alert("Sorry, wrong answer -500")
            totalPoints -= 500;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twentyfive").replaceWith(".highlight");

    })
    $('.question-twentysix').on('click', function() {
        let comedyFive = prompt("What is Professor Sherman's last name from the Nutty Professor?")
        if (comedyFive === "Sherman" || comedyFive === "sherman") {
            alert("Correct, +500")
            totalPoints += 500;
        } else {
            alert("Sorry, wrong answer -500")
            totalPoints -= 500;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twentysix").replaceWith(".highlight");

    })
    $('.question-twentyseven').on('click', function() {
        let disneyFive = prompt("In Toy Story, what game does the slinky play?")
        if (disneyFive === "checkers" || disneyFive === "Checkers") {
            alert("Correct, +500")
            totalPoints += 500;
        } else {
            alert("Sorry, wrong answer -500")
            totalPoints -= 500;
        }
        $(".pointcounter").html(totalPoints);
        $(".question-twentyseven").replaceWith(".highlight");

    })
    $('.question-twentyeight').on('click', function() {
        let snlFive = prompt("Who is currently the longest running cast member?")
        if (snlFive === "Kenan Thompson" || snlFive === "kenan thompson") {
            alert("Correct, +500")
            totalPoints += 500;
        } else {
            alert("Sorry, wrong answer -500")
            totalPoints -= 500;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twentyeight").replaceWith(".highlight");

    })
    $('.question-twentynine').on('click', function() {
        let senFive = prompt("What was name of the unruly dog that Jerry got stuck watching??")
        if (senFive === "Farfel" || senFive === "farfel") {
            alert("Correct, +500")
            totalPoints += 500;
        } else {
            alert("Sorry, wrong answer -500")
            totalPoints -= 500;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-twentynine").replaceWith(".highlight");


    })
    $('.question-thirty').on('click', function() {
        let entFive = prompt("What year did the Entourage movie come out?")
        if (entFive === "2015") {
            alert("Correct, +500")
            totalPoints += 500;
        } else {
            alert("Sorry, wrong answer -500")
            totalPoints -= 500;
        }

        $(".pointcounter").html(totalPoints);
        $(".question-thirty").replaceWith(".highlight");

    })



})