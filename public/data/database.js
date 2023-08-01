export default [
  {
    question: "Why are databased called self-describing?",
    answer: "Because it stores a description of itself called metadata.",
  },
  {
    question: "What is metadata?",
    answer: "Data about data.",
  },
  {
    question: "What are the two categories of databases?",
    answer: "Relational and non-relational.",
  },
  {
    question: "What are the components of a database system?",
    answer:
      "Users \n -	Database application \n -	Database management system (DBMS) \n -	Database \n ",
  },
  {
    question: "What is SQL?",
    answer:
      "Structured query language (SQL) is an internationally recognized standard language used by all relational databases.",
  },
  {
    question: "What is a Database Management System (DBMS)?",
    answer:
      "A computer program used to create, process and administer a database.",
  },
  {
    question: "What is a database application?",
    answer:
      "A set of one or more computer programs that serves as an intermediary between the user and the DBMS.",
  },
  {
    question: "What are applications?",
    answer: "Applications are the computer programs that users work with.",
  },
  {
    question: "List two examples of database applications.",
    answer:
      "Customer Relationship Management (CRM) systems manage all customer contacts, and Enterprise Resource Planning (ERP) systems can include all departments within an organization.",
  },

  {
    question: "What do data mining database applications do?",
    answer:
      "-	Do not generate new data\n -	Summarize existing data to provide insights\n -	Used for predicting future performance\n ",
  },
  {
    question: "What are the basic functions of application programs?",
    answer:
      "-	Create and process forms.\n-	Process user queries.\n-	Create and process reports.\n-	Execute application logic.\n-	Control the application itself.\n",
  },
  {
    question: "What is Microsoft Access and what is some of its features?",
    answer:
      "-	MS Access is a low-end product intended for individual users and small workgroups.\n-	MS Access tried to hide much of the underlying database technology from the user.\no	This is a good strategy for beginners, but not for database professionals.\n",
  },
  {
    question: "What DBMS does Windows have?",
    answer:
      "-	Microsoft Access 2023\n -	Microsoft SQL Server 2014\n -	Oracle Database\n -	MySQL 5.6",
  },
  {
    question: "What DBMS does Apple have?",
    answer: "MySQL 5.6",
  },
  {
    question: "What are the three types of database design?",
    answer:
      "-	From existing data\n-	New systems development\n-	Database redesign\n",
  },
  {
    question:
      "What are three components of database design from existing data?",
    answer:
      "-	Analyze spreadsheets and other data tables\n-	Extract data from other databases\n-	Design using normalization principles\n",
  },
  {
    question:
      "What are two components of database design from new systems development?",
    answer:
      "-	Create data model from application requirements.\n -	Transform data model into database design.\n",
  },
  {
    question: "What are three components of database redesign?",
    answer:
      "-	Migrate databases to newer databases\n-	Integrate two or more databases\n-	Reverse-engineer and design new databases using normalization principles and data model transformation\n",
  },
];

export const week2 = [
  {
    question: "List the characteristics of relations.",
    answer:
      "-	Rows contain data about an entity.\n-	Columns contain data about attributes of the entities.\n-	All entries in a column are of the same kind.\n-	Each column has a unique name.\n-	Cells of the table hold a single value.\n-	The order of the columns in unimportant.\n-	The order of the rows in unimportant.\n-	No two rows may be identical.\n ",
  },
  {
    question: "What is a key?",
    answer:
      "A key is a combination of one or more columns that is used to identify particular rows in a relation.",
  },
  {
    question: "What is a composite key?",
    answer:
      "A composite key is a key that consists of two or more columns and is used for a primary key.",
  },
  {
    question: "What is a candidate key?",
    answer:
      "A candidate key is a key that determines all the other columns in a relation.",
  },
  {
    question: "What is a primary key?",
    answer:
      ": A primary key is a combination of one or more column values in a table that make a row of data (record) unique within a database table.\nPrimary keys do not allow duplicates, and null values.",
  },
  {
    question: "What is a surrogate key?",
    answer:
      "A surrogate key is an artificial column added to a relation to serve as a primary key.\nEx. Student [student_id]\n",
  },
  {
    question: "What is a foreign key?",
    answer:
      "A foreign key is the key from a referenced table. It provides a link between two tables.",
  },
  {
    question: "What is an identifier?",
    answer:
      "Attribute that distinguishes an entity instance from every other instance of the same entity in the database.",
  },
  {
    question: "What is an attribute?",
    answer: "An attribute describes an entity’s characterics.",
  },
  {
    question: "What is cardinality?",
    answer: "Cardinality means “count”, and is expressed as a number.",
  },
  {
    question: "What is maximum cardinality?",
    answer:
      "Maximum cardinality is the maximum number of relationship instances in which an entity can participate.",
  },
  {
    question: "What is minimum cardinality?",
    answer:
      "Minimum cardinality is minimum number of relationship instances in which an entity must participate.",
  },
  ,
  {
    question: "What is a parent entity (one-to-many relationship)?",
    answer: "The parent is the one side of the relationship.",
  },
  ,
  {
    question: "What is a child entity (one-to-many-relationship)?",
    answer:
      "The entity on the many side of the relationship is called the child entity.",
  },
  ,
  {
    question: "What are the three types of maximum cardinality?",
    answer: "-	One-to-One [1:1]\n-	One-to-Many [1:N]\n-	Many-to-Many [N:M]\n",
  },
];

