import { ethers } from "ethers";

import { ContractNames } from "../helpers/contractNames";
import * as factories from "../typechain/factories";


// Usage example:
// const contract = useContract<ContractType>(CONTRACT_ADDRESS, ContractNames.ContractName);
function useContract<T>(contractAddress: string, contractName: ContractNames): T | undefined {
    const [contract] = Object.entries(factories)
        .map(([key, value]) => {
                if (key === `${contractName}__factory`) return value;
            }
        );

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    return contract ? contract.connect(contractAddress, signer) as T : undefined;
}

export default useContract;