// Purpose: Compile-time public API exercise.
import{fingerprint,FakeJev,normalize,type Event}from'../src/index.mjs';const e:Event={id:'1',message:'x'};normalize(e.message);void fingerprint([e],new FakeJev());
