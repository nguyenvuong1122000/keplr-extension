import {MsgSend, StdFee, makeSignDoc, StdSignDoc} from "@cosmjs/launchpad";

function createStdSigDoc(json_data:any): StdSignDoc{        
    //TODO: Vinh write this function
    let arr_amino_msg : MsgSend[] = json_data.messages
    let fee : StdFee = json_data.fee

    return makeSignDoc(
        arr_amino_msg, 
        fee, 
        json_data.chainId, 
        json_data.memo, 
        json_data.accountNumber, 
        json_data.sequence
    )
  }

describe("Test decode sign doc", () => {
  it("should decode properly", function () {
    var json_data = JSON.parse('{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"cosmos1cucktugx700g2n3h38ccg7fskv8znmkkv04ktf","to_address":"cosmos1dencwcmk74r23sqtx47fd5p4apmwfkgcf4ct6v","amount":[{"denom":"stake","amount":"100"}]}],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}, "chainId":"cosmoshub-4","memo":"","accountNumber":"1","sequence":"1"}')
    const signDoc = createStdSigDoc(json_data)
    console.log(signDoc)
    console.log(signDoc.msgs)
  })
});