export const week3 = [
  {
    question: "What is a data model?",
    answer: "A data model is a plan or blueprint for a database design.",
  },
  {
    question: "What are the three designs stages of data models?",
    answer: "-	Conceptual design\n-	Logical design\n-	Physical design\n",
  },
  {
    question: "What is the Entity-Relationship (E-R) Model?",
    answer:
      "The entity-relationship (E-R) model is a set of concepts and graphical symbols that can be used to create conceptual schemas.",
  },
  {
    question: "What is crows foot notation?",
    answer:
      ": Crows foot notation uses unique shapes and symbols to represent the elements in a database.",
  },
  {
    question: "What are strong and weak entities?",
    answer:
      "A strong entity is an entity that represents something that can exist on its own.\n(PERSON, AUTOMOBILE, BUILDING)\nA weak entity is an entity whose existence depends on the presence of another entity.\n(APARTMENT – depends on BUILDING)\n",
  },
];

export const week4 = [
  {
    question: "What are some common tasks in database design?",
    answer:
      "-	Requirement gathering such as business rules\n-	Normalization\n-	Diagramming\n",
  },
  {
    question: "What are business rules?",
    answer:
      "Business rules are a statement of policy and describes operations, what a process validates, but does not describe how a policy is enforced,  or conducted nor its implementation.",
  },
  {
    question: "What are the characteristics of business rules?",
    answer:
      "Declarative: A business rule is a statement of policy and describes wha\nprocess validates but does not describe how a policy is enfor\nor conducted or its implementation\nPrecise: A rule must have only one interpretation among all interes\npeople, and its meaning must be clear.\nAtomic: A rule is indivisible, yet sufficient\nConsistent: A business rule must be internally and externally consistent\nExpressible: A business rule must be able to be stated in natural langu\nwithout misinterpretation\nDistinct: Business rules are not redundant, but a business rule may re\nto other ru\n",
  },
  {
    question:
      "What is step 1 for transformation a data model into a database design?",
    answer:
      "-	Create a table for each entity.\no	Specify the primary key (consider surrogate keys).\no	Specify alternate keys.\n-	Specify properties for each column\no	Null status\no	Data type\no	Default value (if any)\no	Data constraints (if any)\n",
  },
  {
    question:
      "What is step 2 for transformation a data model into a database design?",
    answer:
      "\n-	Relationships between strong entities (1:1. 1:N, N:M)\n-	Identifying relationships with ID-dependant entites\n",
  },
  {
    question:
      "What is step 3 for transformation a data model into a database design?",
    answer: "Specify logic for enforcing minimum cardinality.",
  },
  {
    question: "What is null status?",
    answer:
      "Null status indicates whether or not the value of the column can be null.",
  },
  {
    question: "What is a default value?",
    answer: "The value supplied by the DBMS when a new row is created.",
  },
  {
    question: "What are data constraints?",
    answer: "Data constraints are limitations on data values.",
  },
  {
    question: "How do you create a one-to-many relationship?",
    answer:
      "Places the primary key of the many table into the one table. (Parent table key inside child table).",
  },
  {
    question: "How do you create a many-to-many relationship",
    answer:
      "There is no place for the foreign key in either table.\nYou must create an intersection table that stores both keys.\n",
  },
  {
    question: "What is a cascading update?",
    answer:
      "A cascading update occurs when change to the parent’s primary key is applied to the child’s foreign key. Surrogate keys never change and there is no need for cascading updates when using them.",
  },
  {
    question: "What is a cascading delete?",
    answer:
      "A cascading delete occurs when associated child rows are deleted along with the deletion of a parent row.",
  },
];

