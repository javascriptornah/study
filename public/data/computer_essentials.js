export default [
  {
    question: "What does CPU stand for?",
    answer: "Central processing unit.",
  },
  {
    question:
      "What is the difference between Harvard architecture and Von Neumann?",
    answer: "They have separate buses for data and instructions.",
  },
  {
    question: "What is parallel computing? ",
    answer: ": When computers have multiple processors",
  },
  {
    question: "What is the CPU execution cycle?",
    answer:
      "-	Fetch \n Data is read from memory and transferred to CPU’s control unit \n Decode \n CPU determines what is required to perform the instruction Execute CPU performs the instruction",
  },
  {
    question: "What are units of measurement for storage?",
    answer:
      "  Bit – Smallest unit of measurement. Can be a 1 or a 0  \n Byte – made up of 8 bits = 1 Byte \n Kilobyte – 1024 bytes = 1 KB \n Megabyte – 1024 Kilobytes = 1 MB\n Gigabyte – 1024 Megabytes = 1 GB\n Terabyte – 1024 Gigabytes = 1 TB \n Petabyte – 1024 Terabytes = 1 PB",
  },
  {
    question: "What is RAM?",
    answer:
      "Random Access Memory, (DRAM) – Dynamic, (SRAM) – Static Requires constant memory from capacitors and lots of power. Loses memory when turned off.",
  },
  {
    question: "What is ROM?",
    answer:
      "Read only memory. Does not need to be refreshed and requires little charge. Stores data while system is turned off. ",
  },
  {
    question: "What types of secondary memory are there?",
    answer:
      "-	Hard disks  \nOptical drives \nDVD/CD  \nMagnetic tape \nUSB thumb drive",
  },
  {
    question: "What is tertiary memory?",
    answer:
      "This type of memory is not attached to the computer. It is offsite data storage. Ex. Cloud storage",
  },
  {
    question: "What is the memory hierarchy?",
    answer:
      "Faster memory = more expensive. Small, fast storage is kept in CPU.",
  },
  {
    question: "What are the cache terms?",
    answer:
      "-	A hit is when data is found at a given memory level \n A miss is when it Is not found \n The hit rate is the percentage of time data is found at a give memory level \n The miss rate is the percentage of time it is not \n The hit time is the time required to access data at a given memory level \n The miss penalty is the time required to process a miss, including the time that it takes to replace a block of memory plus the time it takes to deliver the data to the process \n ",
  },
];

export const week2 = [
  {
    question: "What is the name, color and speed of USB 1.1 port?",
    answer: "Full speed port, white, max 12 Mbps.",
  },
  {
    question: "What is the name, color and speed of USB 2.0 port",
    answer: "Hi-Speed, black, max 480 Mbps",
  },
  {
    question:
      "What is the name, color and speed of USB 3.0m 3,1, 3.2 ports gen 1?",
    answer: "SuperSpeed, blue, max 5 Gbps",
  },
  {
    question:
      "What is the speed, color and extra features provided by usb 3.1 & 3.2 ports gen 2?",
    answer:
      "Some red or yellow. They are sleep-and-charge which allow charging of devices while the computer is in sleep mode. 10 Gbps max speed, known as SuperSpeed+",
  },
  {
    question: "What is the speed of USB 3.2 ports gen 2?",
    answer: "Max 20 Gbps.",
  },
  {
    question: "What sizes are hard drives in desktop vs laptop?",
    answer: "3.5” desktop, 2.5” laptop.",
  },
  {
    question: "What speed do mechanical hard drives spin at?",
    answer:
      "Early drives 3, 600 rpm. Today 5,400 – 7,200 rpm. High performers 10,000 – 15,000 rpm.",
  },
  {
    question: "What is a hard drive track?",
    answer:
      "Each platter consists of multiple concentric circles called tracks \n A typical platter contains thousands of tracks",
  },
  {
    question: "What is a sector?",
    answer:
      "A sector is a section of a track. Smallest unit of space that can be allocated. Holds 4kb per sector.",
  },
  {
    question: "What is a cluster?",
    answer:
      "A cluster is a number of sectors, 2 – 64. Smallest amount of space for any read/write operation",
  },
  {
    question: "What is seek time?",
    answer:
      "Time it takes for a disk arm to move into position over desired cylinder.",
  },
  {
    question: "What is rotational delay?",
    answer:
      "Time it takes for the desired sector to move into position beneath the read-write head.",
  },
  {
    question: "Access time?",
    answer: "Seek time + rotational delay",
  },
  {
    question: "What is transfer rate?",
    answer: "Speed at which data is transferred from the drive to the system.",
  },
  {
    question: "Mean Time To Failure (MTTF)?",
    answer:
      ": Statistically determined value often calculated experimentally. Usuallu doesn’t tell us much about the actual expected life. Design life is usually more realistic.",
  },
  {
    question:
      "S.M.A.R.T. (Self-Monitoring, Analysis, and Reporting Technology)",
    answer:
      "Many hard drives support S.M.A.R.T. which allows them to determine if they are failing. This is good to know so you can do a data backup.",
  },
  {
    question: "What are the advantages of SSDs?",
    answer:
      "-	5-10x faster \n No motors or bearings to fail \n No heads to crash \n Produce little heat and don’t vibrate \n Uses less pow \n ",
  },
  {
    question: "What are the disadvantages of SSDs?",
    answer: " \nHigher cost \nFinite lifetime \nGarbage collecti \n",
  },
];

export const week4 = [
  {
    question: "What are the three data backup types?",
    answer: "Full backup, differential backups, incremental backups",
  },
  {
    question: "What is a full backup?",
    answer:
      "Complete copy of the storage, except operating system. \n Files will have an archive bit that indicates if the file was back up. If the bit is ‘on’ then the file was not backed up. \n Backup will flip the bit to ‘off’.",
  },
  {
    question: "What is a differential backup?",
    answer: "Backups new and changed files since the last full backup.",
  },
  {
    question: "What is an incremental backup?",
    answer:
      "Creates backups of files that have changed since the most recent full or incremental backup.",
  },
];

