import { ethers } from "ethers";

import { ContractNames } from "../helpers/contractNames";
import * as factories from "../typechain/factories";

const useContract = (contractAddress: string, contractName: ContractNames) => {
    const [contract] = Object.entries(factories)
        .map(([key, value]) => {
                if (key === `${contractName}__factory`) return value;
            }
        );

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    return contract?.connect(contractAddress, signer || provider);
};

export default useContract;