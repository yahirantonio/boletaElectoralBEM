import { Candidate } from "../interface/dataInterface";

// these are codes important to export json and image in TypeScript
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.json"{
    const dataValue: Candidate;
    export default dataValue;
}