export const week1 = [
  {
    question: "What is linux?",
    answer:
      "Just like Windows, iOS, and Mac OS, Linux is an operating system\n To put it simply, the operating system manages the communication between your software and your hardware. Without the operating system (OS), the software wouldn’t function.",
  },
  {
    question: "What are the six components of linux?",
    answer:
      "- Bootloader \n- Kernel\n- Init System \n- Daemons \n- Graphical Server \n- Desktop Environment \n- Applications",
  },
  {
    question: "What is the Bootloader?",
    answer:
      "The software that manages the boot process of your computer. For most users, this will simply be a splash screen that pops up and eventually goes away to boot into the operating system.",
  },
  {
    question: "What is the Kernel?",
    answer:
      "This is the one piece of the whole that is actually called “Linux”. The kernel is the core of the system and manages the CPU, memory, and peripheral devices. The kernel is the lowest level of the OS.",
  },
  {
    question: "What is the Init System?",
    answer:
      "This is a sub-system that bootstraps the user space and is charged with controlling daemons. It is the init system that manages the boot process, once the initial booting is handed over from the bootloader.",
  },
  {
    question: "What are Daemons?",
    answer:
      "These are background services (printing, sound, scheduling, etc.) that either start up during boot or after you log into the desktop.",
  },
  {
    question: "What is the graphical server?",
    answer:
      "This is the sub-system that displays the graphics on your monitor. It is commonly referred to as the X server or just X.",
  },
  {
    question: "What is the Desktop Environment",
    answer:
      "This is the piece that the users interact with. There are many desktop environments to choose from (GNOME, Cinnamon, Mate, KDE, Xfce, etc.). Each desktop environment includes built-in applications (such as file managers, configuration tools, web browsers, and games).",
  },
  {
    question: "Why should you use linux?",
    answer:
      "High security\n Installing and using Linux on your system is the easiest way to avoid viruses and malware. The security aspect\n was kept in mind when developing Linux and it is much less vulnerable to viruses compared to Windows.\n Programs cannot make changes to the system settings and configuration unless the user is logged in as the and\n Linux is open source software, the source code is available for review.\n High stability\n The Linux system is very stable and is not prone to crashes. The Linux OS runs exactly as fast as it did when\n first installed, even after several years.\n Ease of maintenance\n Maintaining the Linux OS is easy, as the user can centrally update the OS and all software installed very easily.\n All the variants of Linux have their own central software repository\nRuns on (almost) any hardware \nLinux runs on a range of hardware, right from supercomputers to watches. You can give new life to your old and \nslow Windows system by installing a lightweight Linux system. \nFree \nMost Linux distributions are completely free and users do not need to pay for anything. All the basic software \nrequired by a typical user and even an advanced user are available. \nOpen Source \nThe most important aspect of Linux is that its source code is available as it falls under the FOSS category (Free \nand Open Source Software). \nCustomization \nUsers have tremendous flexibility in customizing the system as per their requirements. There are more than \nhalf-a-dozen desktop environments to choose from.",
  },

  {
    question: "What is root, the user?",
    answer:
      "Root is referred to as Super user or Administrator in Linux\n• Login as root, you have the all the permissions /privileges to change system\nsettings. So do only what you have to do and know exactly what you are doing.\n• Root user’s home directory\n/root\n• Login as root, you can easily create a regular user account by using command\nuseradd, or change user password by using command passwd",
  },
  {
    question: "What command to change password?",
    answer: "passwd",
  },
  {
    question: "What command to find out who your are?",
    answer: "whoami",
  },
  {
    question: "What command to find host name?",
    answer: "hostname",
  },
  {
    question: "What command to name the operating system running?",
    answer: "uname",
  },
  {
    question: "What command to switch users?",
    answer: "su",
  },
  {
    question: "What command to list present working director with full path?",
    answer: "pwd",
  },
  {
    question: "What command to list/display directory content?",
    answer: "ls",
  },
  {
    question: "What command to change directory?",
    answer: "cd",
  },
  {
    question: "What are the linux file types?",
    answer:
      "• - (dash) indicates a simple/ordinary file\n• b indicates block device special file\n• c indicates character device special file\n• d indicates a directory\n• l indicates a symbolic link\n• p indicates a named pipe or FIFO",
  },
];

