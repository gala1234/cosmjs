import { useOptions, getContractVersion, getStateParams, bondMixNode, unbondMixnode, getAllDelegationsPaged, delegateToMixNode } from "./client/client";
// import { qwertyOptions } from "./client/networks/qwerty";
import { sandOptions } from "./client/networks/sandbox";

async function main() {
    console.log('Hello world!')

    // Create or load account
    const [address, client] = await useOptions(sandOptions).setup("password", ".new.key");

    console.log("mnemonic: ", await useOptions(sandOptions).recoverMnemonic("password", ".new.key"));

    // Display the wallet address
    let account = await client.getAccount(address)
    console.log("Our address is: " + address);
    console.log("Our account is: ", account);

    // Check the wallet balance
    let balance = await client.getBalance(address, "unym");
    console.log(`The balance of ${address} is ` + balance.amount + balance.denom);


    console.log(await getContractVersion(client))
    console.log('get_all_delegations', await getAllDelegationsPaged(client, 1))
    // console.log('delegate to a node', await delegateToMixNode(client, address, 1))
    console.log('stateParams', await getStateParams(client))
    // console.log('bonde mix node', await bondMixNode(client, address))
    // console.log('unbond', await unbondMixnode(client, address));
}


main();



