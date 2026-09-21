// Purpose: Guard the unwired paid comparison adapter.
if(!process.env.TYPESAFE_API_KEY)throw Error('Set TYPESAFE_API_KEY');throw Error('Live adapter not wired; zero requests made');
