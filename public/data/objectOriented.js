export const week1 = [
  { question: "Nothing to add", answer: "lol", question: "lol", answer: "lol" },
];

export const week2 = [
  {
    question: "What are three benefits of object oriented programming?",
    answer:
      "- Easy code reuse\n- Extension (inheritance)\n- Encapsulation and information hiding",
  },
  {
    question: "What is abstraction?",
    answer:
      "Process of hiding some details from the user and showing just the essential information",
  },
  {
    question: "What is encapsulation?",
    answer:
      "The process of binding together the data (variables) and code that acts on the data (methods) as a single unit. \n➢ Variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class.",
  },
  {
    question: "What is inheritance?",
    answer:
      "the process of class acquiring the properties (methods and fields) of another. \n➢ The inheriting class is referred to as a child class or subclass, whereas the class providing the properties to be inherited is referred to as the parent class (superclass)",
  },
  {
    question: "What is polymorphism?",
    answer:
      " Poly – many, morphism – forms\n➢ Ability for a data or message to be processed in morethan one form",
  },
  {
    question: "What is inheritance in objects?",
    answer:
      "❖A new class of objects can be created conveniently by inheritance \n❖The new class is called the subclass and starts with the characteristics of an existing class called the superclass \n❖Subclass can customize the characteristics of the superclass and add unique characteristics of its own\n❖Therefore, the automobile example: ❖ An object of class “convertible” certainly is an object of the more general class “automobile,” \n❖But, more specifically, the roof can be raised or lowered",
  },
  {
    question: "What is polymorphism in objects?",
    answer:
      "❖The capability of a method to do different things based on the object that it is acting upon. \n❖Feature that allows us to perform an action in different ways.\n❖As a generic class, we cannot give Food a specific implementation of taste(). \n❖ Instead we gave a generic message \n❖ Assuming we have one subclass of the Food class, named Peppers that extends the Food class. \n❖Then, we can implement the same method in the following way:\npublic class Peppers extends Food{\n...\n@override\npublic void taste(){\nSystem.out.println(“Spicy”);\n}\n}",
  },
  {
    question: "What are interfaces in objects?",
    answer:
      "❖ Interfaces are collections of related methods thattypically enable you to tell objects what to do, but nothow to do it.\n❖ Automobile example: a “basic-driving-capabilities”interface consisting of a steering wheel, an acceleratorpedal and a brake pedal would enable a driver to tell thecar what to do.\n❖ Knowing how to use this interface for turning,accelerating and braking, you can drive many types ofcars, even though manufacturers may implement thesesystems differently.",
  },
  {
    question: "Can java run on all computers?",
    answer:
      "Using Java, you can write programs that will run on a great variety of computer systems and computer- controlled devices. This is sometimes called “write once, run anywhere.",
  },
  {
    question: "What type of compiler does java use?",
    answer:
      "JVMs typically execute bytecodes using a combination of interpretation and so-called just- in-time (JIT) compilation \n➢Analyzes the bytecodes as they are interpreted \n➢A just-in-time (JIT) compiler, such as Oracle’s \nJava HotSpot™ compiler that translates the bytecodes into the underlying computer’s machine language ",
  },
];

export const week3 = [
  {
    question: "What are access modifiers?",
    answer:
      "❖ Most instance-variable declarations are preceded with the keyword private, which is an access modifier. \n❖ Variables or methods declared with access modifier private are accessible only to methods of the class in which they’re declared.",
  },
  {
    question: "What are the three components of UML class diagrams?",
    answer:
      "Each class is modeled as a rectangle with three compartments: \n➢Top compartment contains the class’s name centered horizontally in boldface. \n➢ Middle compartment contains the class’s attributes, which correspond to instance variables in Java. \n➢ Bottom compartment contains the class’s operations, corresponding to methods and constructors in Java. ",
  },
  {
    question: "What is constructor chaining?",
    answer:
      "❖ Chaining is applied to overloaded constructors. \n❖ Occurs when a call to a constructor is made from inside another constructor in the same class. \n❖ For performing different tasks using a single constructor (no need to do so for each task)",
  },
  {
    question: "What are five rules of constructor chaining?",
    answer:
      "❖ We use this() expression \n❖ this() has to be the first line of the constructor \n❖ More than one constructor exists in the class \n❖ There must be at least one constructor without the this expression \n❖ Chaining can be realized in any given order. ",
  },
];