export const week2 = [
  {
    question: "What command to make a directory?",
    answer:
      "• Create a directory\nmkdir test\n• Create both parent and child directories\nmkdir –p parent/child",
  },
  {
    question: "What command to remove a directory?",
    answer:
      "rmdir\n • Remove empty directory (only if empty) \n• Options: -p \nRemove directory and its ancestors",
  },
  {
    question: "What command to remove a file?",
    answer:
      "Remove file(s) and/or directories\nrm file1 file2 file3\n• Options:\n• -r: remove directories and their contents\nrecursively\n• -f: ignore nonexistent file, never prompt\nrm –r -f test",
  },
  {
    question: "How to display the end of a file?",
    answer:
      "Display end of file. It defaults to 10 lines\nOptions:\n• -n number of lines\n• -f “follow” continues to show contents as it\ngets updated\ntail –n 20 /etc/passwd\ntail –f /var/log/apache2/error.log",
  },
  {
    question: "What are the commands for displaying content of text files?",
    answer:
      "tail\nDisplay the last 10 lines\nhead\nDisplay the first 10 lines\nmore\nDisplay text files page by page/line by line\nless\nLess is more\ncat\nDisplay the entire file\ntac\nDisplay the entire file in reverse order",
  },
  {
    question: "What command to copy files?",
    answer:
      "cp command\ncopy file(s) or directoires from one location to\nanother\ncp file1 file2 /home/friend\nOptions:\n-i: prompt before overwrite\n-b: make a backup of each destination file\n-u: copy only when source file is newer or\ndestination file is missing\n-r: copy directories recursively\ncp -r ~/dir1 ~/dir2\n--parent: append source path in destination\ndirectory\ncp –-parent /etc/passwd ~/",
  },
  {
    question: "What command to move files?",
    answer:
      "• move file(s)/dir(s) to someplace different\nmv file1 /dir1\n• rename file(s)\nmv file1 file2\n• Options: -i, -b, -u",
  },
  {
    question: "How to create a new file?",
    answer:
      "touch command\n• Create a new file\ntouch file1\n• Change existing file timestamps",
  },
  {
    question: "How to list files a in a tree like command?",
    answer:
      "tree command\n• List contents of directories in a tree-like format\n• Options: -a, -d, -L\n• Not available by default, to have it installed:\nsudo apt install tree",
  },
  {
    question: "How to output redirection & PIPE?",
    answer:
      "Output Redirection Operator (>)\nls > file1 (Redirect output to a file)\ncat /etc/fstab > file2 (Redirect output to a file)\n• Append Redirection Operator (>>)\nLets you append redirected output to the end of an existing file\nls >> file3 (Add output to the end of a file)\n• Using “|” to connect two commands. The output of the first command is the input of\nthe second command\nls /etc | more",
  },
  {
    question: "How to not overwrite files?",
    answer:
      "Setting noclobber flag prevents you from accidentally overwriting a file when you redirect output to a file\n• To setup noclobber\nset –o noclobber or set -C\n• To unset noclobber\nset +o noclobber or set +C\n• Examples:\n• date > f1\n• set –o noclobber\n• date > f1\n• set + noclobber\n• date > f1\n•To bypass or override the No Clobber mode, you can use a special operator. >|\n•Example:\n• date >| f1",
  },
  {
    question: "What does the wc command do?",
    answer:
      "wc command prints newline, word and byte counts for files\nOptions\n• -w: word counts\n• -l: line counts\n• -c: character counts\nExamples:\nwc ~/*\nwc -l /etc/fstab",
  },
  {
    question: "What does the cut command do?",
    answer:
      "The cut command allows you to strip text out of files and display the cut text on the screen or redirect it to\nanother file.\nSyntax: cut options filename\n• Options\n• -d: is used to identify the delimiter\n• -f: is used to identify which field you want\nExamples:\ncut -d: -f1 /etc/passwd\ncut -f1 /etc/passwd\ncut -d: -f1,3 /etc/passwd",
  },
  {
    question: "What does the paste command do?",
    answer:
      "The paste command pastes, or merges data from one file to another.\nExample:\npaste file1 file2\nThe above command merges each line from file2 with each line from file1\nThe content of the original files remain the same.",
  },
  {
    question: "How do you locate commands?",
    answer:
      "• locate the binary, source code, and manual page files for a command\n• It searches for files related to a utility by looking in in a list of standard Linux\nplaces (/bin, /etc, /usr/bin,/usr/local/bin/, etc.) instead of using your searching\npath ($PATH)\n• Options:\n• -b - Search only for binaries\n• -m - Search only for manual pages\n• -s - Search only for source codess",
  },
  {
    question: "How do you define aliases?",
    answer:
      "Define your own commands\nalias myls=‘ls -la’\nTo display all alias that have been defined\nalias\nRemove Alias\nunalias myls\n",
  },
  {
    question: "How do you switch to command mode in vim?",
    answer: "Hitting ESCAPE will get you back to Command Mode from other modes",
  },
  {
    question: "What are the commands to get into input mode?",
    answer:
      "i nsert before cursor\nI nsert before first nonblank character on line\na fter cursor\nA t end of line\no pen line below\nO pen line above\nr eplace current character\nR eplace character",
  },
  {
    question: "What are the commands in command mode?",
    answer:
      "h move cursor left\nj move cursor down\nk move cursor up\nl move cursor right\nx delete character\ndw delete word\ndd delete line\nZZ write and quit",
  },
];

