import { ethers } from "ethers";
import { LpReserveContract } from "../abi";
import { oneTime } from "../helpers/bond";
import { Networks } from "../constants/blockchain";
import { ContactsOutlined } from "@material-ui/icons";

export async function getMarketPrice(networkID: Networks, provider: ethers.Signer | ethers.providers.Provider): Promise<number> {
    const mimTimeAddress = oneTime.getAddressForReserve(networkID);
    const pairContract = new ethers.Contract(mimTimeAddress, LpReserveContract, provider);
    const reserves = await pairContract.getReserves();
    const marketPrice = reserves[0] / reserves[1];
    return marketPrice;
}