export const week5 = [
  {
    question: "What is overflow?",
    answer:
      "When an arithmetic result cannot be stored within the range of binary digits available to the computer. Eg. A 8-bit byee can only represent -128 to 127",
  },
  {
    question: "What are the three simple rules to detect overflow?",
    answer:
      "(1)	If the sum of two positive numbers yields a negative result, the sum has overflowed.\n (2)	If the sum of two negative numbers yields a positive result, the sum has overflowed.\n (3)	Otherwise, the sum has not overflowed\n ",
  },
  {
    question: "What is underflow?",
    answer:
      "The result of a calculation too small to be represented by data. \n E.g. In mathematics 1 / 3 will be 0.3333\n E.g. in Java 1 / 3 underflows and becomes 0 i.e. 0.333 is too small to be represented by an integer data type.\n ",
  },
  {
    question: "How can you prevent or detect overflow?",
    answer:
      "Check the values of your variables before performing a calculation to predict if they will overflow.",
  },
];

export const week6 = [
  {
    question: "What type of hard drive should you defragment?",
    answer: "Mechanical. Do not defragment an SSD.",
  },
  {
    question: "Why do you need to defragment a hard drive?",
    answer:
      "Your hard drive can become split up into chunks (fragmented). Defragmenting brings files together for faster access.",
  },
  {
    question: "Why should you recycle electrical waste?",
    answer:
      "To prevent environmental damage from hazardous materials and to recover rare earth minerals",
  },
  {
    question: "What does the WEEE stand for?",
    answer: "Waste Electrical and Electronic Equipment.",
  },
  {
    question: ": How can malware infect your device?",
    answer:
      "-	Email attachments\n -	Spoofed links\n -	Social engineering\n -	P2P file sharing\n -	Bluetooth file transfers\n ",
  },
  {
    question: "What are malware worms?",
    answer:
      "Worms are likely autonomous programs (they do not require user interaction) that copies itself\n They don’t generally cause harm but their replicating nature take up hard disk space.",
  },
  {
    question: "What is a trojan?",
    answer:
      "Type of virus that hides inside a useful programs and performs operations in the background. \n -	May record keystrokes to collect passwor \n  -	Take advantage of security holes and allow remote access to computer \n -	Ransomware attacks \n ",
  },
  {
    question: "What is ransomware?",
    answer:
      "Encrypts the data on your hard drive and prevents you from using your computer\n To unencrypt you have to pay a ransom.\n ",
  },
  {
    question: "What are botnets?",
    answer:
      "Serious of computer that DDOS (Distributed Denial of Service) a target.\n -	May be distributed by worms, viruses and trojans\n -	Respond to command and controller\n ",
  },
  {
    question: "Why are worms hard to stop with malware prevention?",
    answer: "During detection, they may self replicate or re-infect.",
  },
  {
    question: "What is a firewall?",
    answer:
      "A firewall is a software/hardware used to control network traffic.\n-	Firewall closes unused ports and does not allow traffic though (port filter).\n-	Inspects packets received\n",
  },

  {
    question: "What is Intrusion Detection and Prevention systems (IDS/IPS)?",
    answer:
      "-	An IDS is designed to detect bad traffic \n -	An IPS is designed to block flagged traffic from continuing to its destination. \n ",
  },
  {
    question: "What file types are unsafe in e-mail?",
    answer: ".doc, .exe, .msi, .pif, .bat, .com, .cmd",
  },
];

export const week1 = [
  {
    question: "What is a pass phrase?",
    answer:
      "If you don’t want to use password management tool, you can use a phrase that is familiar to you.\nEx. I love to play badminton ILuv2PlyB@d<tin (hard to remember)\nQ: What are the rules for creating a strong password?\nA: At least 15 symbols in length. Ideally 60 or more.\nLower case, upper case, numbers punctuation",
  },
  {
    question: "What is the 8 4 rule? (out of date)",
    answer:
      "8 chars minimum, 4 = 1 lower case, 1 upper case, 1 number, 1 special character",
  },
];

export const week9 = [
  {
    question: "What is virtualization?",
    answer:
      "Access to single underlying piece of hardware, such as a server, is coordinated so that multipel guest operating systems (OS) can share that single piece of hardware.",
  },
  {
    question: "What is hypervisor?",
    answer:
      "A piece of software or firmware that enbales the segmentation and monitoring of physical hardware \n Two types of hypervisors: Type 1 and Type 2",
  },
  {
    question: "What is type 1 Hypervisor?",
    answer:
      "Type 1 Hypervisor runs directly on the systems hardware. No intermediary OS required. \n E.g. ESXi, Proxmox, Hyper-V \nTerm bare metal: It is an environment where a computer system or a network in which a virtual machine is installed directly on hardware rather than within the host operating system (OS). Ther term 'bare metal' refers to a hard disk, the usual medium on which a computer's OS is installed.",
  },
  {
    question: "What is type 2 Hypervisor?",
    answer:
      "Type 2 Hypervisor runs as an application within an OS environment. \nE.g. VMware Workstation, Oracle's VirtualBox. \nThe host hardware is the base on which the host operating system supports the virtualization application, which then hosts guest operating system(s)",
  },
  {
    question: "What are some reasons to use virtualization? (8)",
    answer:
      "- Hardware is underutilized \n-Datacenters run out of space \n-Energy costs are always rising \n-System adimistration costs are rising \n-Set up complex testing environments including networking \n-Faster access to other operating systems \n-A VM can be up and running while you use to host operating system \n- Access to other operating systems almost instatnly instead of shutting down your computer and restartign another operating system \n- Snapshots and undo disks. If after uninstalling a software update on a VM, the VM is unstable you can undo the update on the VM \n- Virtualized Hardware. \nWhen using a new hardware, ti can be difficult to get drivers for older operating systems. \n However, VM's have widely supported virtual hardware that is independent of the host OS, ",
  },
  {
    question: "What are some beenfits of virtualization (8)?",
    answer:
      "Shorten development cycles \n - Increase hardware utilization \n - Reduce problem resolution time \n-Increase productivity \n - Accelerate time-to-market \n-Improve project quality \n -Relocation from one machine to another as needed \n- Disaster protection / Failing Hardware",
  },
  {
    question: "What can be virtualized?",
    answer:
      "- Network \n- The splitting up of available bandwidth into seperate independent channels \n - Routers: including NAT and DHCP functionality \n - Storage \n - Containerization of storage seperates VM storage areas. This means that each VM is allocated a dedicated storage space \n - The pooling of physical storage from multiple network storage devices into what appears to be a single storage device such as SAN - Storage Area Networks \n- CPU \n-Independent but very similar technologies by Intel (VT-x) and AMD (AMD-V) which are aimed to improve the processor performance for common virtualization challenges like translating instructions and memory addresses.",
  },
];

