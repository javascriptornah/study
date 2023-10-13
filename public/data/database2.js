export const week1 = [
  {
    question: "Why are databases called self-describing?",
    answer:
      "They are called self-describing because they store a description about itself.",
  },
  {
    question: "Why are tables called integrated?",
    answer:
      "Tables are called integrated because they store data about the relationships bbetween rows of data.",
  },
  {
    question: "What are the three types of the database design process?",
    answer:
      "- From existing data\n- New systems development \n- Database redesign",
  },
  {
    question:
      "What are the three processes of database redesign from existing data?",
    answer:
      "- Analyze spreadsheets \n- Extract data from other databases \n- Design using normalization principles",
  },
  {
    question: "What are the two processes of new systems development",
    answer:
      "Create data model from application requirements\n- Transform data model into database design",
  },
  {
    question: "What are the three processes of database redesign?",
    answer:
      "- Migrate databases to newer databases\n- Integrat etwo or more dataases \n- Reverse-engineer and design new databse using normalization principles and data model transformation",
  },
];

export const week2 = [
  {
    question: "What is an interactive form in Microsoft Access?",
    answer:
      "Allows data input using text fields, radio uttons, combo-boxes \nCan contain buttons to invoke macros - run stored procedures (queries) or navigate to other forms",
  },
  {
    question: "What are Microsoft Access reports?",
    answer:
      "Display of information. \nUsed for grouping of data; e.g. Alphabetical directories of information, sorted data using a hierarchy of sort fields, etc.",
  },
];

export const week3 = [
  {
    question: "What are the six query types?",
    answer: "- Select\n- Make Table\n- Append\n- Update\n- Delete\n- Crosstab",
  },
  {
    question: "Nothing else",
    answer: "nothing",
  },
];

export const week4 = [
  {
    question: "What are the benefits of Microsoft SQL Server?",
    answer:
      "Major Features: \n• Built for client-server applications: secure connections over network to remote server \n• Has variety of adapters (e.g., ODBC (32 bit, 64 bit), JDBC, ETC.!) \n• Toolkits for Data warehousing, analysis, etc. \n• Scalability: \n• Large numbers of users, Petabyte-sized databases \n• Security: \n• Users, roles, encrypted connections \n• Concurrency: \n• Supports large number of concurrent users with an efficient locking strategy \n• Availability: \n• Has high-availability options for single-site installations or multi-site replication",
  },
  {
    question: "How do privileges work in SQL Server?",
    answer:
      "• System administrators of the database have very different sets of privileges \n• Control privilege assignment through “roles” \n• Assign privileges to role, then add users to the role through “membership",
  },
  {
    question: "What is ODBC?",
    answer:
      "• SQL Server has both 32 bit and 64 bit Open Database Connectivity adapters \n• Recall: ODBC is a Windows-level list of connectors (one list for 32 bit software packages and another list for 64 bit software packages) and is very similar to Java Data Base Connectivity (JDBC); connection-based sessions with username/passwords. \n• MANY databases support ODBC by supplying an ODBC adapter for use with Windows. \n• Using ODBC allows applications to access SQL Server through a “standardized” Application Programming Interface ",
  },
  {
    question: "Describe OBDC (Open Database Connectivity).",
    answer:
      "“In computing, Open Database Connectivity (ODBC) is a standard application programming interface (API) for accessing database management systems (DBMS). The designers of ODBC aimed to make it independent of database systems and operating systems.[citation needed] An application written using ODBC can be ported to other platforms, both on the client and server side, with few changes to the data access code. \nODBC accomplishes DBMS independence by using an ODBC driver as a translation layer between the application and the DBMS. The application uses ODBC functions through an ODBC driver manager with which it is linked, and the driver passes the query to the DBMS. An ODBC driver can be thought of as analogous to a printer driver or other driver, providing a standard set of functions for the application to use, and implementing DBMS-specific functionality. An application that can use ODBC is referred to as 'ODBC-compliant'. Any ODBC-compliant application can access any DBMS for which a driver is installed. Drivers exist for all major DBMSs, many other data sources like address book systems and Microsoft Excel, and even for text or comma-separated values (CSV) files.Install the ODBC driver for the back-end database",
  },
];