export const week4 = [
  {
    question:
      "Does each object of a class maintain it's own copy of instance variables?",
    answer:
      "Each object of a class maintains its own copy of every instance variable of the class.",
  },
  {
    question:
      "Does each object of a class maintain it's own copy of instance variables?",
    answer:
      "When objects of a class containing static variables are created, all the objects of that class share one copy of those variables.",
  },
  {
    question: "Why is the main method declared static?",
    answer:
      "➢ The JVM attempts to invoke the main method of the class you specify: at this point no objects of the class have been created. \n➢ Declaring main as static allows the JVM to invoke main without creating an instance of the class. ",
  },
  {
    question:
      "Can a static method access a class's instance variables and instance methods?",
    answer:
      "A static method cannot access a class’s instance variables and instance methods, because a static method can be called even when no objects of the class have been instantiated.\nFor the same reason, the this reference cannot be used in a static method.",
  },
  {
    question: "What happens if a static variable is not initialized?",
    answer:
      "If a static variable is not initialized, the compiler assigns it a default value (in this case 0), the default value for type int.",
  },
  {
    question:
      "What are some compilation errors that occur with static methods?",
    answer:
      "➢A static method calls an instance method in the same class by using only the method name. \n➢A static method attempts to access an instance variable in the same class by using only the variable name.",
  },
  {
    question: "What is the privilege of least priviledge?",
    answer:
      "➢ Code should be granted only the amount of privilege and access that it needs to accomplish its designated task, but no more. \n➢ Makes your programs more robust by preventing code from accidentally (or maliciously) modifying variable values and calling methods that should not be accessible.",
  },
];

export const week5 = [
  {
    question: "Do you have to specify instance variables in subclasses?",
    answer:
      "❖ Subclass objects automatically have the instance variables that are declared in the superclass. \n❖ You only declare instance variables that are not already part of the superclass objects.",
  },
  {
    question: "Do subclasses inherit all methods from the parent class?",
    answer: "A subclass inherits all methods that it does not override.",
  },
  {
    question: "Are constructors inherited by subclasses?",
    answer:
      "Constructors are not members, so they are not inherited by subclasses, but the constructor of the superclass can be invoked from the subclass.",
  },
  {
    question: "What is the super keyword used for?",
    answer:
      "❖ Differentiate the members of superclass from the members of subclass, if they have same names. \n❖ It is used to invoke the superclass constructor from the subclass. ❖ The keyword super is used to call the constructor of the superclass. Calling a superclass constructor from inside a subclass will cause an error (syntax). \n❖ The statement that uses the keyword super will be the first statement in the constructor. ",
  },
];

export const week6 = [
  {
    question: "What is association?",
    answer:
      "A general relationship that describes an activity between two classes.",
  },
  {
    question: "What is an aggregation relationship?",
    answer:
      "A relationship where an object owns a collection of other identical objects.\n➢ Professor has many Students \n➢ Hotel has many Suites \n➢ Truck has many Wheels \n➢ Thermometer has many Degrees \nOne-way relationship, reverse not possible.",
  },
  {
    question: "What is a composition relationship?",
    answer:
      "Relationship where a class contains other classes (dependent on each other) \n❖ Known as Has-a relationship (part-of) \n➢ Room has-a door \n➢ Policeman has-a uniform \n➢ Car has-a wheel",
  },
  {
    question: "Does composition have strong or weak association?",
    answer:
      "Strong association - child cannot exist seperated from the parent.",
  },
  {
    question: "Does aggregation have strong or weak association?",
    answer: "Weak association - child can exist seperated from the parent.",
  },
  {
    question: "What is abstraction?",
    answer:
      "Abstraction implies hiding complexity and only displaying the relevant features of an object. The implementation details are hidden while the user only sees the functionality.",
  },
  {
    question: "Can an abstract class be instantiated into an object?",
    answer:
      "An abstract class cannot be instantiated into an object – its’s just a template and needs to be first extended to a concrete class.",
  },
  {
    question: "Can methods be made abstract?",
    answer: "Methods can be made abstract.",
  },
  {
    question: "Do classes need to be abstract if the method is abstract?",
    answer: "If any method is abstract, the class must be abstract.",
  },
  {
    question: "Does an abstract class need to contain abstract methods?",
    answer: "An abstract class may contain no abstract methods.",
  },
  {
    question:
      "Does a subclass need to implmenet all the abstract methods of the superclass?",
    answer:
      "A subclass does not need to implement all the abstract methods of the superclass if the subclass is abstract.",
  },
  {
    question: "Do abstract methods have a body?",
    answer:
      "Abstract methods do not have a body. There are no curly braces { } after the method header and parameter list.",
  },
  {
    question: "What are concrete classes?",
    answer:
      "Classes that can be used to instantiate objects are called concrete classes.",
  },
  {
    question: "Can constructors and static methods be declared abstract?",
    answer: "No, constructors and static methods cannot be declared abstract.",
  },
];