export const week3 = [
  {
    question: "What is inode?",
    answer:
      "• Linux stores information about each file in a data structure called an\ninode.\n• Each inode is identified by a unique number called the inode number.\n• Every Linux filesystem begins with a large set of inode numbers.\n– When files are created the system creates an inode to describe the file\nand assigns the inode an empty inode number\n– When files are deleted the system removes its inode and marks the\ninode number as empty\n– A filesystem cannot create a new file unless it has an empty inode\nnumber\n• filesystems store inode numbers in a file called the inode list.\n• Inode numbers are specific to a single filesystem. Every file\non a filesystem has a unique inode number\n• Use the -i option with the ls command, to list the inode\nnumber of files.\nls -i",
  },
  {
    question: "How many characters long can files be in linux?",
    answer: "255",
  },
  {
    question: "What are the linux files types?",
    answer:
      "• Linux file types\n• simple/ordinary file\n• directory\n• symbolic link\n• special file (device)\n• named pipe (FIFO)",
  },
  {
    question: "What is a simple/ordinary file and what does it hold?",
    answer:
      "• used to store information and data on a secondary storage device, typically a disk\n• can contain source code, executable program, postscript code, pictures, audio, graphics, text, and so on..",
  },
  {
    question: "What is a soft link?",
    answer:
      "• A soft link is a special kind of file that contains a/npathname to another file/n• To create a symbolic link from slinkname to oldfilename:/nln -s oldfilename slinkname/n• Soft links are typically used in web development/n• Work/test area then moved to live area",
  },
  {
    question: "What is a hard link?",
    answer:
      "• A hard link is a connection between a filename and inodenumber. A user identifies files by filename while the kernelidentifies files by the inode number.\n• Hard links are typically used in backups \n• One file can have any number of hard links. The hard linksprovide different filenames for the same physical file\n• The kernel assigns the file an unused inode number andcreates the physical file\n• To create a hard link between newfilename and oldfilename:ln oldfilename newfilename\n• ! Changes made to either oldfilename or newfilename affectboth files because the changes are made to the same physicalfile.\n• Renaming either file will not affect the other.\n• Removing either file will not affect the other. The physical file will notbe removed from the disk until all hard links are deleted.\n• Copy soft/hard links\n• Copy a soft linkcp -d\n• Copy a hard linkcp -l",
  },
  {
    question: "What is a special file?",
    answer:
      "Special File (Device)\n• means of accessing hardware devices and processes\n• each hardware device is associated with at least one special file, anda command or application accesses a special file in order to accessthe corresponding device\n• Special files are typically stored in /dev directory\n• Some special files stored under /dev\n• cdrom - CD-ROM drive\n• fdn - floppy drive (n = drive #)\n• hdxn - non-SCSI hard drive (x = drive #, n = partition on drive)",
  },
  {
    question: "What are character and block devices?",
    answer:
      "Character devices and block devices\n• Character devices\n• Transferring information character by character\n• Block devices\n• Transferring blocks of information using memory buffers,\nwhich is much faster than character device\nExamples\nls -l /dev/fd0\nls -l /dev/input/mouse0",
  },
  {
    question: "Describe partitions.",
    answer:
      "A partition is a section of disk that holds a filesystem\n• The Master Boot Sector contains the Disk Partition Table, which can holdup to four entries due to the way in which the master boot record is structured\n• Each Disk Partition Table entry describes a partition by specifying its:\n• first cylinder\n• last cylinder\n• whether it is bootable\n• a filesystem type identifier. \n• A partition in the DPT can be either a Primary partition (more than one) or anExtended Partition (only one!)\n• First partition on drive is called a Primary partition\n• One of the four partition entries can be designated as an Extended partition.This allows for creating Logical drives, or sub-partitions, within it\n• You can have up to 4 primary partitions while there is only one extendedpartition",
  },
  {
    question: "What is the Ext2 filesystem?",
    answer:
      "•Ext2 stands for second extended filesystem.\n•It was introduced in 1993 to overcome the limitation\nof the original ext filesystem.\n•Maximum individual file size can be from 16 GB to 2\nTB with the file system size from 2 TB to 32 TB",
  },
  {
    question: "What is Ext3 filesystem?",
    answer:
      "• Ext3 stands for third extended filesystem.\n• It was introduced in 2001.\n• The main benefit of ext3 is that it allowsjournaling: higher security, more tracking ofchanges of the filesystem easier recovery ofdamaged file system\n• You can convert an ext2 file system to ext3 filesystem directly (without backup/restore).\n• Maximum individual file size can be from 16 GBto 2 TB with a file system size from 2 TB to 32 TB",
  },
  {
    question: "What is Ext4 file system?",
    answer:
      "• Ext4 stands for fourth extended file system.\n• It was introduced in 2008.\n• Supports huge individual file size and overall file system size.\n• Maximum individual file size can be from 16 GB to 16 TB\n• Overall maximum ext4 file system size is 1 EB (exabyte). 1 EB\n= 1024 PB (petabyte). 1 PB = 1024 TB (terabyte).\n• Directory can contain a maximum of 64,000 subdirectories (as\nopposed to 32,000 in ext3)",
  },
];

