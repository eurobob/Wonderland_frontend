import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import DAIIcon from "../../assets/tokens/DAI.e.png";
import TcroIcon from "../../assets/tokens/ONE.svg";
import MimTimeIcon from "../../assets/tokens/TIME-MIM.svg";
import TcroTimeIcon from "../../assets/tokens/TIME-TCRO.svg";

import { StableBondContract, LpBondContract, ONEBondContract, StableReserveContract, LpReserveContract } from "../../abi";

/*export const mim = new StableBond({
    name: "dai",
    displayName: "DAI",
    bondToken: "DAI",
    bondIconSvg: DAIIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.ONE]: {
            bondAddress: "0x694738E0A438d90487b4a549b201142c1a97B556",
            reserveAddress: "0x130966628846BFd36ff31a822705796e8cb8C18D",
        },
    },
});*/

export const wone = new CustomBond({
    name: "wONE",
    displayName: "wONE",
    bondToken: "ONE",
    bondIconSvg: TcroIcon,
    bondContractABI: ONEBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.ONE]: {
            bondAddress: "0x042f303A481cc78E655A80B34976b1b221711396",
            reserveAddress: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
        },
    },
});

export const oneTime = new LPBond({
    name: "FOHMO_ONE_LP",
    displayName: "FOHMO-ONE LP",
    bondToken: "ONE",
    bondIconSvg: MimTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.ONE]: {
            bondAddress: "0xfA5E5657cD6068517239Fc3DB7a4F500c32E7734",
            reserveAddress: "0x9272D859306A572D22e20900d6e0106A619e5c29",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

/*export const tcroTime = new CustomLPBond({
    name: "tcro_time_lp",
    displayName: "TIME-TCRO LP",
    bondToken: "TCRO",
    bondIconSvg: TcroTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.ONE]: {
            bondAddress: "0xc26850686ce755FFb8690EA156E5A6cf03DcBDE1",
            reserveAddress: "0xf64e1c5B6E17031f5504481Ac8145F4c3eab4917",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/TCRO/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});*/

export default [wone, oneTime];