export const week5 = [
  {
    question: "What are the advantages of normalization?",
    answer:
      "• No duplicate data (or minimal duplicate data) will simplify & speed-up updates \n• We want to avoid mistakes: “ANOMALIES” that could happen if there were service interruptions in the middle of a transaction \n• Update, Delete, Insert \n• We will not have to guess which copy is the “Source of truth”? \n• Even when doing a “SELECT” we are trusting that all duplicates of a particular data field have been updated consistently \n• E.g., change a person’s lastname: If it is only stored in one place, then there is no possible inconsistency. If it has been stored in multiple locations, the updates are more complicated and require a transaction \n• (Atomic, Consistent, Isolated, Durable) ACID transactions.",
  },
  {
    question: "What are the disadvantages of normalization?",
    answer:
      "• No duplicate data (or minimal duplicate data) will mean that we need to have JOINS across tables to retrieve related data \n• This will be somewhat slower than if the data was already grouped \n• Data that was “shared” in error; when updated will affect all related objects \n• E.g., if two people have the same phone number, and then one person updates their phone number – does it affect both people? It complicates the update process in that sometimes data needs to be retained for some of the related objects. \n• Both relationships and the data values are updatable",
  },
  {
    question: "What are the six steps of a new application in SQL Server?",
    answer:
      "For a new application:\n1. Create a database\n2. Create users and roles within the database (mapped to server logins)\n3. Create schemas within the database – groupings of related data\n• Could be based on subjects, backup groupings (e.g., product catalog) or based on security groupings\n4. Create physical tables. Indexes, triggers, etc. associated with the schemas\n5. Grant privileges to the roles\n6. Add users to the roles",
  },
  {
    question: "How do you grant privileges to roles or users?",
    answer:
      "GRANT system_privilege\nTO rolename_or_username \nGRANT object_privilege ON database_object_name TO rolename_or_username;",
  },
  {
    question: "What are triggers?",
    answer:
      "Triggers are a special type of stored procedure that automatically runs when an event occurs in the database server. You can modify data before it is saved, write audit logs, send email, etc",
  },
  {
    question: "What are DML triggers?",
    answer:
      "DML triggers run when a user tries to modify data through a data manipulation language (DML) event. DML events are INSERT, UPDATE, or DELETE statements on a table or view. These triggers fire when any valid event fires, whether table rows are affected or not. For more information, see DML Triggers",
  },
  {
    question: "What are DDL triggers?",
    answer:
      "DDL triggers run in response to a variety of data definition language (DDL) events. These events primarily correspond to Transact-SQL CREATE, ALTER, and DROP statements, and certain system stored procedures that perform DDL-like operations.",
  },
  {
    question: "What are logon triggers?",
    answer:
      "Logon triggers fire in response to the LOGON event that's raised when a user's session is being established. You can create triggers directly from Transact-SQL statements or from methods of assemblies that are created in the Microsoft .NET Framework common language runtime (CLR) and uploaded to an instance of SQL Server.",
  },
];

export const week6 = [
  {
    question: "How does SQL server process queries and optimize query reuse?",
    answer:
      "SQL server processes queries and optimizes query reuse through execution plan caching, NOT data caching.",
  },
  {
    question: "What are the 2 modes of SQL Server?",
    answer: "Row mode and batch mode.",
  },
  {
    question: "What is row mode?",
    answer:
      "Row mode reads each row entirely for each source table and evaluates rest of query \n- Very efficient for OLTP applications (individual lookups and updates).",
  },
  {
    question: "What is batch mode?",
    answer:
      "Batch mode reads only columns involved in the query; stores the columns seperately in memory\n- Very efficient for Data Warehousing - where large amounts of data are read and aggregated\n- Uses Columnstore indexes",
  },
  {
    question: "What is the estimated execution plan?",
    answer: "The compiled plan, as produced by the Query Optimizer.",
  },
  {
    question: "What is the Actual Execution Plan",
    answer:
      "The Actual Execution Plan, which is the same as the compiled plan plus its execution context. This includes runtime information available after the execution complets, such as execution warnings, or in the newer versions of the Database Engine, the elapsed and CPU time used during execution.",
  },
  {
    question: "What is the Live Query Statistics?",
    answer:
      "The Live Query Statistics, which is the same as the compiled plan plus its execution context. This includes runetime information during execution progress, and is updated ever second. Runtime information includes, for example, the actual number of rows flowing through the operators.",
  },
  {
    question: "How does SQL server store triggers and procedures?",
    answer:
      "SQL Server stores only the source for Triggers and Stored Procedures. \nGets re-parsed & re-executret, but since identical code each time, it matches the cached queries.",
  },
  {
    question: "What is Transact-SQL?",
    answer:
      "T-SQL expands on the SQL standard to include procedural programming, local variables, various support functions for string processing, date processing, mathematics, etc. and changes to the DELETE and UPDATE statements. \n• Transact-SQL is central to using Microsoft SQL Server. All applications that communicate with an instance of SQL Server do so by sending Transact-SQL statements to the server, regardless of the user interface of the application. \n• Stored procedures in SQL Server are executable server-side routines. The advantage of stored procedures is the ability to pass parameters.”",
  },
  {
    question: "How are contexts seperated in T-SQL?",
    answer: "Has contexts seperated by the 'GO' statement.",
  },
  {
    question: "Whare are data warehouses?",
    answer:
      "Data warehouses store current and historical data and are used for reporting and analysis of the data.",
  },
];

export const fullQuestionList = [
  ...week1,
  ...week2,
  ...week3,
  ...week4,
  ...week5,
  ...week6,
];