export const week10 = [
  {
    question: "What is partitioning?",
    answer:
      "Partitioning is the process of sub- dividing a physicaly drive into smaller units called partitions. \nEvery hard drive must have at least one partition before it can be formatted.",
  },
  {
    question: "What are the reasons for using multipel partitions? (3)",
    answer:
      "- Increase performance \n- Simplify backups \n-Installation of multiple operating systems",
  },
  {
    question: "What file system does Windows use?",
    answer:
      "-FAT (8, 12, 16, 32; exFAT for flash drives) \n-NTFS (most modern Windows computers)",
  },
  {
    question: "What file system does Linux use?",
    answer:
      "UFS (the Unix File System)\n-ext*, and many, many others\n-mkfs\n-fsck (journaling on ext3, reiserfs, etc.)",
  },
  {
    question: "What are the three partition methods that windows supports?",
    answer:
      "Master Boot Record (MBR) \n- Oldest method \n -Only works on hard drives that are 2 TB or less \nGUID partitioning table (GPT) \n-Global Unique Identifier Partition Table \n- Similar to MBR but with extra features \nWindows dynamic storage partition \n- Proprietary",
  },
  {
    question: "What are the two types of partitions?",
    answer: "- Primary \n- Extended",
  },
  {
    question: "What is the primary partition?",
    answer:
      "- Stores the operating system \n - If you want to boot from the hard drive it must have a primary aprtition \n-Maximum of four primary partitions \n-DOS and Windows 9x operating systems only support one primary partition \n- Can be used to install multiple operating systems \n -Only one primary partition can be active, the actice partition is the one that will be booted from",
  },
  {
    question: "What is an extended partition?",
    answer:
      "- Is not bootable \n - A hard drive can only have one extended partition \n- Uses one of the four entries in the partition table leaving only three entries for primary partitions \n- You can add up to 24 logical partitions or drives from the extended partition \n- Each logical drive is assigned its own unique drive letter",
  },
  {
    question: "What are Drive Letters?",
    answer:
      "- Each disk volume is assigned a drive letter to identfiy it \n- The first drive letter used by hard drives is C \n- Drive letters are assigned in a specific order \n- All primary partitions first \n- Then all logical drives \n- Finally other connected devices such as CD-ROMS \n- Historically, drive letters A: and B: were reserved for floppy disk drives",
  },
  {
    question: "What is drive formatting?",
    answer:
      "After partioning, your drive must be formatted before it can be used \n- Formatting creates three essntial disk structures... \n- Creates and configures the volume boot sector \n- Creates two copies of the File Allocation Table \n- Creates a blank root directory",
  },
  {
    question: "What is a low-level drive format (full format)",
    answer:
      "- Checks for tracks and sectors marked as bad during initil low-level format \n- The format utility will try and write and read these disk areas with data, this also erases any old data still on the disk (i.e. a surface scan) \n- If the read/write operation fails, then the format will mark bad clusters in the FAT. Bad clusters are not written or read from in future file operations \n- The surface scan is time consuiming, but ensures a reliable disk",
  },
  {
    question: "What is a high-level drive format (quick format)",
    answer:
      "- Does not do a surface scan, i.e. the disk is not checked for reliability \n- The FAT is cleared, drive contents remain unchaged",
  },
  {
    question: "What is the GUID Partition Table (GPT)?",
    answer:
      "The Global Unique Identifier Partition Table shares a lot with the MBR nut fixes a lot of the limitations of the MBR \n Fixes include: \n- Each partition on your drive includes a 'global unqiue identifier' \n- Capable of containing a maximum of 128 partitions of almost any size hard disk \n- Arranged in LBA (logical block address instead of sectors) \n- Instead of MBR and partition table, they use a GPT header and partition entry array. Both are located at the beginning and end of the drive so there is a protected backup copy.",
  },

  {
    question: "What are dynamic disks?",
    answer:
      "With the introduction of Windows 2000, Microsoft defined a type of partitionign called Dynamic storage partitioning, better known as Dynamic Disks \n- A drive structure created wit ha dynamic disk is called a volume\n - There is no dynamic disk equivalent to a primary or extended partitions \n - The terms volume and partition refer to the same thing. A defined space of your hard drive. ",
  },

  {
    question: "What are the advantages of dynamic disks?",
    answer:
      "- You can create as many volumes as you wish \n- You can span volumes over multiple drives \n - You can implement RAID \n - Extend volumes over multiple drives",
  },
  {
    question: "What are the types of volumes?",
    answer:
      "Simple volumes \n- Similar to primary partitions and work in the same way \n - If you have a hard drive and want to make half of E: and maek the other drive half F: you create two simple volumes on a dynamic disk and that's it. \nSpanned volumes use unallocated space on multiple drives to create a single volume \nRisks: \n- If any of the spanned drives fail, then the entire volume (data) is lost. \nStriped volumes are RAID 0 volumes. Unallocated space on two hard drives are striped. \n Risks: \n- If any of the drives fail, then the entire volume (data) is lost. \nMirrored volumes are RAID 1 volumes. Unallocated space on two hard drives are mirrored. \nAdvantage: \n- If any of the drives fail, then the other keeps running. \nRAID 5 volumes are RAID 5 arrays. A RAID 5 volume requires three or more dynamic disk with equal size unallocated spaces. ",
  },

  {
    question: "What is partition software and what does it do?",
    answer:
      "General partition software included with an operating system allow you to perform many tasks. \n- Create a new partition or logical drive\n- Set the active partition \n- Delete a partition \nOne of the two main software packages are included \nFDISK \n- All operating systems up to Windows Me and Linux \nDISKPART \n- Windows 2000, XP, Windows 7, 8, 10 and 11 \n With the included software, partitions cannot be changed without losing the data on the partition. \n- You must delete the partition and then recreate it, \nAftermarket utilities offer some distinct advantages \n- Resize and split partitions on the fly, without data loss \n- Convert between different file systems \n- Copy or move partition to a different physical drive \n- A popular partioning program is PartitionMagic",
  },
];

