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
