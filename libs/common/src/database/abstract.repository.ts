import { Model } from "mongoose";
import { abstractDocument } from "./abstract.schema";
import { Logger } from "@nestjs/common";

export abstract class abstracRepository<Tdocument extends abstractDocument> {
    protected abstract readonly logger: Logger 

    //Constructor de la clas
    constructor (private readonly model: Model<Tdocument>) {}
}