const week9_module_11 = [
    {
        question: "How many bits are in a IPv4 address?",
        answer: "32 bits",
        img: null,
    },
    {
        question: "What 2 portions are an IPv4 address made up of?",
        answer: "Network & host",
        img: "images/networking/ipv4_net_host.png",
    },
    {
        question:
            "What is used to determine the network and host portions of an ip address?",
        answer: "A subnet mask is used to determine the network and host portions",
        img: null,
    },
    {
        question:
            "How do you identify the network and host portions of an IPv4 address?",
        answer: "The subnet mask is compared to the IPv4 address bit for bit, from left to right.\n• The actual process used toidentify the network andhost portions is calledANDing.",
        img: "images/networking/anding.png",
    },
    {
        question: "What is a subnet mask prefix?",
        answer: "It is the number of bits set to one in the subnet mask.",
        img: "images/networking/prefix.png",
    },
    {
        question: "How do you find the network addres?",
        answer: "• A logical AND Boolean operation is used in determining the network address. • Logical AND is the comparison of two bits where only a 1 AND 1 produces a 1 and any other combination results in a 0.\n • 1 AND 1 = 1, 0 AND 1 = 0, 1 AND 0 = 0, 0 AND 0 = 0\n • 1 = True and 0 = False\n • To identify the network address, the host IPv4 address is logically ANDed, bit by bit, with the subnet mask to identify the network address. ",
        img: "images/networking/anding_network.png",
    },
    {
        question: "What are the three types of addresses within each network?",
        answer: "• Network address\n• Host addresses\n• Broadcast address",
        img: "images/networking/net_host_broad.png",
    },
    {
        question: "What is Unicast transmission?",
        answer: "• Unicast transmission is sending a packet to one destination IP address. \n• For example, the PC at 172.16.4.1 sends a unicast packet to the printer at 172.16.4.253. ",
        img: "images/networking/unicast.png",
    },
    {
        question: "What is a Broadcast transmission?",
        answer: "• Broadcast transmission is sending a packet to all other destination IP addresses. \n• For example, the PC at 172.16.4.1 sends a broadcast packet to all IPv4 hosts. ",
        img: "images/networking/broadcast.png",
    },
    {
        question: "What is a Multicast transmission?",
        answer: "• Multicast transmission is sending a packet to a multicast address group. \n• For example, the PC at 172.16.4.1 sends a multicast packet to the multicast group address 224.10.10.5. ",
        img: "images/networking/multicast.png",
    },
    {
        question:
            "How are private IPv4 addresses routed to the public internet?",
        answer: "• Network Address Translation (NAT) translates private IPv4 addresses to public IPv4 addresses. \n• NAT is typically enabled on the edge router connecting to the internet. \n• It translates the internal private address to a public global IP address. ",
        img: "images/networking/NAT.png",
    },
    {
        question:
            "Which IPv4 address range is reserved for Loopback Addresses?",
        answer: "• 127.0.0.0 /8 (127.0.0.1 to 127.255.255.254) \n• Commonly identified as only 127.0.0.1 \n• Used on a host to test if TCP/IP is operational.",
        img: "images/networking/loopback.png",
    },
    {
        question:
            "What IPv4 address range is reserved for Link-Local addresses?",
        answer: "• 169.254.0.0 /16 (169.254.0.1 to 169.254.255.254) \n• Commonly known as the Automatic Private IP Addressing (APIPA) addresses or self- assigned addresses. \n• Used by Windows DHCP clients to self-configure when no DHCP servers are available.",
        img: null,
    },
    {
        question: "What are the legacy Classful Address group ranges? (A-E)",
        answer: "RFC 790 (1981) allocated IPv4 addresses in classes \n• Class A (0.0.0.0/8 to 127.0.0.0/8) \n• Class B (128.0.0.0 /16 – 191.255.0.0 /16) \n• Class C (192.0.0.0 /24 – 223.255.255.0 /24) \n• Class D (224.0.0.0 to 239.0.0.0) \n• Class E (240.0.0.0 – 255.0.0.0) \n• Classful addressing wasted many IPv4 addresses. \nClassful address allocation was replaced with \nclassless addressing which ignores the rules of classes (A, B, C). ",
        img: null,
    },
    {
        question:
            "Who manages and allocates blocks of IPv4 & IPv6 addresses to Regional Internet Registries (RIRs)?",
        answer: "The Internet Assigned Numbers Authority (IANA) manages and allocates blocks of IPv4 and IPv6 addresses to five Regional Internet Registries (RIRs).",
        img: null,
    },
    {
        question:
            "What are RIRs (Regional Internet Registries) responsible for?",
        answer: "RIRs are responsible for allocating IP addresses to ISPs who provide IPv4 address blocks to smaller ISPs and organizations.",
        img: null,
    },
    {
        question: "What is the only device that stops broadcasts?",
        answer: "• The only device that stops broadcasts is a router. \n• Routers do not propagate broadcasts. \n• Each router interface connects to a broadcast domain and broadcasts are only propagated within that specific broadcast domain.",
        img: "images/networking/broadcast_domain.png",
    },
    {
        question: "What is the problem with a large broadcast domain?",
        answer: "A problem with a large broadcast domain is that these hosts can generate excessive broadcasts and negatively affect the network.",
        img: null,
    },
    {
        question: "What is the solution to a large broadcast domain?",
        answer: "• The solution is to reduce the size of the network to create smaller broadcast domains in a process called subnetting. \n• Dividing the network address 172.16.0.0 /16 into two subnets of 200 users each: 172.16.0.0 /24 and 172.16.1.0 /24. \n• Broadcasts are only propagated within the smaller broadcast domains",
        img: "images/network/broadcast_solution.png",
    },
    {
        question: "What are the reasons for segmenting networks?",
        answer: "• Subnetting reduces overall network traffic and improves network performance. \n• It can be used to implement security policies between subnets. \n• Subnetting reduces the number of devices affected by abnormal broadcast traffic.",
        img: "images/networking/subnetting_reasons.png",
    },
    {
        question: "Click to see subnet table (part one)",
        answer: "",
        img: "images/networking/subnet_table_part1.png",
    },
    {
        question: "Click to see subnet table (part two)",
        answer: "",
        img: "images/networking/subnet_table_part2.png",
    },
    {
        question: "Click to see subnet table (part three)",
        answer: "",
        img: "images/networking/subnet_table_part3.png",
    },
    {
        question:
            "How many bits does a private ip address of 172.16.0.0/16 need for at least 100 subnets?",
        answer: "Consider a large enterprise that requires at least 100 subnets and has chosen the private address 172.16.0.0/16 as its internal network address. \n• The figure displays the number of subnets that can be created when borrowing bits from the third octet and the fourth octet. \n• Notice there are now up to 14 host bits that can be borrowed (i.e., last two bits cannot be borrowed). \nTo satisfy the requirement of 100 subnets for the enterprise, 7 bits (i.e., 27 = 128 subnets) would need to be borrowed (for a total of 128 subnets). ",
        img: "images/networking/100_subnets_example.png",
    },
    {
        question:
            "How many bits does a private ip address of 10.0.0.0/8 need for 1000 Subnets?",
        answer: "Consider a small ISP that requires 1000 subnets for its clients using network address 10.0.0.0/8 which means there are 8 bits in the network portion and 24 host bits available to borrow toward subnetting. \n• The figure displays the number of subnets that can be created when borrowing bits from the second and third. \n• Notice there are now up to 22 host bits that can be borrowed (i.e., last two bits cannot be borrowed). \nTo satisfy the requirement of 1000 subnets for the enterprise, 10 bits (i.e., 2 10 =1024 subnets) would need to be borrowed (for a total of 128 subnets) ",
        img: "images/networking/1000_subnets_example.png",
    },
    {
        question: "What is an Intranet?",
        answer: "A company’s internal network typically using private IPv4 addresses",
        img: null,
    },
    {
        question: "What is VLSM used for?",
        answer: "It is used to subnet a subnet. If you have a subnet of 300 addresses, but only require 8, you can split that subnet in multiple subnets.",
        img: null,
    },
    {
        question: "What kind of ip addresses should End User Clients have?",
        answer: "Most use DHCP to reduce errors and burden on network support staff. IPv6 clients can obtain address information using DHCPv6 or SLAAC.",
        img: null,
    },
    {
        question:
            "What kind of ip addresses should Servers and Peripherals have?",
        answer: "These should have a predictable static IP address.",
    },
    {
        question:
            "What kind of ip addresses should Servers that are accessible from the internet have?",
        answer: "Servers must have a public IPv4 address, most often accessed using NAT",
    },
    {
        question: "What kind of ip addresses should intermediary devices have?",
        answer: "Devices are assigned addresses for network management, monitoring, and security.",
    },
];

export const allWeeks = [week9_module_11];
