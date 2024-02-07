import { FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { AbstractDocument } from "./abstract.schema";
import { Logger, NotFoundException } from "@nestjs/common";

export abstract class AbstracRepository<TDocument extends AbstractDocument> {
    
    protected abstract readonly logger: Logger 

    //Constructor de la clas
    constructor (private readonly model: Model<TDocument>) {}

    async create(document: Omit<TDocument, '_id'>): Promise<TDocument>{ //se recibe un documento de tipo TDocument que se omite er indicamos que el id no se recibirá pues lo generamos nosotros mismos
        const createdDocument = new this.model({ //instanciamos el create en este mismo modelo
            ...document, //Obtenemos todo lo que traiga en documento que recibimos en el parametro
            _id: new Types.ObjectId(), //Generamos el id con moongose
        });
        return (await createdDocument.save()).toJSON() as unknown as TDocument;
    }

    async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument>{ //Recibimos informacion de tipo TDocument pero que la pasaremos por filterQuery para filtrar solo entre propiedades de TDocument
        const document = await this.model
        .findOne(filterQuery)
        .lean<TDocument>(true);

        if (!document){
            this.logger.warn('Documento no encontrado con filterQuery', filterQuery)
            throw new NotFoundException('El documento no fue encontrado')
        };

        return document;
    }

    async update(filterQuery: FilterQuery<TDocument>, update: UpdateQuery<TDocument> ): Promise<TDocument>{

        const document = await this.model
        .findOneAndUpdate(filterQuery, update, {
            new: true ,
        })
        .lean<TDocument>(true);

        if (!document){
            this.logger.warn('Documento no encontrado con filterQuery', filterQuery)
            throw new NotFoundException('El documento no fue encontrado')
        };

        return document;
    }

    async  findAll(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]>{

        return this.model.find(filterQuery).lean<TDocument[]>(true);

    }

    async delete(filterQuery: FilterQuery<TDocument>): Promise<TDocument>{
        return this.model.findOneAndDelete(filterQuery).lean<TDocument>(true)
    }





}