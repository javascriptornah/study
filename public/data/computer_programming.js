export const week11 = [
  {
    question: "How do arrays occupy computer memory?",
    answer:
      "\nThe memory in the computer is organized as a sequence of 1-byte blocks of 8-bits each. We can represent this as a sequence of blocks. \nEach byte in the computer, has a unique memory address\n• We specify the data type for the array, and each element in the array will occupythe amount of bytes for the data type. E.g. In Java an int is a 32-bit numerictype, it occupies 4-bytes of memory.\n• Each element of an array of int type is 4-bytes of memory.\n• Each element of an array is placed immediately after the other in memory in acontiguous manner.",
  },
  {
    question: "Are arrays objects?",
    answer:
      "In Java every array is an object, a reference type\n• Even an array declared to store values of primitive type is still an object",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];

export const week12 = [
  {
    question: "What will each element in an array of primtive type be?",
    answer:
      "The array of char, a numerical primitive type will have each element set to zero",
  },
  {
    question: "What will each element be in an array of reference type?",
    answer:
      "The array of String, a reference type, will have each element set to null",
  },
  {
    question: "Does java send by value or by reference?",
    answer:
      "Java does not permit a programmer to choose By-Value or By-Reference\n• Java only uses By-Value\n• Primitive Types\n• The value of the variable is copied and passed or returned\n• Reference Types\n• The value of the variable is copied and passed or returned, here...\n• The value is a reference-value, not a copy of an object",
  },
];

export const week13 = [
  {
    question: "What is implementation hiding?",
    answer:
      "Implementation Hiding, in the context of method design, means hiding or\nencapsulating the details of how the method works.\n• When a program logic places a method call it should only need to know the\nmethod name, parameters, and the data to be returned (if there is any).\n• The textbook author [1] uses a restaurant reservation as an example. You call\nthe restaurant and provide your name, the date, and the time. How the\nrestaurant takes the reservation, paper log book, computer system, sticky\nnotes... (etc.) does not matter to you. If they are using sticky notes and upgrade\nto a computer system later, you would also not know and would not care",
  },
  {
    question: "What is method cohesion?",
    answer:
      "A well designed method has high cohesion, also referred to as functional\ncohesion.\n• Cohesion is a measure of how the internal statements of a method serve to\naccomplish the methods purpose. [1a]\n• A method with high cohesion, has all of its internal operations focused on performing one task or goal.\n• Methods with high cohesion are:\n• Easier to read, write and understand;\n• Easier to maintain;\n• And generally more reliable.",
  },
  {
    question: "Example of poor cohesion.",
    answer:
      "addNumbers(num left, num right)\n output 'enter left'\n input left\n output 'enter right'\n input right\n sum = left + right\n output 'sum is ' + sum\n return sum\n • The method performs more than one task or goal.\n • Input and output of the parameters????\n • A calculation (which is what most programmers would expect) \n• output of the result of the calculation????\n ",
  },
  {
    question: "Example of high cohesion.",
    answer:
      "These methods have high cohesion (declarations sections omitted for brevity).\naddNumbers(num left, num right)\nsum = left + right\nreturn sum\ninputValue(text prompt) // prompt could be “enter left” etc.\noutput prompt\ninput value\nreturn value\nprintValue(num value)\noutput value\nreturn\n• Each method only has statements that relate to one task",
  },
  {
    question: "What is method coupling?",
    answer:
      "Method coupling is used to discuss how much one or more methods are\nconnected, i.e. do they share enough information so that the methods become\ninterdependent on each other.",
  },
  {
    question: "What is tight coupling?",
    answer:
      "Tight Coupling: one or more methods have interdepencies on each other, e.g.\nthey need to be called in a certain order to work correctly. One method will\nmodify data in memory (like class level variables) that other methods depend on\nto execute correctly.\nMethods with tight coupling are hard to understand and very hard to maintain. \nTight Coupling: one or more methods have interdepencies on each other, e.g.\nthey need to be called in a certain order to work correctly. One method will\nmodify data in memory (like class level variables) that other methods depend on\nto execute correctly.\n• Your textbook author [1] introduces the concept of a global variable.\n• Global variable: a variable that is visible to every method in an entire program.\n• Global variables should be avoided, to help prevent tight coupling of methods.",
  },
  {
    question: "What is loose coupling?",
    answer:
      "Loose Coupling: one or more methods are not interdependent. E.g. they canbe called in any order, they do not share data in memory that affects how eachruns. Methods with loose coupling are easier to understand and maintain.",
  },
  {
    question: "What makes a good class?",
    answer:
      "A class should represent a single concept from a problem domain.”[2a]\n• E.g. Rectangle, Apple, Farmer, UserInput\n• Consider an actor category for classes, these actors perform some sort of task\nand are typically named with –er or –or at the end. [2a]\n• E.g. Class Scanner\n• Consider a utility class, these classes typically contain static methods that\nprovide a tool-kit of sorts to us.\n• E.g. Math\n• Consider a start-up class, it only contains method main and is used to start the\noverall program\n• E.g. RunProgram, RunDemo",
  },
  {
    question: "How do I recognize a bad class design?",
    answer:
      "If the name of the class does not tell you what it does, i.e. the class represents\nmore than one concept from the problem domain.\n• E.g. AppleFarmFarmer – what would an object of this class do? Is it an apple, a\nfarmer, the entire apple farm (etc.)? Break it into smaller classes. Apple, Farmer,\nFarmInventory.\n• Make sure that you are not creating a class where a method would make more\nsense. If the name of the class is not a noun, but a verb instead you are making\na mistake.\n• E.g. instead of a class named PrintAppleReport (verb), make a class named\nApple (a noun), with a method printReport() (a verb).",
  },
  {
    question: "How to minimize side effects of methods.",
    answer:
      "Side effect: a method call modifies the object-state or program-state by\nchanging a variable that is not local to the method.\n• An earlier slide set had printReceipt() that modified a price field as a side-effect.\n• [2e] also suggests that parameters of methods should not be modified either.\n• In the case of a reference type, your parameter is a reference to an\nobject referenced elsewhere in the program as well.\n• Making changes to the referenced object can case side effects.\n• Using System.out and Scanner(System.in) can also cause side effects.\nSystem.out.println() mutates System.out, Scanner mutates System.in.\n• Avoid using System.out and-or Scanner(System.in) in most of your classes,\ninstead using them in one place, like method main or a class dedicated to\nUserInput.",
  },
  {
    question: "Public vs private methods.",
    answer:
      "Methods in a class that have low cohesion, can be separated out into smaller\nmethods. E.g. Method printReceipt() could be separated out into a print() method\nand a calculateTax() methods. The latter method could be marked private.\n• Making worker methods private means we have control over the inner workings of\nthe class.\n• Public methods collectively are referred to as the class-interface and are called by\nexternal code to obtain services from the class, or object instance(s).\n• Private methods support inner workings of the class (and-or instances of the class),\nand are private to avoid side-effects that would occur if called by external code.\n• i.e. We mark fields private and expose them using public get/set methods to control\nhow field values are retrieved and changed by external code.\n• Public worker-methods provide services to code external to the class.\n• Private worker-methods provide services to code internal to the class.",
  },
];
