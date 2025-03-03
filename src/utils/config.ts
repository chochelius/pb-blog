import PocketBase from 'pocketbase';

const url: string = 'https://pocketbase.erradica.cl';
//const url: string = 'https://pbe.choche.bond';
const client: PocketBase = new PocketBase(url);

export { client };