export const week4 = [
  {
    question: "What is the Windows approach to mounting a file system?",
    answer:
      "• Letters given to partitions, volumes, CD-ROM drives\n• “Pre-mounted” storage items available at any time\n• Performance is traded off for user convenience",
  },
  {
    question: "What is the Linux approach to mounting a file system?",
    answer:
      "• Mount file systems as they are needed\n• User convenience traded off for performance",
  },
  {
    question: "What does the fdisk command do?",
    answer:
      "• Linux fdisk command\n• Syntax: fdisk [options] device\n• Example, to list all partitions o f/dev/sdafdisk -l /dev/sda\n• command-line partition table manipulator for Linux\n• allows for viewing or modifying existing partition table and/or creatingnew partition(s) for a specified device\n• can read and access most of the common filesystems in use today",
  },
  {
    question: "What are the steps for creating a file system?",
    answer:
      "• Step 1: Prepare the drive\n• Create, modify or change partition information\n• Use fdisk command\n• Shows the partition table with file systems\n• Syntax: fdisk [options] [ device ]\n-v: prints version number of fdisk program\n-l: lists the partition tables for devices, then exits\nStep 2: Create the filesystem\n• Format the drive/partition(s) to the appropriate filesystem required\n• Use appropriate mkfs command\n• Used to format and define hard drive partitions\n• File system specific\n• Syntax: mkfs [options] device\n• Examples:\n• format the first logical drive with ext3 filesystem\nmkfs -t ext3 /dev/sda5\n• format floppy disk using ext2 filesystem\nmkfs -t ext2 /dev/fd0\n• Step 3: Verify the filesystem\n– Check filesystem for inconsistencies or errors\n– Use fsck command\n• Syntax: fsck [options] device\n• Example: fsck -t ext3 /dev/sda2\n• Exit code returned provides description of error\nStep 4: Mount the filesystem for access/use\n– Use appropriate mount command\n– OR Add the filesystem in the /etc/fstab file and mount automatically or semi-automatically\n",
  },
  {
    question: "What is UUID for partitions and what does it stand for?",
    answer:
      "• UUID stands for Universally Unique IDentifier and it is usedin Linux to identify disks/partitions in the /etc/fstab file.\n• This way, changing order of the hard disks or add/removing hard disks will not affect the mount points.\n• It is a good idea to have /etc/fstab using UUID instead of the/dev/xdx way to identify the disks/partitions.\n• Command used to list the UUIDs\nblkid\nblkid /dev/sda1",
  },
];