export const week11 = [
  {
    question: "What are directory files?",
    answer: "These file(s) contain files and other directories (folders).",
  },
  {
    question: "What are special files?",
    answer:
      "These files are also known as device files (drivers). \nThese files represent physical devices such as disks, tterminals, printers, networks, tape drives, etc...",
  },
  {
    question: "How are attributes stored in Windows?",
    answer: "They are stored as a 32-bit binary number",
  },
  {
    question: "What are 6 common file attributes?",
    answer:
      "- Read-Only (R) \nHidden (H) \nSystem (S) \nDirectory (D) \nArchive (A) \nNot Content Indexed (I)",
  },
  {
    question: "What does Read-Only (R) files do?",
    answer:
      "The Read-Only attribute will prevent software programs from saving changes to a file. \nTHis is useful if you ant to write protect a file. Note that a Read-Only file will not prevent it rom being deleted.",
  },
  {
    question: "What is a System (S) file?",
    answer:
      "A file or directory used exclusively by the operating system which should not be altered or deleted. \nBy default System Files are hidden as we don't want users accidentally deleting them.",
  },
];

export const week12 = [
  {
    question: "What is an IP address?",
    answer: "IP address represents Internet Protocol address",
  },
  {
    question: "What is an operating system?",
    answer:
      "It is a program that allows devices like video, sound, modem and NIC cards, mouse, keyboards, monitors and so on to communicate with each other. It manages hardware and software resources.",
  },
  {
    question: "What are the three parts of OS (Operating System)?",
    answer: "- Kernel (core) \n- User interface \n- APL interface",
  },
  {
    question: "What is kernel mode?",
    answer:
      "It manages memories, input/output, CPU execution instruction codes",
  },
  {
    question: "What is user interface (user mode)?",
    answer:
      "It allows users to intereact with the OS settings, like printing, opening/closing applications, createing/deleting files, changing the background",
  },
  {
    question: "What is the API layer?",
    answer: "It allows devices to talk to the OS.",
  },
  {
    question: "What is Unix?",
    answer: "Unix is a command line OS and it is used for the internet.",
  },
  {
    question: "What is DOS?",
    answer: "- command line \n- 16 bit \n- single task",
  },
  {
    question: "What is Windows 95x?",
    answer: "-GUI (Graphical user interface) \n-32, 64 bit\n- multitask",
  },
  {
    question: "What is Linux?",
    answer:
      "- GUI and command line \n- 32 and 64 bit \n- Ubuntu, Kubuntu, Mint, Red hat, Suse, Fedora, Debian",
  },
  {
    question: "What does Kernel do?",
    answer:
      "- Memory management \n-Process management \n-File management \n- I/O (input/output) management",
  },
  {
    question: "What is a file system?",
    answer:
      "- It stores data in a storage device and organizes them so they can be found easily. \nWindows uses NTFS foe the file system to organize the data \nDII (Dynamic link Libraries). These are the system files. Usually used for commands like Open file, File Save, Search print and more. \n FAT 12, FAT 16, FAT 32, NTFS \nEach of these FAT increases in cluster size, file size and volume size.",
  },
  {
    question: "What are partitions?",
    answer:
      "Partitions are sections on the hard drive that store data. \nPrimary, extended, logical \nPrimary are bottable partitions and contains OS \nExtended is NOT bootable and contains logical drive \nLogical: not bootable, contains data file or OS",
  },
  {
    question: "What are the illegal characters in file system?",
    answer: " / ? : * '' > < |",
  },
  {
    question: "How long can windows file names be?",
    answer: "255 characters",
  },
  {
    question: "What is a file attribute?",
    answer:
      "A file access classification that determines how a file can be viewed or whether it can be edited.",
  },
  {
    question: "How to get to terminal in linux?",
    answer: "Ctrl + Alt + T",
  },
  {
    question: "What does ~ (Tilde) mean in linux?",
    answer: "~ User's home directory.",
  },
  {
    question: "What does $ mean in linux?",
    answer: "$ means standard user.",
  },
  {
    question: "What does # mean in linux?",
    answer: "Super user.",
  },
  {
    question: "What does ipconfig do?",
    answer:
      "Displays the current configuration for the network Interface Cards (NIC) in the system.",
  },
  {
    question: "What are the options for ipconfig",
    answer:
      "/all - displays a long listing for the NIC's \n/release - remove the current ip address for the NIC\n/renew - acquire a new IP addres from DHCP \n/flushdns - clears the DNS entries from the local DNS record",
  },
  {
    question: "What does the shell command Ping do?",
    answer:
      "icmp echo request to a target system. \nOften used to see if a particulate system or NIC is up.",
  },
  {
    question: "What does the shell command Tracert do?",
    answer:
      "Reports the route to a destination system hop by hop. Useful in diagnosing network issues.",
  },
  {
    question: "What does set do in batch commands?",
    answer:
      "Sets a variable to a certain value. Set has options: \n/A - arithmetic expression \n/P - prompt for user input",
  },
  {
    question: "How many bits is Unicode?",
    answer: "32.",
  },
];

