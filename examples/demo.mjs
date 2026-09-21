// Purpose: Group synthetic stack variants offline.
import{fingerprint,FakeJev}from'../src/index.mjs';const e=[{id:'1',message:'Database timeout 12345',service:'api'},{id:'2',message:'Database timeout 99999',service:'api'}];console.log(await fingerprint(e,new FakeJev()));