export const week5 = [
  {
    question: "What folder are password store din?",
    answer: "/etc/shadow",
  },
  {
    question: "What is the /etc/passwd file?",
    answer:
      "• It generally requires root access for modifications\n• It’s content can be viewed by anyone\n• Users can modify content related to their own account info using the appropriate commands only(such as passwd to change password)\n• All user passwords will be stored in /etc/shadow, accessible only by root or root processes",
  },
  {
    question: "What does an entry look like in /etc/passwd file?",
    answer:
      "A typical entry looks like this:\nuser1 : x: xxx : yyy : other info : /home/dir : /bin/bash\n1. login name - user name the user needs to type in to log into the system\n2. password field - An x character indicates that encrypted password is stored in a separate file: /etc/shadow\n3. UID - User ID associated to login name\n4. GID - main Group ID associated to login name\n5. other info or comment - other information about the user, such as real name, office #, telephone number, etc\n6. default home directory for user - set by administrator, directory is owned and managed by user\n7. default shell for user - shell that user will start in when login into the system\n• spacing exaggerated to enhance viewing. There are no spaces before or after the field delimiter (:)",
  },
  {
    question: "What does an entry in /etc/shadow look like?",
    answer:
      "Each entry in /etc/shadow contains the user's login, their encrypted password, and a number of fields relating to password expiration. A typical entry looks like this:user1 : /3GJllg1o4152 : 11009 : 0 : 99999 :7 : : :\n1. Username: up to 8 characters. Case-sensitive, usually all lowercase. A direct match to the username in the /etc/passwd file.\n2. Encrypted password: A '!' placed before encrypted password indicates the password has not been set or the account has been disabled.\n3. Last password change (lastchanged): Days since Jan 1, 1970 that password was last changed\n4. Minimum: The minimum number of days required between password changes i.e. the number of days left before the user is allowed to change his/her password\n5. Maximum: The maximum number of days the password is valid (after that user is forced to change his/her password)\n6. Warn : The number of days before password is to expire that user is warned that his/her password must be changed\n7. Inactive : The number of days after password expires that account is disabled\n8. Expire : days since Jan 1, 1970 that account is disabled i.e. an absolute date specifying when the login may no longer be used",
  },
  {
    question: "Describe the useradd command with the flags. (-d)",
    answer:
      "Used to create a new user account. Linux will also create a group with the same name by default.Syntax: useradd [options] username\n• -d Define home directory\n• -g Initial group name, the group name must exist\n• -G A comma-separated list of supplementary groups which the user is also a member of.\n• -c Any text string: add comments or other information: such as user’s full name\n• -N Do not create a group with the same name as username, but add the user to an existing group: users (GID=100)\n• -e Account expiration date: YYYY-MM-DD\n• -s Login shell\n• -m Create home directory if does not exist, and copy initial files contained in /etc/skel\nuseradd –D Display and change the default values\nWhen invoked without the -D option, the useradd command creates a new user account using the values specified on the command line and the default values from the system. \nExample:\nuseradd -c “Jo Bob” -d /home/jbob -m -g faculty -G comp, staff -e 2013-01-01 -s /bin/bash jbob",
  },
  {
    question: "What does the userdel command do?",
    answer:
      "• userdel [options] username\n• Remove an user from the system\n• Options\n• -r Remove the user’s home directory and files contained in it\n• Example:\nDelete the entries of user2 from /etc/passwd and /etc/shadow, but not delete the user’s home directory and files in it.userdel user2",
  },
  {
    question: "What does the usermod command do?",
    answer:
      "usermod [options] username\n• Allows for modifying most of the information stored in /etc/passwd associated with an user account\n• several options available to modify almost all of the information associated with any account, assuming the user has the right to modify the information",
  },
  {
    question: "What are the arguments for usermod command?",
    answer:
      "-c add comments or other information\n-d change home directory if –m option is given, the contents of the user’s home directory will be moved to the new home directory, which will be created if it doesn’t exist\n-g change initial group\n-G change supplementary groups which user is also a member of, if the user currently is a member of a group which is not listed, the user will be removed from the group\n-s change the login shell \n-e The date on which the user account will be disabled: YYYY-MM-DD\n-l Change login name\n-L Disable/lock user’s password, which will place a “!’ before encrypted password in \n/etc/shadow\n-U Enable/Unlock user’s password, which will remove the “!’ from encrypted password in \n/etc/shadow",
  },
  {
    question: "What does the chsh command do?",
    answer:
      "chsh [options] username\n• Changes login shell associated with a user account\n• if a shell isn’t specified on the command line, it will prompt for the shell to useOptions\n-s: specify the shell to associate to the accountExample: chsh -s /bin/bash user1",
  },
  {
    question: "Describe linux groups.",
    answer:
      "• Groups are a simple mechanism for allowing a “group” of users with common access requirements to have access capabilities which, individually, they do not have.\nAs such, users are generally associated to group(s) based on an identified need to access information they cannot access as a user alone. This is generally done by administrators.\n• All group information is maintained in the /etc/group and /etc/gshadow on the system. The format of this file is different than the /etc/passwd file.",
  },
  {
    question: "What is the format of a linux group?",
    answer:
      "An entry in /etc/group looks like this\nuser1:x:500:user2, user3\n1. group_name: It is the name of group. If you run ls -l command, you will see this name printed in the group field.\n2. Password: Generally password is not used, hence it is empty/blank. It can store encrypted password. This is useful to implement privileged groups.\n3. Group ID (GID): Each user must be assigned a group ID. You can see this number in your /etc/passwd file.\n4. Group List: It is a list of user names of users who are members of the group. The user names, must be separated by comma",
  },
  {
    question: "What does an entry in /etc/gshadow look like?",
    answer:
      "/etc/gshadow contains lines with the following colon-separated fields:\ngroup1:$1$VF61Ap3s$c7J6tC:user1:user1,user2\n1. group name\n2. encrypted password\n3. comma-separated list of group administrators\n4. comma-separated list of group members",
  },
  {
    question: "What does the command groupadd do?",
    answer: "Create a new group",
  },
  {
    question: "What does the commnd groupdel do?",
    answer: "Remove a group",
  },
  {
    question: "What does the command groupmod do?",
    answer: " Modify a group\n• Options\n• -g gid\n• -n groupname",
  },
  {
    question: "What does the command groups username do?",
    answer: "Displays which groups the user currently belongs to",
  },
  {
    question: "What does the command newgrp groupname do?",
    answer:
      "• Change group ID (effective group) to a new group they already belong to in during the login session\n• Prompt for group password if it is set to change to a group which the user is not a member of ",
  },
  {
    question: "What does gpasswd do?",
    answer:
      "gpasswd is used to administer the /etc/group and /etc/gshadow file. Every group can have administrators, members and a password. If a group password is set, non-member can supply a password to use newgrp command to change initial group",
  },
  {
    question: "What does the -A flag do with gpasswd?",
    answer:
      "-A Define group administrator which can add or delete members with –a and –d options",
  },
  {
    question: "What does the -r flag do with gpasswd?",
    answer:
      "-r Remove group password, only group members will be allowed to use newgrp to join the group",
  },
  {
    question: "What does the id command do?",
    answer:
      "id [options] username\n• prints UID, GID and groups information for username\n• if no user is specified, then current user is assumed",
  },
  {
    question: "What does the su command do?",
    answer:
      "su [-] username\n• allows for switching from one account to another\n• opens up a subshell as the new user\n• only possible if the user has the password for the other account\n• the dash (-), which must be preceded and followed by a space, indicates that the user wishes to use a login shell.\nWithout the dash (-), the su command will switch personalities but not associated environment settings",
  },
  {
    question: "How can you use {} to create a list of files or directories?",
    answer:
      "Using {} to create a list of files or directories\ntouch ~/dir1/{f1,f2,f3}\nmkdir ~/dir2/{a1,a2,a3}\nmkdir -p ~/backup/{old,new}/{labs{1,2,3},lecture{1,2,3}}",
  },
  {
    question: "What does the wildcard * do?",
    answer: "Matches 0 or more characters in a filename.",
  },
  {
    question: "What does the wildcard ? do?",
    answer: "Matches 1 character in a filename.",
  },
  {
    question: "What does the wildcard [aed] command do?",
    answer:
      "Matches 1 character in a filename provided it is either a, e, or d.",
  },
  {
    question: "What does the wildcard [a-e] command do?",
    answer:
      "Matches 1 character in a filename provided it is a, b, c, d, or e.",
  },
  {
    question: "What does the wildcard [!a-e] command do?",
    answer:
      "Matches 1 character in a filename provided it is not a, b, c, d or e.",
  },
  {
    question: "What does the grep command do?",
    answer:
      "grep command selects and prints lines from a file (or a bunch of files) or the standard output that match a pattern (a regular expression). ",
  },
  {
    question: "What do the options do with the grep command? -i, -v, -c, -n",
    answer:
      "-i Ignore uppercase and lowercase when comparing.\n-v Print only lines that do not match the pattern.\n-c Print only a count of the matching lines.\n-n Display the line number before each matching line.\ncat /etc/fstab | grep “ext3”\ngrep -v “ext3” /etc/fstab\ncat /etc/passwd | grep root\ngrep -c root /etc/group",
  },
  {
    question: "What does the find command do?",
    answer:
      "It allows you to search for files in the filesystem.\nIt locates the files in the directory tree based upon the criteria specified in the options\nThe general form of find command:find path expression\n• The current directory is used if path is not specified\n• Expression is comprised of options, tests and actions",
  },
  {
    question: "How can you use the find command?",
    answer:
      "find –mtime +90\nThe -mtime option takes an argument to specify the timeframe for the search. +90 indicates a file modified more than 90 days ago. \nfind / -name “*.mp3”\nTo find all mp3 filesfind –type d\nTo find all directories in current locationfind / -user hann 2> /dev/null\nTo find all files owned by “hann”, and ignore errors",
  },
  {
    question: "Describe inodes.",
    answer:
      "• Linux stores information about each file in a data structure called an inode.\n• Each inode is identified by a unique number called the inode number.\n• Every Linux filesystem begins with a large set of inode numbers. \n– When files are created the system creates an inode to describe the file and assigns the inode an empty inode number\n– When files are deleted the system removes its inode and marks the inode number as empty\n– A filesystem cannot create a new file unless it has an empty inode number.\n• filesystems store inode numbers in a file called the inode list. \n• Inode numbers are specific to a single filesystem. Every file on a filesystem has a unique inodenumber\n• Use the -i option with the ls command, to list the inode number of files. \nls -i",
  },
  {
    question: "What is a symbolic (soft) link?",
    answer:
      "• symbolic (soft) link to an existing file and/or directory on the system\n• points to existing file/directory, allowing for sharing it without actually duplicating it’s contents",
  },
  {
    question: "How do you create a symbolic(soft) link?",
    answer:
      "• A soft link is a special kind of file that contains a pathname to another file\n• To create a symbolic link from slinkname to oldfilename: \nln -s oldfilename slinkname",
  },
  {
    question: "What is a hard link?",
    answer:
      "• A hard link is a connection between a filename and inodenumber. A user identifies files by filename while the kernel identifies files by the inode number.\n",
  },
  {
    question: "How many hard links can a file have?",
    answer:
      " One file can have any number of hard links. The hard links provide different filenames for the same physical file",
  },
  {
    question: "What do inodes do in hard links?",
    answer:
      "The kernel assigns the file an unused inode number and creates the physical file",
  },
  {
    question: "What is the syntax to hard link a file?",
    answer:
      " To create a hard link between newfilename and oldfilename: \nln oldfilename newfilename",
  },
  {
    question: "Do changes made to one file in a hard link affect both files?",
    answer:
      " Changes made to either oldfilename or newfilename affect both of them because the changes are made to the same physical file.",
  },
  {
    question:
      "Will renaming or removing files effect the other in a hard link?",
    answer:
      "• Renaming either file will not affect the other. \n• Removing either file will not affect the other. The physical file will not be removed from the disk until all hard links are deleted. ",
  },
  {
    question: "What is the syntax to copy a soft link?",
    answer: "cp -d",
  },
  {
    question: "What is the syntax to copy a hard link?",
    answer: "cp -l",
  },
];

export const fullQuestionList = [
  ...week1,
  ...week2,
  ...week3,
  ...week4,
  ...week5,
];