export const fullQuestionList = [
  {
    question: "What is a good password length?",
    answer: "Minimuim 15 characters. Ideally 60 characters or more.",
    url: null,
  },
  {
    question: "What character types should be included in a strong password?",
    answer:
      "- Lower case alphabets \n- Upper case alphabets \n- Numbers \n- Punctuation characters",
    url: null,
  },
  {
    question: "What is SATA?",
    answer: "Serial AT Attachment \nMeans data is sent serially",
    url: null,
  },
  {
    question: "What is PATA?",
    answer: "Parallel AT Attachment \nMeans data is sent in parallel",
    url: null,
  },
  {
    question: "What size is a sector?",
    answer:
      "4 KB. Used to be 512 bytes. \nA sector is the smallest physical storage unit on the disk.",
    url: null,
  },
  {
    question: "What is a cylinder (mechanical hard drive)?",
    answer:
      "\n-Definition: Agroup of tracks of the same diameter is called a cylinder\n- Each track is located directly over the same track on subsequenct platters\n- The number of tracks on one side of a platter is therefore equal to the number of cylinders",
    url: null,
  },
  {
    question: "What is a track (mechanical hard drive)?",
    answer:
      "Each platter consists of multiple concentric circles called tracks \nA typical platter contains thousands of tracks",
    url: null,
  },
  {
    question: "What is a sectory (mechanical hard drive)?",
    answer:
      "- A sector is a section of a track \n- A sectory is the smallest unit of space on your hard drive that can be allocatd \n- Traditionally held 512 bytes of data\n- Now 'Advanced Format' drives hold 4 KB per sector",
    url: null,
  },
  {
    question: "What is a cluster (mechanical hard drive)?",
    answer:
      "- A cluster is a number of sectors ranging from 2 - 64 depending on how the drive is formatted \n- A cluster is the smallest amount of space that can be used for any read/write operation",
    url: null,
  },
  {
    question: "What is seek time?",
    answer:
      "The time that it takes for a disk arm to move into position over the desired cylinder.",
    url: null,
  },
  {
    question: "What is rotational delay?",
    answer:
      "The time that it takes for the desired sector to move into position beneath the read-write head.",
    url: null,
  },
  {
    question: "What is access time?",
    answer: "Seek time + rotational delay",
    url: null,
  },
  {
    question: "What is transfer rate?",
    answer:
      "The speed at which data is transferred from the drive to the system after it has been accessed.",
    url: null,
  },
  {
    question: "What is Mean Time To Failure (MTTF)?",
    answer:
      "Statistically-determed value often calculated experimentally.\n It usually doesn't tell us much about the actual expected life of the disk. Design life is usually more realistic.",
    url: null,
  },
  {
    question:
      "What is S.M.A.R.T. (Self-Monitoring, Analysis, and Reporting Technology)",
    answer:
      "Many hard drives support S.M.A.R.T. which allows them to determine if they are failing. This is good to know so you can do a full data backup before the drive actually fails.",
    url: null,
  },
  {
    question: "What is hard drive capacity confusion?",
    answer:
      "Some manufacturers of hard disk drives calculate the capacity in DB by dividing by 1000 \nThis results in advertising a significantly higher number than the formatted drive capacity that's reported by the operating system.",
    url: null,
  },
  {
    question: "What is a head crash?",
    answer:
      "A head crash is a hard-disk failure that occurs when a read-write head of hard disk drive comes in contact with its rotating platter, resulting in permanent damage to the magnetic medi on the platter surface.\nA head crash can be initiated by dirt, or excessive shock or vibration.",
    url: null,
  },
  {
    question: "What is an SSD",
    answer:
      "- A solid state drive is a component that looks and acts like a traditional hard drive, but is much faster.\n- Adding a solid state drive to a computer can dramatically imrpove performance \n-Instead of storing data on magnetic media, data is stored in NAND flash memory.",
    url: null,
  },
  {
    question: "What are the advantages of SDDs (3)?",
    answer:
      "Much better performance - Potentially 5 to 10 times faster compared to tradiitonal mechical hard drives \n- Reliability of no moving parts - No motors or bearings to fail \n-No heads to crash \n- Produce very little heat (usually cool to the touch) and don't vibrate \n- Use regular SATA data and power connectors \n- Very light and uses much less power - excellent for portable computers",
    url: null,
  },
  {
    question: "What are the disadvantages of SDDs (3)?",
    answer:
      "- Higher cost - Cost per GB of storage on SSD compared to traditional hard drive is slightly more expensive than a mechanical hard drive. \n- Finite lifetime - NAND cells have a limted amount of times that their contents can be changed before they're incapable of further changes \n- Garbage collection - The way SSDs delete data and reuse that space is more difficult to manage than with traditional hard drives",
    url: null,
  },
  {
    question: "What is a page (SSD)?",
    answer:
      "SSDs write data in pages. Pages are the like sectors on a traditional hard drive - they are the smallest portion of the SSD that can be addressed.",
    url: null,
  },
  {
    question: "What are blocks (SSDs)?",
    answer:
      "SSDs delete data in blocks. Blocks are made up of multiple (usually hundreds) of pages. \n- While it would be much more efficient to be able to delete individual pages, it isn't possible because the voltage required to do so would corrupt data in other nearby pages.",
    url: null,
  },
  {
    question: "What is the Von-Neumann model?",
    answer:
      "Von Neumann archietecture is based on the stored-program computer concept, where instruction data and program data are store in the same memory.",
    url: null,
  },
  {
    question: "What changed with Harvard architecture?",
    answer: "Today's system have seperate buses for data and instructions",
    url: null,
  },
  {
    question: "What is the bottleneck with Von Neumann?",
    answer:
      "The computing system throughput limitation due to inadequate rate of data transfer between memory and the CPU.",
    url: null,
  },
  {
    question: "What are registers?",
    answer:
      "- Temporary storage spaces \n- Known as general purpose registers: AX, BX, CX, DX \n- NOT memeory addresses \n- Used for data manipulation by the CPU",
    url: null,
  },
  {
    question: "What is cache?",
    answer:
      "Fast memory that resides in the CPU. Allows for quick data storage and retrieval",
    url: null,
  },
  {
    question: "What are cores?",
    answer:
      "Multicoe processors have two or more processor cores sharing a single die. \nEach core has its own ALU and set of registers, but all processors share memory and other resources.",
    url: null,
  },
  {
    question: "What is DRAM?",
    answer:
      "DRAM is 'cheap' memory owing to its simple design. \nThe term random access means that any part of the memory can be accesed with equal ease. \nDRAM is referred to as volatile in that when the computer is turned off the contents are lost. \nThe amount of DRAM has a direct effect on the speed of a computer \nThe electrical charges in the capacitors drain ,therefore requiring constant refreshing by the memory controller \nThis results in a performance penalty and limits speed.",
    url: null,
  },
  {
    question: "What is SRAM?",
    answer:
      "- Static Random Access Memory \n- Maintains its contents for as long as power is applied. \n- Very fast, but very expensive and requires more power to operate \n- Uses no capacitors, meaning no refreshing\n- SRAM is lower in density compared to other cips, making chips large and expensive. \n- Used in CPU's as memory and video cards, etc...",
    url: null,
  },
  {
    question: "What is a hit (cache terms)?",
    answer: "A hit is when data is found at a given memory level.",
    url: null,
  },
  {
    question: "What is a miss (cache terms)?",
    answer: "A miss is when it is not found.",
    url: null,
  },
  {
    question: "What is the hit rate (cache terms)?",
    answer:
      "The hit rate is the percentage of time data is found at a given memory level.",
    url: null,
  },
  {
    question: "What is the miss rate (cache terms)?",
    answer: "The miss rate is the percentage of time it is not.",
    url: null,
  },
  {
    question: "What is the time time (cache terms)?",
    answer:
      "The hit time is the time required to access data at a given memory level",
    url: null,
  },
  {
    question: "What is the miss penalty (cache terms)?",
    answer:
      "The miss penalty is the time required to process a miss, including the tiem that it takes to replace a block of memory plus the time it takes to deliver the data to the processor.",
    url: null,
  },
  {
    question: "What is virtual memory?",
    answer:
      "- Virtual memory enhances performance by providing greater memory capacity, without the expense of adding main memory.\n- Instead, a portion of da disk drive serves as an extension of main memory.\n- A physicaly address is the actual memory address of physcal memory.\n Programs create virtual addresses that are mapped to physical addresses by the memory manager.",
    url: null,
  },
  {
    question: "What are some examples of natural disasters?",
    answer: "-Flood \n-Fire \n- Earthquake \n- Tornado",
    url: null,
  },
  {
    question: "What are some examples of unnatural disasters?",
    answer:
      "Accidental \n- Overwrote assignemnt \n- Delete pictures/documents folder \n- Dropped computer \nIntentional \n- Malware such as ransomware or virus \n- Computer was hacked",
    url: null,
  },
  {
    question: "What are the 4/5 types of backups?",
    answer:
      "- Images \n- Full \n- Incremental or Differential \n- Unstrcutured or 'one-off' ",
    url: null,
  },
  {
    question: "What is an image backup?",
    answer:
      "- An image backup is a full backup of the entire structure of the hard drive, including the operating system. \n- Often used to replicate software, settings and data across many computers. ",
    url: null,
  },
  {
    question: "What is a full data backup?",
    answer:
      "A full backup is a complete byte copy of the target data - minus the operating system.",
    url: null,
  },
  {
    question: "What are the advantages and disadvantages of full data backups?",
    answer:
      "Advatange \n- Fastest data restore of the three types as you usally only need the last full backup \nDisadvantage\n- Needs the most storage space as there are a lot of duplicate files(multiple full data backups have duplicated files across each one)",
    url: null,
  },
  {
    question: "What is a differential backup?",
    answer:
      "- Differential backups are designed to backup new and changed files since the last full backup. \n- The presence of the archive attribute on a file indicates that the file has been modified and only files with this attribute are backed up.",
    url: null,
  },
  {
    question:
      "What are the advantages and disadvantages of differential backups?",
    answer:
      "Advantages \n- Quick to restore data (full + last differential) \nDisadvantage \n- Needs more storage space than incremental backups because there are a lot of duplicate files stored.",
    url: null,
  },
  {
    question: "What is an incremential backup?",
    answer:
      "- Designed to create backups of files that have changed since the most recent full or incremental backup \n- The presence of the arhcive atribute indicates that the file has been modified and only files with this attribute are backed up. \n- When a file is backed up, the archive attribute is cleared. If the file is later modified, this attribute is set, which indicates that the file needs to be backed up.",
    url: null,
  },
  {
    question:
      "What are the advantages & disadvantages of incremential backups?",
    answer:
      "Advantages \n- Very fast to backup data\n- Very little storage space needed as there are no duplicate files stored \nDisadvantage\n- Long time to restore data (full + all incremental backups)",
    url: null,
  },
  {
    question: "What is a unstructured or 'one-off' backup?",
    answer:
      "- Never automatic. \n- The target storage will change depending on the circumstance \n- Usually used for one file or one folder. \n- (Copy of one file on a memory stick)",
    url: null,
  },
  {
    question: "What is overflow",
    answer:
      "When an arithmetic result cannot be stored within the range of binary digits available to the computer (number of bits). \n- This can be above the max value, as well as below the min value\n- E.g. a Java 8-bit byte can only reprent -128 to 127 (inclusive) \n- - If the sum of two positive numbers yields a negative result, the sum has overflowed. \n- If the sum of two negative numbers yields a positive result, the sum has overflowed \n- Otherwise, the sum has not overflowed.",
    url: null,
  },
  {
    question: "what is underflow?",
    answer:
      "Underflow is the result of a calculation that is too small to be represented by the data type. \n- E.g. in mathematics 1/3 will be 0.3333 (3 repeating) \n- E.g. in Java 1/3 underflows and becomes 0 i.i. 0.333 is too small to be represented by a Java integer type which cannot represent fractional numbers.",
    url: null,
  },
  {
    question: "What is the Sign Bit (IEEE 754)?",
    answer:
      "Indicates if the number is positive or negative. \n- If the sign bit is 0 then the number is positive \n- If the sign bit is 1 then the number is negative",
    url: null,
  },
  {
    question:
      "What are the steps to convert a decimal number to IEEE 754 single precision format?",
    answer:
      "1. Convert the decimal number to binary \n2. Normalize the binary fractional number \n Move the decimal place so that there is always a 1 to the left of the decimal \n3. COnvert the exponent to 8 bit excess 127 notation \nK+n = 127 + n = Exponent \nConvert to binary \n4. Convert the significant/mantissa to 'hidden bit format' \nremove the 1 from the left of the decimal \nSign bit: 0 for positive numbers, 1 for negative numbers\n5. List the three parts in order. \nSign bit: 1 bit\nExponent: 8 bits\nMantissa: 23 bits\n6. Sign bit Exponent Mantissa \n7. Convert the final answer to HEX to make it easy to read",
    url: null,
  },
  {
    question:
      "Show example of IEEE conversion >2 represents binary, etc >16 is HEX ^3 represents power of 3",
    answer:
      "Convert 8.7510 to IEEE 754 Single precision format\n Step 1. Convert 8.75 to binary\n- 8.75 = 1000.11>2 \nStep 2: Normalize the Binary fractional number 1000.11>2 * 2>0\n- Move the decimal place so that there is a 1 to the left of the decimal\n- 1.00011 * 2^3 Step 3. Convert the exponent to 8 bit excess 127 notation\n- The number of places we moved the decimal + 127\n- 3+127 = 130 convert to binary 1000 0010\nStep 4. Convert the significant/mantissa to “hidden bit format”\n- remove the 1 from the left of the decimal.\n 1.00011 becomes 00011 \nDetermine the sign Bit\n- Since the number 8.75>10 is positive the sign bit is 0\nStep 5\n -Sign bit: 0 \n-Exponent: 1000 0010 \n-Mantissa: 00011 \n-Step 6: 0100 0001 0000 1100 0000 0000 0000 00002 \n-Step 7 Convert the final answer to Hex to make it easy to read \n-410C000016",
    url: null,
  },
  {
    question:
      "Show example 2 of IEEE conversion >2 represents binary, etc >16 is HEX ^3 represents power of 3",
    answer:
      "Convert -0.510 to IEEE 754 Single precision format \nStep 1. Convert 0.5 to binary:\n- 0.510 = 0.12\n- Step 2. Normalize the Binary fractional number 0.12 * 20\n- Move the decimal place so that there is a 1 to the left of the decimal\n- 1.0 * 2^-1 (we had to move right in this case, hence 2 raised to -1)\n- Step 3. Convert the exponent to 8 bit excess 127 notation\n- The number of places we moved the decimal + K\n- -1 + 127 = 126 convert to binary 0111 1110>2 \n- Step 4. Convert the significant/mantissa to “hidden bit format”\n- remove the 1 from the left of the decimal.\n- 1.0 becomes 0\n- Determine the sign Bit\n- Since the number -0.510 is negative the sign bit is 1\n- Step 5\n- Sign bit: 1\n- Exponent: 0111 1110 = 126\n- Mantissa: 0\n- Step 6: 1011 1111 0000 0000 0000 0000 0000 0000\n- Step 7: Convert the final answer to Hex to make it easy to read\n- 3f000000>16",
    url: null,
  },
  {
    question:
      "Show example 3 of IEEE conversion >2 represents binary, etc >16 is HEX ^3 represents power of 3",
    answer:
      "Convert -1.062510 to IEEE 754 Single precision format\n- Step 1. Convert -1.0625 to binary:\n-  -1.0625>10 = 1.0001>2\n-  Step 2. Normalize the Binary fractional number 1.0001>2 * 2^0\n-  There is no need to move the decimal place in this example\n-  1.0001 * 2^0\n- Step 3. Convert the exponent to 8 bit excess 127 notation\n-  K + 0 = 127 + 0 = 127 convert to binary 0111 1111>2\n-  Step 4. Convert the significant/mantissa to “hidden bit format”\n-  remove the 1 from the left of the decimal.\n-  1.0001 becomes 0001\n-  Determine the sign Bit\n-  Since the number -1.0625>10 is negative the sign bit is \n- Step 5: Since the number we are converting is negative the sign bit is: 1\n-  Sign bit: 1\n-  Exponent: 0111 1111 = 127\n-  Mantissa: 0001\n-  Step 6 : 1011 1111 1000 1000 0000 0000 0000 0000>2\n-  Step 7 Convert the final answer to Hex to make it easy to read\n-  BF880000>16\n- ",
    url: null,
  },
  {
    question: "What are worms (malware)?",
    answer:
      "Worms are most likely autonomous programs(they do not require us\n- interaction) that copies (replicates) itself. Worms may carry a variety of payloads and may appear to behave as a virus.\n- Worms generally don’t cause any harm to their host(computer) but theirreplicating nature consumes hard disk space, slowing down the host computer.\n- Spread through (across) vulnerable network connections or through storagemedia.\n- Payloads are often Trojan program",
    url: null,
  },
  {
    question: "What are trojans (malware)?",
    answer:
      "A Trojan is a type of virus; it “hides” inside a useful program, and performs\n “operations” in the back ground that the user is unaware of\n May record keystrokes to collect passwords or other sensitive data, or\n load malicious software\n Take advantage of security holes and create a means for remote users to\n control the computer (backdoor access)\n Ransomware attacks are typically carried out using a Trojan that is\n disguised as a legitimate file",
    url: null,
  },
  {
    question: "What is phishing?",
    answer:
      "Main goal is identity theft\nSpam emails are made to look like they come from trusted sources like banks,\neBay, PayPal, government, etc.\nLook very authentic, use company logos and graphics, mimic corporate\nweb pages\nMessage text will claim some problem has arisen with your account and that\nyou must log on to resolve the issue by clicking on the link provided\n",
    url: null,
  },
  {
    question: "What is spear phishing?",
    answer:
      "Is an e-mail spoofing fraud attempt that targets a specific organization seeking\nconfidential data for financial gain, trade secrets, or military information\nAppears to come from a trusted source i.e. someone in authority within\nrecipient's own company\nE-mail looks authentic\nAsks you to log into a bogus page that requests user name and password or\nclick on a link\nIf you click on the link it will download spyware or other programs.\n",
    url: null,
  },
  {
    question: "What is Hypervisor?",
    answer:
      "A piece of software or firmware that enables the segmentation and monitoring of physical hardware.",
    url: null,
  },
  {
    question: "What is type 1 Hypervisor?",
    answer:
      "Type 1 Hypervisor runs directly on the systems hardware. No intermediary OS\nrequired e.g. ESXi, Proxmox, Hyper-V\n• Term bare metal: It is an environment where a computer system or network in\nwhich a virtual machine is installed directly on hardware rather than within the\nhost operating system (OS). The term 'bare metal' refers to a hard disk, the\nusual medium on which a computer's OS is installed.\n",
    url: null,
  },
  {
    question: "What is type 2 Hypervisor?",
    answer:
      "Type 2 Hypervisor runs as an application\nwithin an OS environment.\n• E.g. VMware Workstation, Oracle’s\nVirtualBox\n• The host hardware is the base on which\nthe host operating system runs on. The\nhost operating system supports the\nvirtualization application, which then hosts\nguest operating system(s).",
    url: null,
  },
  {
    question: "What is the master boot record (MBR)?",
    answer:
      "The first physical sector of every hard drive contains the Master Boot Record\n• This is cylinder 0, head 0, sector 1\n• The MBR contains two elements\n• Executable code that locates a bootable partition\n• Partition table, which identifies each partition residing on the hard drive\n• The partition table has four entries supporting up to four bootable partitions",
    url: null,
  },
  {
    question: "What is a primary partition?",
    answer:
      "Primary partition\n• Stores the operating system\n• If you want to boot from the hard drive it must have a primary partition\n• Maximum of four primary partitions\n• DOS and Windows 9x operating systems only support one primary\npartition\n• Can be used to install multiple operating systems\n• Only one primary partition can be active, the active partition is the one\nthat will be booted from",
    url: null,
  },
  {
    question: "What is an extended partition?",
    answer:
      "Extended partition\n• Is not bootable\n• A hard drive can only have one extended partition\n• Uses one of the four entries in the partition table leaving only three\nentries for primary partitions\n• You can add up to 24 logical partitions or drives from the extended\npartition\n• Each logical drive is assigned its own unique drive letter",
    url: null,
  },
  {
    question: "Which partitions are bootable?",
    answer: "- Primary",
    url: null,
  },
  {
    question: "Which partitions are active?",
    answer: "",
    url: null,
  },
  {
    question: "What are special files?",
    answer:
      "These files are also known as device files (drivers).\n• These files represent physical devices such as disks, terminals, printers,\nnetworks, tape drives, etc..",
    url: null,
  },
  {
    question: "What are character special characters?",
    answer:
      "data is handled character by character such as in case of computer mice or terminals.",
    url: null,
  },
  {
    question: "What are block special files?",
    answer:
      "data is handled in blocks as in the case of disks and data backup tapes.",
    url: null,
  },
  {
    question: "What are file attributes?",
    answer:
      "Attributes can be in files, directories, volumes and certain system objects. They\nare used by the operating system and software applications to define file system\nbehavior.\n• Attributes in the Windows operating system (Win32) are stored a as 32-bit\nbinary number.",
    url: null,
  },
  {
    question: "What is a Read-Only (R) file attribute?",
    answer:
      "The Read-Only attribute will prevent software programs from saving changes to a file.",
    url: null,
  },
  {
    question: "What is a hidden (H) file attribute?",
    answer:
      "A file marked with the hidden attribute will be hidden from view under normal viewing conditions.",
    url: null,
  },
  {
    question: "What is a system (S) file attribute?",
    answer:
      "A file or directory used exclusively by the operating system whichshould not be altered or deleted.\n- By default System Files should are hidden as we don’t want users accidentlydeleting them.",
    url: null,
  },
  {
    question: "What is a directory (D) file attribute?",
    answer:
      "This attribute is tagged to folders (directories) or sub-folders to differentiate them from files",
    url: null,
  },
  {
    question: "What is an Archive (A) file?",
    answer:
      "This bit is used by software applications that modify files as well as\nbackup software as a “communication link”. Some backup software allows\nincremental backups by the user, which only backs up files that have changed\nsince the previous backup.\n• When the backup software archives or backs up the file, it resets the archive bit\n(tagging it zero or Off). Any software that subsequently make changes to the file\nis expected to set the archive bit.\n",
    url: null,
  },
  {
    question: "What does the pause command do (batch files)?",
    answer: "Halts the script until the user has pressed a key",
    url: null,
  },
  {
    question: "What does the set command do (batch files)?",
    answer:
      "Sets a variable to a certiain value. Set has options. \n- /A - arithmetic expression\n- /P - prompt the user input",
    url: null,
  },
  {
    question: "What was ASCII based on?",
    answer: "ASCII was based upon telecommunications (Telex) codes",
    url: null,
  },
  {
    question: "What is ipconfig?",
    answer:
      "ipconfig can be used to display the TCP/IP network configuration of your computer, as well as troubleshoot connectivity issues. (Transmission Control Protocol / Internet Protocol i.e. more protocols)",
    url: null,
  },
  {
    question: "What does the ping command do?",
    answer:
      "Determines if your Network Interface Card (NIC) is working, using a reserved IP address 127.0.0.1",
    url: null,
  },
  {
    question: "What does ipconfig /flushdns do?",
    answer: "Clear out the DNS cache",
    url: null,
  },
  {
    question: "What is seek time (hard drive)?",
    answer:
      "Seek time is the time that it takes for a disk arm to move into position over the desired cylinder.",
    url: null,
  },
  {
    question: "What is rotational delay?",
    answer:
      "Rotational delay is the time that it takes for the desired sector to move into position beneath the read-write head.",
    url: null,
  },
  {
    question: "What does FDISK do?",
    answer:
      "Formattes or partitions a hard disk drive, or to delete different portions of it.",
    url: null,
  },
  {
    question: "What is the difference between partitioning and virtualization?",
    answer:
      "With partitioning, there is no hypervisor that virtualizes the underlying hardware. There is no software layer seperating the VM and the physical motherboard. There is, in fast, no VM.",
    url: null,
  },
];