export const week5 = [
  {
    question: "What is normalization?",
    answer:
      "Database normalization is a process used to organize a database into tables and columns. The table should only be about a specific topic.",
  },
  {
    question: "What are the three reasons to normalize a database?",
    answer:
      "(1)	First is to minimize duplicate data\n(2)	Second is to minimize or avoid data modification issues\n(3)	Third is to simplify queries\n",
  },
  {
    question: "What are modification anomalies?",
    answer: "When one piece of data changes, other information must change.",
  },
  {
    question: "What are the three types of modification anomalies?",
    answer: "-	Insertion\n-	Update\n-	Deletion\n",
  },
  {
    question: "What is a functional dependency?",
    answer:
      "A functional dependency occurs when the value of one set of attributes determines the value of a second set of attributes.\nEx. CookieCost = NumberOfBoxes * $5\n",
  },
  {
    question: "What is a composite functional dependency?",
    answer: "When a functional dependency consists of more than one attribute.",
  },
  {
    question: "What are the rules in normalization?",
    answer:
      "-	Read the business rules carefully.\n-	Work on only one step at a time.\n-	Starting by clearing drawing a logical ER diagram from rules provided.\n-	Do not add any data.\n-	Do not remove any data.\n-	Do no add any attributes.\n-	Do not eliminate any attributes.\n-	The process should be reversible. It should be possible for data in 3NF to be brought back to 1NF.\n",
  },
  {
    question: "What is the first normal form (1NF)?",
    answer:
      "-	The column stores atomic values, and there are no repeating groups of columns.\n -	Meets the set of conditions for a relation\n-	Has a defined primary key\n",
  },
  {
    question: "What is the second normal form (2NF)?",
    answer:
      "A relation is in 2NF if and only if it is in 1NF and all non-key attributes are determined by the entire primary key. Partial dependency.",
  },
];

export const week10 = [
  {
    question: "What are the six parts of the SELECT statement?",
    answer:
      "SELECT (return value selection) \nFROM (source selection, usually tables) \nWHERE(Conditional Boolean operations, a.k.a. predicates) \n GROUP (Optional, used with aggregate functions) BY\n HAVING (Optional, used with aggregate functions) \n ORDER BY (Optional, sorts results)",
  },
  {
    question: "What is the field list? (two options)",
    answer:
      "* (the asterisk) - which means to include all available columns \n, (the comma) - defined field list seperated by commans \n SELECT* N SELECT id, name",
  },
  {
    question: "How can you eliminate duplicates in a select statement?",
    answer:
      "DISTINCT keyword. \nSELECT DISTINCT Buyer, Department \nFROM SKU_DATA;",
  },
  {
    question: "How can you control the amount of rows selected?",
    answer: "TOP function. \nSELECT TOP 5 Buyter, Department NFROM SKU_DATA;",
  },
  {
    question: "How can you select the top percent?",
    answer:
      "Percent function. \nSELECT TOP 75 PERCENT Buyter, Department NFROM SKU_DATA;",
  },
  {
    question: "How do you use where with multiple sets of values?",
    answer:
      "WHERE IN function. \n SELECT * NFROM SKU_DATA \nWHERE Buyer IN ('nancy Meyers', 'Cindy Lo', 'Jerry Martin');",
  },
  {
    question: "What are two ways to find a value within a range?",
    answer:
      "WHERE AND function or BETWEEN function. \nSELECT * \nFROM ORDER_ITEM NWHERE ExtendedPrice >= 100\nAND ExtendedPrice <= 200\nORDER BY ExtendedPrice; \nor \nSELECT *\nFROM ORDER_ITEM\nWHERE ExtendedPrice BETWEEN 100 AND 200\nORDER BY ExtendedPrice;",
  },
  {
    question: "What is the negate operator?",
    answer:
      "NOT - This modifies special operators to negate. \n id not in (1,2,4,5,6)",
  },
  {
    question: "How to find a value between 2 values?",
    answer:
      "BETWEEN - This is an inclusive check between 2 values. \nid between 1 and 4",
  },
  {
    question: "How to find a value within a list?",
    answer:
      "IN - indicates the inclusion of an item in a list \nid in (1,2,4,5,6) ",
  },
  {
    question: "What does the underscore (_) wildcard character do?",
    answer: "Represents a single unspecified character in the string.",
  },
  {
    question: "What doesa the percent sign (%) wildcard character do?",
    answer:
      "Selected any sequence of unspecified characters (including spaces).",
  },
];
