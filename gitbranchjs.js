


/* Script to practise using console in JavaScript */

/* In this script I will go over hoisting examples using JavaScript. */

	/*Hoisting is the practise of declaring variables at the at the beginning of a scope.

	The benefits of doing this is so the scope of the script becomes easier to understand for code reviewing.
	*/

    var a; //variable a is declared
    var b; //variable b is declared



    a = "A is hoisted"				//variables are initialised
    b = "B is hoisted"




    console.log('In this example var a + b will appear as normal as they have been declared and initialised in the hoisted methodology. ');

    document.write (a);

document.write("<br>"); //Break line for text to add space.s 

    document.write (b);

document.write("<br>");

    document.write ("View console to view additional comments");

document.write("<br>");



    document.write ("The example below will return the following variables as undefined.");

document.write("<br>");

    document.write(p); //writes variable p in browser, appears undefined as hasn't been hoisted.

document.write("<br>");

    document.write(q); //writes variable q in browser, appears undefined as hasn't been hoisted.

document.write("<br>");

    

    p = 'should of initialised after declaring'; 				
    q = 'should of initialised after declaring'; 					/* Initialised variables for p and q		*/

    var p;
    var q;

    document.write(p + "..." + "This is what the variable p should have displayed if it was hoisted."); /*Displays variable but not as undefined. */

document.write("<br>");

        document.write(q + "..." + "This is what the variable q should have displayed if it was hoisted."); /* Displays variable but not as undefined */




