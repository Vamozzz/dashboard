import { navItems } from "../types/firstTypeFile";
import { navBarIcons } from "../constants/imageConstans.tsx";


export const navConstants: navItems[] = [
  {
    id: "1",
    navText: "Home",
    isLink: true,
    link: "",
    navIcon:navBarIcons?.HomeIcon,
  },
  {
    id: "2",
    navText: "Transactions",
    isLink: false,
    link: "",
  },
  {
    id: "3",
    navText: "Transactions",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.TransactionIcon,
  },
  {
    id: "4",
    navText: "Settlements",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.SettlementIcon,
  },
  {
    id: "5",
    navText: "Refund",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.RefundIcon,
  },
  {
    id: "6",
    navText: "Payment Products",
    isLink: false,
    link: "",
  },
  {
    id: "7",
    navText: "Create Invoice",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.CreateinvoiceIcon,
  },
  {
    id: "8",
    navText: "Create Link",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.CreatelinkIcon,
  },
  {
    id: "9",
    navText: "Send Money",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.SendmoneyIcon,
  },
  {
    id: "10",
    navText: "Documentation",
    isLink: false,
    link: "",
  },
  {
    id: "11",
    navText: "API",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.ApiIcon,
  },
  {
    id: "12",
    navText: "Settings",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.SettingsIcon,
  }
];
