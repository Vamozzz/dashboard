import { navItems } from "../types/homeTypes.ts";
import { navBarIcons,CardAIcons, CardBIcons, CommonIcons, CardDIcons } from "../constants/imageConstans.tsx";


// navbar constant export

export const navConstants: navItems[] = [
  {
    id: "1",
    navText: "Home",
    isLink: true,
    link: "",
    navIcon:navBarIcons?.HomeNavIcon,
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
    navIcon: navBarIcons?.TransactionNavIcon,
  },
  {
    id: "4",
    navText: "Settlements",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.SettlementNavIcon,
  },
  {
    id: "5",
    navText: "Refund",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.RefundNavIcon,
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
    navIcon: navBarIcons?.CreateinvoiceNavIcon,
  },
  {
    id: "8",
    navText: "Create Link",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.CreatelinkNavIcon,
  },
  {
    id: "9",
    navText: "Send Money",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.SendmoneyNavIcon,
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
    navIcon: navBarIcons?.ApiNavIcon,
  },
  {
    id: "12",
    navText: "Settings",
    isLink: true,
    link: "",
    navIcon: navBarIcons?.SettingsNavIcon,
  }
];


// cardA constant export

export const settlementBalanceCardA = {
  type:"settlement",
  title: "Settlement Balance",
  amount: "₹80,650",
  Image1: undefined,
  Image1Fill:"",
  desc: "",
  Image2: CardAIcons?.Settlements,
  Image2Fill:"#3D3E40",
  bgColor:"#FAEAE6",
  strokeColor:"#F8D5CB",
  bgImage:CardAIcons?.SettlementBgCardA,
};

export const walletBalanceCardA = {
  type:"wallet",
  title: "Wallet Balance",
  amount: "₹80,650",
  Image1: CardAIcons?.AddWallet,
  desc: "Add Balance",
  Image2: CardAIcons?.Wallet,
  bgColor:"#F9E3EC",
  strokeColor:"#FCD3E4",
  bgImage:CardAIcons?.WalletBgCardA,
};

// cardB constant export

export const sendMoneyCardB = {
  id: "2",
  title: "Send Money",
  Image1: CardBIcons?.SendMoneyCardBIcon,
  Image2:CardBIcons?.SendMoneyCardBIcon
};

export const dynamicPaymentCardB = {
  id: "2",
  title: "Send Money",
  Image1: CardBIcons?.DynamicPaymentCardBIcon,
  Image2:CardBIcons?.SendMoneyCardBIcon
};

export const staticPaymentCardB = {
  id: "2",
  title: "Send Money",
  Image1: CardBIcons?.StaticPaymentCardBIcon,
  Image2:CardBIcons?.SendMoneyCardBIcon
};


//cardC constant export

export const totalPayinCardC = {
  type: "totalpayin",
    title: "Total Payin",
    amount: "₹80,650",
    average: "Avg monthly",
    averageStats: "11.9%",
    thisMonth: "This month",
    thisMonthStats: "11.9%",
    Image1: CommonIcons?.ArrowCommonIcon,
    Image2: CommonIcons?.GreenUpArrowCommonIcon,
    Image3: CommonIcons?.RedDownArrowCommonIcon,
    cardStyle:{
      backgroundColor:"#F1EAFF",
      borderColor:"#D5CBEA",
      // backgroundImage:,
      backgroundPosition: 'center',
    }
}

export const totalPayoutCardC = {
  type: "totalpayout",
  title: "Total Payout",
  amount: "₹80,650",
  average: "Avg monthly",
  averageStats: "11.9%",
  thisMonth: "This month",
  thisMonthStats: "11.9%",
  Image1: CommonIcons?.ArrowCommonIcon,
  Image2: CommonIcons?.GreenUpArrowCommonIcon,
  Image3: CommonIcons?.RedDownArrowCommonIcon,
  cardStyle:{
    backgroundColor:"#FFE9E9",
    borderColor:"#F9D1D2",
    // backgroundImage:"",
    backgroundPosition: 'center',
  }
}

export const totalSettlementCardC = {
  type: "totalssettlement",
  title: "Total Settlement",
  amount: "₹80,650",
  average: "Avg monthly",
  averageStats: "11.9%",
  thisMonth: "This month",
  thisMonthStats: "11.9%",
  Image1: CommonIcons?.ArrowCommonIcon,
  Image2: CommonIcons?.GreenUpArrowCommonIcon,
  Image3: CommonIcons?.RedDownArrowCommonIcon,
  cardStyle:{
    backgroundColor:"#D7E7D7",
    borderColor:"#B6D3B6",
    // backgroundImage:"",
    backgroundPosition: 'center',
  }
}

export const totalRefundCardC = {
  type: "totalrefund",
  title: "Total Refund",
  amount: "₹80,650",
  average: "Avg monthly",
  averageStats: "11.9%",
  thisMonth: "This month",
  thisMonthStats: "11.9%",
  Image1: CommonIcons?.ArrowCommonIcon,
  Image2: CommonIcons?.GreenUpArrowCommonIcon,
  Image3: CommonIcons?.RedDownArrowCommonIcon,
  cardStyle:{
    backgroundColor:"#B9D5E3",
    borderColor:"#92BDD3",
    // backgroundImage:"",
    backgroundPosition: 'center',
  }
}

// cardD constant export

export const upiTransactionDataCardD = {
  title: "UPI",
  totalTransaction: "Total Transaction",
  transactionCount: "No Of Transactions",
  totalTransactionStats: "₹80,650",
  transactionCountStats: "₹80,650",
  Image1:CardDIcons?.UpiCardDIcon,
  Image2:CardDIcons?.UpiCardDIcon,
  cardStyle:{
    backgroundColor:"#F2F2F2",
    borderColor:"#FCFCFCF",
  }
};

export const cardTransactionDataCardD = {
  title: "UPI",
  totalTransaction: "Total Transaction",
  transactionCount: "No Of Transactions",
  totalTransactionStats: "₹80,650",
  transactionCountStats: "₹80,650",
  Image1:CardDIcons?.UpiCardDIcon,
  Image2:CardDIcons?.UpiCardDIcon,
   cardStyle:{
    backgroundColor:"#F2F2F2",
    borderColor:"#FCFCFCF",
  }
};

export const netBankingTransactionDataCardD = {
  title: "UPI",
  totalTransaction: "Total Transaction",
  transactionCount: "No Of Transactions",
  totalTransactionStats: "₹80,650",
  transactionCountStats: "₹80,650",
  Image1:CardDIcons?.UpiCardDIcon,
  Image2:CardDIcons?.UpiCardDIcon,
   cardStyle:{
    backgroundColor:"#F2F2F2",
    borderColor:"#FCFCFCF",
  }
};
